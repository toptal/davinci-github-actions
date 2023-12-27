## Create new Jira Deployment

It creates and engages a new Jira Deployment. Notice: Jira App must be installed in the repository.

### Description

Installs package dependencies. Caches `node_modules` for faster subsequent installs.

### Inputs

The list of arguments, that are used in GH Action:

| name                     | type   | required | default | description                                                                                                                                                                                                                                               |
| ------------------------ | ------ | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `jenkins_url`            | string | ✅        |         | Jenkins build instance URL                                                                                                                                                                                                                                |
| `jenkins_user`           | string | ✅        |         | Jenkins build user                                                                                                                                                                                                                                        |
| `jenkins_token`          | string | ✅        |         | Jenkins build token                                                                                                                                                                                                                                       |
| `jenkins_client_id`      | string | ✅        |         | Jenkins Client ID used with IAP                                                                                                                                                                                                                           |
| `jenkins_sa_credentials` | string | ✅        |         | Jenkins service account credentials to use with IAP                                                                                                                                                                                                       |
| `token`                  | string | ✅        |         | GitHub token to create a deployment                                                                                                                                                                                                                       |
| `environment-url`        | string |          |         | URL of the environment                                                                                                                                                                                                                                    |
| `environment`            | string | ✅        |         | Name for the target deployment environment                                                                                                                                                                                                                |
| `transient-environment`  | string |          | true    | Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future.                                                                                                                                    |
| `auto-inactive`          | string |          | true    | Adds a new inactive status to all prior non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. An inactive status is only added to deployments that had a success state. |
| `create-gh-deployment`   | string |          | false   | Creates a Github Deployment along with JIRA Deployment                                                                                                                                                                                                    |

### Outputs

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/create-jira-deployment@v10.0.0
    with:
      jenkins_url: ${{ steps.parse_secrets.outputs.JENKINS_BUILD_URL }}
      jenkins_user: ${{ steps.parse_secrets.outputs.TOPTAL_TRIGGERBOT_USERNAME }}
      jenkins_token: ${{ steps.parse_secrets.outputs.TOPTAL_TRIGGERBOT_BUILD_TOKEN }}
      jenkins_client_id: ${{ steps.parse_secrets.outputs.JENKINS_BUILD_CLIENT_ID }}
      jenkins_sa_credentials: ${{ steps.parse_secrets.outputs.JENKINS_SA_CREDENTIALS }}
      token: ${{ env.GITHUB_TOKEN }}
      environment: staging
      environment-url: http://staging.example.com
```
