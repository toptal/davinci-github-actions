## Check untracked GQL types

Check if some GQL types were not generated

### Description

Checks if there are some queries or mutation which types are outdated/not generated. Runs command `yarn generate:types` and checks if there are some untracked changes.

### Inputs

The list of arguments, that are used in GH Action:

| name                     | type   | required | default             | description                                     |
| ------------------------ | ------ | -------- | ------------------- | ----------------------------------------------- |
| `path-pattern`           | string |          | \*.gql.ts           | git `pathspec` pattern to match GQL types files |
| `generate-types-command` | string |          | yarn generate:types | Command to generate GQL types                   |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/no-untracked-generated-types@v4.4.1
```
