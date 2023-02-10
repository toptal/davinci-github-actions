## Get user slack from email

Get user slack handler based on user email

### Description

This GH Action checks if user login belongs to the team member

### Inputs

The list of arguments, that are used in GH Action:

| name              | type   | required | default | description                                                                                              |
| ----------------- | ------ | -------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `email`           | string | ✅        |         | User email                                                                                               |
| `slack-bot-token` | string | ✅        |         | Slack bot token with scope "users:read.email" **Read-only**. If undefined, `env.SLACK_BOT_TOKEN` is used |

### Outputs

The list of variables, that are returned by GH Action:

| name         | type   | description                        |
| ------------ | ------ | ---------------------------------- |
| `slack-name` | string | Slack user name/slack user handler |

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/get-user-slack-from-email@v4.4.2
    with:
      email: tylerdurden@toptal.com
      slack-bot-token: slack-bot-token
```
