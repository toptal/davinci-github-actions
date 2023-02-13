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

| name           | type   | description   |
| -------------- | ------ | ------------- |
| `slack-userId` | string | Slack user id |

### ENV Variables

All ENV Variables, defined in a GH Workflow are also passed to a GH Action. It means, the might be reused as is.
This is a list of ENV Variables that are used in GH Action:

| name              | description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `SLACK_BOT_TOKEN` | Slack bot token with scope "users:read.email" **Read-only**. |

### Usage

```yaml
  - uses: toptal/davinci-github-actions/get-user-slack-from-email@v4.4.2
    with:
      email: tylerdurden@toptal.com
      slack-bot-token: slack-bot-token
```
