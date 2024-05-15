## Report affected packages

Generate a diagram of affected monorepo packages as a job summary. Works with workflows triggered by pull\_request event.

### Description

Generate a diagram of affected monorepo packages. Works with worksflows triggered by pull\_request event.

### Inputs

The list of arguments, that are used in GH Action:

| name           | type   | required | default | description                                                                                 |
| -------------- | ------ | -------- | ------- | ------------------------------------------------------------------------------------------- |
| `node-version` | string |          | 20      | Node.js version used. The action is guaranteed to work only with Node.js@20 (default value) |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  - name: Generate the affected packages report
    uses: toptal/davinci-github-actions/report-affected-packages@v4.4.2
```
