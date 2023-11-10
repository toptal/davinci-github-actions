## PR Conventional to Toptal Commit

Convert a PR title from conventional commits to Toptal commit

### Description

### Inputs

Not specified

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

Formatting dependabot commit messages:

```yaml
on:
  pull_request:
    types: [opened]
    branches: [master]

jobs:
  format_title:
    if: startsWith(github.head_ref, 'dependabot-')
    uses: toptal/davinci-github-actions/pr-conventional-to-toptal-commits
```
