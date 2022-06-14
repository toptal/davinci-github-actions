## Upload Source Maps to Sentry

It creates a new Sentry release and uploads source maps

### Description

This GH Action creates a new Sentry release and uploads source maps.

### Inputs

The list of arguments, that are used in GH Action:

| name                | type   | required | default | description                                              |
| ------------------- | ------ | -------- | ------- | -------------------------------------------------------- |
| `sentry-project`    | string | ✅        |         | The name of the Sentry project to upload source files to |
| `working-directory` | string |          | .       | Specifies the working directory where the command is run |

### Outputs

Not specified

### ENV Variables

All ENV Variables, defined in a GH Workflow are also passed to a GH Action. It means, the might be reused as is.
This is a list of ENV Variables that are used in GH Action:

| name                | description                                            |
| ------------------- | ------------------------------------------------------ |
| `SENTRY_AUTH_TOKEN` | Sentry token. Is used to upload source files to Sentry |

### Usage

```yaml
  - uses: toptal/davinci-github-actions/upload-source-maps@v3.0.1
    with:
      repository-name: sentry-project
      working-directory: ./app
```
