## Runs integration tests

Action to conduct integration tests in a project using Cypress.

### Description

Action to conduct integration tests in a project using Cypress.

By default it executes `yarn test:integration:ci` command.

### Inputs

The list of arguments, that are used in GH Action:

| name      | type   | required | default                  | description                              |
| --------- | ------ | -------- | ------------------------ | ---------------------------------------- |
| `command` | string |          | yarn test:integration:ci | Command to execute for integration tests |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  - uses: ./.github/actions/integration-tests
    with:
      command: yarn test:e2e:ci
```
