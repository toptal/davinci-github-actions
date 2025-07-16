## Update Alpha Packages

Updates dependencies in all package.json files to use alpha packages from a specified PR.
The action extracts the alpha package information from toptal-devbot comments,
updates all package.json files in the repository, and creates pull request with changes.

### Description

### Inputs

The list of arguments, that are used in GH Action:

| name                         | type   | required | default | description                                          |
| ---------------------------- | ------ | -------- | ------- | ---------------------------------------------------- |
| `pull_request_url`           | string | ✅        |         | Link to a PR with alpha packages generated           |
| `workload_identity_provider` | string | ✅        |         | Workload identity provider for Google Secret Manager |
| `service_account`            | string | ✅        |         | Service account for Google Secret Manager            |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

Create workflow file in your repository, merge it, and run it from GitHub Actions repository page. Use pull request URL as input parameter.

```yaml
name: Update alpha packages

on:
  workflow_dispatch:
    inputs:
      pull_request_url:
        description: Link to a PR with alpha packages generated
        required: true

jobs:
  update-alpha-packages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Update alpha packages
        uses: toptal/davinci-github-actions/update-alpha-packages@v1.0.0
        with:
          pull_request_url: ${{ github.event.inputs.pull_request_url }}
          workload_identity_provider: ${{ secrets.IDENTITY_POOL }}
          service_account: ${{ secrets.SA_IDENTITY_POOL }}
```

For example, for Picasso pull request with URL `https://github.com/toptal/picasso/pull/123`, use the URL as a value for `pull_request_url` input parameter.
