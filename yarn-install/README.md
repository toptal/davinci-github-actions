## Install dependencies

Install and cache node modules with yarn

### Description

Installs package dependencies. Caches `node_modules` for faster subsequent installs.

### Inputs

The list of arguments, that are used in GH Action:

| name            | type   | required | default | description                                                                                                               |
| --------------- | ------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `npm-token`     | string |          |         | Access token type **Read-only**. Required for repository with private dependencies. If undefined, `env.NPM_TOKEN` is used |
| `cache-version` | string |          | 0.0     | Cache version                                                                                                             |
| `path`          | string |          | .       | Relative path under $GITHUB\_WORKSPACE where to run `yarn install` command                                                |

### Outputs

The list of variables, that are returned by GH Action:

| name        | type    | description                                           |
| ----------- | ------- | ----------------------------------------------------- |
| `cache-hit` | boolean | Indicates an exact match was found for `node_modules` |

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/yarn-install@v4.4.2
    with:
      npm-token: ${{ env.NPM_TOKEN }}
      cache-version: "1.0"
```
