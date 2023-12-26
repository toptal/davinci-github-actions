## Deploy Storybook to a particular environment

Builds and Deploys an application's Storybook to a particular environment

### Description

Currently ENV variables for Storybook are not supported.

### Inputs

The list of arguments, that are used in GH Action:

| name                     | type                                       | required | default            | description                                                                                 |
| ------------------------ | ------------------------------------------ | -------- | ------------------ | ------------------------------------------------------------------------------------------- |
| `jenkins_url`            | string                                     | ✅        |                    | Jenkins main instance URL                                                                   |
| `jenkins_user`           | string                                     | ✅        |                    | Jenkins user                                                                                |
| `jenkins_token`          | string                                     | ✅        |                    | Jenkins main token                                                                          |
| `jenkins_client_id`      | string                                     | ✅        |                    | Jenkins main Client ID used with IAP                                                        |
| `jenkins_sa_credentials` | string                                     | ✅        |                    | Jenkins service account credentials to use with IAP                                         |
| `sha`                    | string                                     | ✅        |                    | Commit hash that will be used as a tag for the Docker image                                 |
| `environment`            | enum<<br/>`temploy`,<br/>`staging`,<br/>>' | ✅        |                    | Environment to deploy Storybook to                                                          |
| `env-file`               | string                                     |          | .env.temploy       | `.env` file name from which to read variables. Required for temploy deployment only         |
| `davinci-branch`         | string                                     |          | master             | Custom davinci branch                                                                       |
| `dist-folder`            | string                                     |          | ./storybook-static | Path to folder where Storybook is built                                                     |
| `build-command`          | string                                     |          | storybook:build    | Command to build Storybook with                                                             |
| `use-prebuilt-package`   | string                                     |          | false              | If a prebuilt Storybook package should be used                                              |
| `use-prebuilt-image`     | string                                     |          | false              | If a prebuilt Storybook Docker image should be used                                         |
| `jenkins-folder-name`    | string                                     |          |                    | Jenkins folder where the deployment jobs are located                                        |
| `generate-types-command` | string                                     |          | false              | Command to generate gql types                                                               |
| `pr-number`              | string                                     |          | false              | Event number of the original pr, in case event number or issue number is not present        |
| `checkout-token`         | string                                     |          |                    | Repository checkout access token `GITHUB_TOKEN`. Required for self hosted runners           |
| `node-version`           | string                                     |          | 18                 | Node.js version used. The action is guaranteed to work only with Node.js@18 (default value) |

### Outputs

Not specified

### ENV Variables

All ENV Variables, defined in a GH Workflow are also passed to a GH Action. It means, the might be reused as is.
This is a list of ENV Variables that are used in GH Action:

| name                           | description                                          |
| ------------------------------ | ---------------------------------------------------- |
| `GITHUB_TOKEN`                 | GitHub token. Is used to checkout `davinci` branch   |
| `GCR_ACCOUNT_KEY`              | Necessary token to push image to Google cloud        |
| `GCR_GQL_SCHEMAS_BUCKET_TOKEN` | Necessary token to pull GQL schema from Google Cloud |
| `NPM_TOKEN`                    | Necessary token to install private dependencies      |

### Usage

```yaml
  - uses: toptal/davinci-github-actions/deploy-storybook@v4.4.2
    with:
      jenkins_url: ${{ steps.parse_secrets.outputs.JENKINS_URL }}
      jenkins_build_url: ${{ steps.parse_secrets.outputs.JENKINS_BUILD_URL }}
      jenkins_user: ${{ steps.parse_secrets.outputs.TOPTAL_TRIGGERBOT_USERNAME }}
      jenkins_token: ${{ steps.parse_secrets.outputs.TOPTAL_TRIGGERBOT_TOKEN }}
      jenkins_build_token: ${{ steps.parse_secrets.outputs.TOPTAL_TRIGGERBOT_BUILD_TOKEN }}
      jenkins_client_id: ${{ steps.parse_secrets.outputs.JENKINS_CLIENT_ID }}
      jenkins_build_client_id: ${{ steps.parse_secrets.outputs.JENKINS_BUILD_CLIENT_ID }}
      jenkins_sa_credentials: ${{ steps.parse_secrets.outputs.JENKINS_SA_CREDENTIALS }}
      sha: f41daf47ca1a72cc3f6eb50118eccfb2deadb613
      environment: temploy
```
