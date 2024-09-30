## Automatically merge release pull request

Automatically merges Version Packages pull requests to the main branch (for all types of releases – patch, minor, major).

### Inputs

The list of arguments, that are used in GH Action:

| name        | type   | required | default | description                                             |
| ----------- | ------ | -------- | ------- | ------------------------------------------------------- |
| `token`     | string | ✅        |         | GitHub token to create a comment and merge pull request |
| `pr-number` | string | ✅        |         | Pull request number                                     |

### Outputs

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/automerge-release-pr@v1.1.1
```
