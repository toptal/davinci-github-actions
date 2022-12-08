## Alpha Package release

Builds project and pushes a new alpha release to NPM

### Description

Builds project from specific branch and publishes a new alpha package to NPM.

Uses `yarn build:package` command to build the package.

*Note:* `@toptal/davinci-engine` package should be installed in the project.

### Inputs

The list of arguments, that are used in GH Action:

| name        | type   | required | default | description                                           |
| ----------- | ------ | -------- | ------- | ----------------------------------------------------- |
| `npm-token` | string | ✅        |         | NPM token used for publishing. Has to be type Publish |
| `branch`    | string | ✅        |         | Name of the branch that will be published             |

### Outputs

The list of variables, that are returned by GH Action:

| name       | type   | description                                       |
| ---------- | ------ | ------------------------------------------------- |
| `versions` | string | List of new versions as output of `.version` file |

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/build-alpha-package@v4.4.2
    with:
      npm-token: ${{ env.NPM_TOKEN }}
      branch: ${{ github.head_ref }}
```
