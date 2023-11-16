## PR Conventional to Toptal Commit

Convert a PR title from conventional commits to Toptal commit

### Description

### Inputs

The list of arguments, that are used in GH Action:

| name           | type   | required | default | description       |
| -------------- | ------ | -------- | ------- | ----------------- |
| `github-token` | string | ✅        |         | Github user token |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

Formatting dependabot commit messages:

```yaml
name: Format dependabot PR title to Toptal's commit convention
on:
  pull_request:
    types: [opened]
    branches: [master]

jobs:
  format_title:
    name: Format title
    if: startsWith(github.head_ref, 'dependabot-')
    runs-on: ['org/toptal', 'os/linux', 'arch/x64', 'size/large', 'ubuntu-latest']
    steps:
      - uses: toptal/davinci-github-actions/pr-conventional-to-toptal-commits
        with:
          github-token: ${{ secrets.TOPTAL_DEVBOT_TOKEN }}
```
