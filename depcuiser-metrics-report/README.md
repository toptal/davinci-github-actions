## Dependency cruiser metrics report

Generates a report for the project of dependency cruiser metrics

### Description

Generates a report for the project of dependency cruiser metrics

### Inputs

The list of arguments, that are used in GH Action:

| name                 | type   | required | default                         | description                                                                                                               |
| -------------------- | ------ | -------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `npm-token`          | string |          |                                 | Access token type **Read-only**. Required for repository with private dependencies. If undefined, `env.NPM_TOKEN` is used |
| `report-output-path` | string |          | dependency-cruiser-results.json | Path to the metrics report json file                                                                                      |
| `tsconfig-path`      | string |          | ./tsconfig.json                 | Path to the custom tsconfig.json file                                                                                     |

### Outputs

Not specified

### ENV Variables

All ENV Variables, defined in a GH Workflow are also passed to a GH Action. It means, the might be reused as is.
This is a list of ENV Variables that are used in GH Action:

| name        | description                                   |
| ----------- | --------------------------------------------- |
| `NPM_TOKEN` | Read-only npm token to install node\_modules. |

### Usage

```yaml
  - name: Generate the dependency cruiser metrics report
    uses: toptal/davinci-github-actions/depcuiser-metrics-report@v4.2.2
```

or with inputs:

```yaml
  - name: Generate the dependency cruiser metrics report
    uses: toptal/davinci-github-actions/depcuiser-metrics-report@v4.2.2
    with:
      npm-token: ${{ env.NPM_TOKEN }}
      report-output-path: dependency-cruiser-results.json
```
