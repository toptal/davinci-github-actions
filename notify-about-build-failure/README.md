## Notify about build failure

Sends notifications about build failure to specified Slack channel and private Slack messages of failing commit author

### Description

Sends notification about build failure to specified Slack channel and direct Slack messages of failing commit author. In order to match GitHub name of commit authors and their Slack handles, the TopTeam API is used.

### Inputs

The list of arguments, that are used in GH Action:

| name                        | type   | required | default | description                                                                                                                                |
| --------------------------- | ------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `slack-bot-token`           | string | ✅        |         | Slack API token, needed for sending messages in Slack                                                                                      |
| `top-team-api-key`          | string | ✅        |         | TopTeam API key, needed for fetching Company structure to match GitHub name of commit author to Slack handle                               |
| `slack-channel-name`        | string | ✅        |         | Slack channel name (for example, `#-test-channel`)                                                                                         |
| `github-commit-author-name` | string | ✅        |         | GitHub name of commit author, needed for finding the Slack handle of commit author                                                         |
| `github-action-run-url`     | string | ✅        |         | Failing GitHub Acton run URL (for example, `https://github.com/toptal/staff-portal/actions/runs/123`), needed for the notification message |
| `fallback-slack-team-name`  | string |          |         | Fallback Slack team name, needed for the notification message if the commit author is not found                                            |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

GitHub Actions Notifications bot will send message to commit author and post a message in #-test-notifications-channel channel in Slack. The message will contain URL for the failing GitHub Action job run.

```yaml
jobs:
  notify-build-breaker:
    name: Notify about build failure
    steps:
      - uses: toptal/davinci-github-actions/notify-about-build-failure@master
        with:
          slack-bot-token: ${{ secrets.SLACK_BOT_TOKEN }}
          top-team-api-key: ${{ secrets.TOP_TEAM_API_KEY }}
          slack-channel-name: '#-test-notifications-channel'
          github-commit-author-name: ${{ github.event.pusher.name }}
          github-action-run-url: https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}
```
