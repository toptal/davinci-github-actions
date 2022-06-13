## Check Team Member Login

Check if login belongs to the team

### Description

This GH Action checks if user login belongs to the team member

### Inputs

The list of arguments, that are used in GH Action:

| name           | type   | required | default | description                       |
| -------------- | ------ | -------- | ------- | --------------------------------- |
| `team`         | string | ✅        |         | Team that we are checking against |
| `login`        | string | ✅        |         | User's (contributor) login        |
| `github-token` | string | ✅        |         | Token for authorization           |

### Outputs

The list of variables, that are returned by GH Action:

| name     | type   | description                                                      |
| -------- | ------ | ---------------------------------------------------------------- |
| `result` | string | A boolean value to indicate whether user is a team member or not |

### ENV Variables

Not specified

### Usage

```yaml
  - uses: ./.github/actions/is-team-member
    with:
      team: inputs.team
      login: login
      github-token: github-token
```
