const core = require('@actions/core')
const https = require('https')

const slackBotToken = core.getInput('slack-bot-token')
const topTeamApiKey = core.getInput('top-team-api-key')
const slackChannelName = core.getInput('slack-channel-name')
const fallbackSlackTeamId = core.getInput('fallback-slack-team-id')
const githubCommitAuthorName = core.getInput('github-commit-author-name')
const githubActionRunUrl = core.getInput('github-action-run-url')

// Configuration for TopTeam API access
const TOP_TEAM_API_OPTIONS = {
  hostname: 'team.toptal.net',
  path: '/public/graphql',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token token=${topTeamApiKey}`,
  },
}

// Configuration for Slack API access
const SLACK_API_OPTIONS = {
  hostname: 'slack.com',
  path: '/api/chat.postMessage',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${slackBotToken}`,
  },
}

const getSlackMessage = (
  slackHandle,
  githubActionRunUrl
) => `Hello <${slackHandle}>!
Build ${githubActionRunUrl} is currently failing on master, please fix it to unblock the release candidate or let the proper team know.`

const sendSlackMessage = body => {
  const slackRequest = https.request(SLACK_API_OPTIONS, slackResponse => {
    slackResponse.on('data', slackResult => {
      const result = JSON.parse(slackResult)

      if (!result.ok) {
        console.error(result)
      }
    })
  })

  slackRequest.write(JSON.stringify(body))

  slackRequest.on('error', error => {
    console.error(error)
  })

  slackRequest.end()
}

const communicationChannelsBody = JSON.stringify({
  query: `
    query GetOrganizationUnits {
      orgUnits {
        nodes {
          directRoles {
            member {
              communicationChannels {
                value
                kind
                link
              }
            }
          }
        }
      }
    }
    `,
  variables: {},
})

const getCommunicationChannelsRequest = https.request(
  TOP_TEAM_API_OPTIONS,
  res => {
    let result = ''

    res.setEncoding('utf8')

    res.on('data', chunk => {
      result += chunk
    })

    res.on('end', () => {
      const parsedResult = JSON.parse(result)

      if (parsedResult.errors) {
        console.error(parsedResult.errors)

        return
      }

      const teams = parsedResult.data.orgUnits.nodes
      const teamMember = teams
        .flatMap(team => team.directRoles.map(role => role.member))
        .find(member => {
          return member.communicationChannels.some(
            channel =>
              channel.kind === 'GITHUB' &&
              channel.value === githubCommitAuthorName
          )
        })

      if (teamMember) {
        const slack = teamMember.communicationChannels.find(
          channel => channel.kind === 'SLACK'
        )

        const message = getSlackMessage(`@${slack.value}`, githubActionRunUrl)
        const privateMessageChannelId = new URLSearchParams(slack.link).get(
          'id'
        )

        sendSlackMessage({
          text: message,
          channel: privateMessageChannelId,
        })

        sendSlackMessage({
          text: message,
          channel: slackChannelName,
        })
      } else if (fallbackSlackTeamId) {
        sendSlackMessage({
          text: getSlackMessage(
            `!subteam^${fallbackSlackTeamId}`,
            githubActionRunUrl
          ),
          channel: slackChannelName,
        })
      } else {
        throw new Error('No slack identifier found')
      }
    })
  }
)

getCommunicationChannelsRequest.on('error', error => {
  throw new Error(error)
})

getCommunicationChannelsRequest.write(communicationChannelsBody)
getCommunicationChannelsRequest.end()
