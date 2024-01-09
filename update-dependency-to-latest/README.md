## Update dependency to latest

Create a PR for updating a dependency to the latest version

### Description

### Inputs

The list of arguments, that are used in GH Action:

| name               | type   | required | default                   | description                                                                                     |
| ------------------ | ------ | -------- | ------------------------- | ----------------------------------------------------------------------------------------------- |
| `dependency-regex` | string | ✅        |                           | Regex pattern for NPM package names that should be updated, leave it blank to update everything |
| `pr-title`         | string |          |                           | Title for the PR created                                                                        |
| `branch-name`      | string |          | davinci-dependencies-bump | Name of the branch to be created                                                                |
| `main-branch`      | string |          | master                    | Name of the branch that the PR will be based upon                                               |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  # Updating picasso and davinci packages
  - uses: toptal/davinci-github-actions/update-dependency-to-latest
    with:
      dependency-regex: "@toptal/(picasso|davinci)"
      pr-title: Bump Picasso and Davinci
```
