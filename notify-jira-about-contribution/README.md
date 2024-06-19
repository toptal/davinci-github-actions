## Notify JIRA About External Contribution

Notifies JIRA about external contribution

### Description

Notifies JIRA about external contribution. Draft and dependabot PRs are ignored (unless `should-notify-about-major-dependency-updates` is set).

### Inputs

The list of arguments, that are used in GH Action:

| name                                           | type   | required | default              | description                                                                                                                               |
| ---------------------------------------------- | ------ | -------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `team`                                         | string | ✅        |                      | Team that we are checking against                                                                                                         |
| `repo`                                         | string | ✅        |                      | Repository name                                                                                                                           |
| `pull-number`                                  | string | ✅        |                      | Nth pull request                                                                                                                          |
| `jira-hook`                                    | string | ✅        |                      | JIRA automation hook for contribution                                                                                                     |
| `github-token`                                 | string | ✅        |                      | Token for authorization                                                                                                                   |
| `should-notify-about-major-dependency-updates` | string |          |                      | Specifies if action should create Jira issues for major dependency updates (authored by dependabot, minor and patch versions are ignored) |
| `ignore-major-dependency-update-packages`      | string |          |                      | Regular expression for packages that should be ignored when creating Jira issues for major dependency updates                             |
| `major-dependency-update-jira-label`           | string |          | ready-for-refinement | Label that is added if contribution is a dependency update                                                                                |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/notify-jira-about-contribution@v4.4.2
    with:
      team: frontend-experience-eng
      repo: repository_name
      pull-number: ${{ github.event.pull_request.number}}
      jira-hook: jira-hook
      github-token: token
```
