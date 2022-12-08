## Run davinci danger check

Checks if the PR title and and commit messages comply with Toptal's standards

### Description

Checks for inconsistencies in git commits and PR title.

Uses `yarn davinci-ci danger` command for the check.

*Note:* `@toptal/davinci-ci` package should be installed in the project.

### Inputs

Not specified

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/danger@v4.4.2
```
