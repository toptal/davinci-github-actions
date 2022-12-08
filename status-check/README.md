## Create/Update PR status check

Sets status for a PR check

### Description

Sets status for a PR check.

Useful for dispatched workflows which are not shown in PR checks by default.

### Inputs

The list of arguments, that are used in GH Action:

| name    | type                                              | required | default | description               |
| ------- | ------------------------------------------------- | -------- | ------- | ------------------------- |
| `name`  | string                                            | ✅        |         | Name of the PR check      |
| `state` | enum<<br/>`pending`,`success`,<br/>`error`,<br/>> | ✅        |         | New state of the PR check |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/status-check@v4.4.2
    with:
      name: Alpha package release
      state: success
```
