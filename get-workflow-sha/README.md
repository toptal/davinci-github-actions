## Get SHA for current workflow

It properly selects a current commit hash depends on an event and returns it
the GH Action covers following GH events:

*   push
*   issue\_comment
*   workflow\_dispatch with input version

### Description

This action gets and returns current commit hash.

Works with workflows that are triggered by following GitHub events:

*   `push`
*   `issue_comment`
*   `workflow_dispatch` with input `version`

### Inputs

Not specified

### Outputs

The list of variables, that are returned by GH Action:

| name     | type   | description                                     |
| -------- | ------ | ----------------------------------------------- |
| `result` | string | A current commit sha, selected during GH Action |

### ENV Variables

Not specified

### Usage

```yaml
  - uses: ./.github/actions/get-workflow-sha
```
