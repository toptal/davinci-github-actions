## Deploy Storybook to a particular environment

Builds and Deploys an Application's storybook to a particular environment

### Description

This action builds and pushes **Storybook** Docker image to the hub and trigger an appropriate **Jenkins** job to deploy image to a particular environment: `staging` or `temploy`

### Inputs

The list of arguments, that are used in GH Action:

| name             | type   | required | default | description                                                 |
| ---------------- | ------ | -------- | ------- | ----------------------------------------------------------- |
| `sha`            | string | ✅        |         | Commit hash that will be used as a tag for the Docker image |
| `davinci-branch` | string |          | master  | Custom davinci branch                                       |

### Outputs

Not specified

### ENV Variables

All ENV Variables, defined in a GH Workflow are also passed to a GH Action. It means, the might be reused as is.
This is a list of ENV Variables that are used in GH Action:

| name                   | description                                        |
| ---------------------- | -------------------------------------------------- |
| `GITHUB_TOKEN`         | GitHub token. Is used to checkout `davinci` branch |
| `GCR_ACCOUNT_KEY`      | Necessary token to push image to Google cloud\\    |
| `JENKINS_DEPLOY_TOKEN` | Jenkins deployment token                           |

### Usage

```yaml
  - uses: toptal/davinci-github-actions/deploy-storybook@v3.2.0
    with:
      sha: 7042976bc3db21012fe38602bb643618a95aa2d0

```
