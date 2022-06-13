## Extract Env variables

Extract and Export ENV variables from env file

### Description

Reads `.env` file, extracts `ENV` variables there,
adds `ENV.` prefix to each of the variable
and exports them as a comma-separated list.

### Inputs

The list of arguments, that are used in GH Action:

| name           | type   | required | default | description                                                         |
| -------------- | ------ | -------- | ------- | ------------------------------------------------------------------- |
| `github-token` | string | ✅        |         | GITHUB Token                                                        |
| `filename`     | string |          | .env    | `.env` file name from which to read variables, e.g.: `.env.temploy` |

### Outputs

The list of variables, that are returned by GH Action:

| name        | type   | description                                              |
| ----------- | ------ | -------------------------------------------------------- |
| `variables` | string | Comma separated list of env variables with `ENV.` prefix |

### ENV Variables

Not specified

### Usage

```yaml
  - uses: ./.github/actions/extract-env-variables
    with:
      filename: .env.temploy
      github-token: ${{ secrets.TOPTAL_DEVBOT_TOKEN }}
```
