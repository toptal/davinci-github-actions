## Create new Jira Deployment

It creates and engages a new Jira Deployment. Notice: Jira App must be installed in the repository.

### Description

Installs package dependencies. Caches `node_modules` for faster subsequent installs.

### Inputs

The list of arguments, that are used in GH Action:

| name                    | type   | required | default | description                                                                                                                                                                                                                                               |
| ----------------------- | ------ | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                 | string | ✅        |         | GitHub token to create a deployment                                                                                                                                                                                                                       |
| `environment-url`       | string | ✅        |         | URL of the environment                                                                                                                                                                                                                                    |
| `environment`           | string | ✅        |         | Name for the target deployment environment                                                                                                                                                                                                                |
| `transient-environment` | string |          | true    | Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future.                                                                                                                                    |
| `auto-inactive`         | string |          | true    | Adds a new inactive status to all prior non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. An inactive status is only added to deployments that had a success state. |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/create-jira-deployment@v6.3.0
    with:
      token: ${{ env.GITHUB_TOKEN }}
      environment: staging
      environment-url: http://staging.example.com
```
