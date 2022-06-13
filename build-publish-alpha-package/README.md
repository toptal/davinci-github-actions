## Alpha Package release

Builds project and pushes a new alpha release to NPM

### Description

Builds project from specific branch and publishes a new alpha package to NPM.

It uses `yarn build:package` command to build the package.

### Inputs

The list of arguments, that are used in GH Action:

| name        | type   | required | default | description                                           |
| ----------- | ------ | -------- | ------- | ----------------------------------------------------- |
| `npm-token` | string | ✅        |         | Name of the branch that will be published             |
| `branch`    | string | ✅        |         | NPM token used for publishing. Has to be type Publish |

### Outputs

The list of variables, that are returned by GH Action:

| name       | type   | description                                       |
| ---------- | ------ | ------------------------------------------------- |
| `versions` | string | List of new versions as output of `.version` file |

### ENV Variables

Not specified

### Usage

```yaml
  - uses: ./.github/actions/build-alpha-package
    with:
      npm-token: ${{ env.NPM_TOKEN }}
      branch: ${{ github.head_ref }}
```
