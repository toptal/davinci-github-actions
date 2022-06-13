## Build & Push Docker Release Image

Builds release image of a project and pushes to cloud

### Description

This GH Action builds a Docker [release image](https://github.com/toptal/davinci/blob/master/packages/ci/src/configs/docker/Dockerfile.gha-deploy) and pushes to google cloud.

### Inputs

The list of arguments, that are used in GH Action:

| name              | type                                                        | required | default | description                                                           |
| ----------------- | ----------------------------------------------------------- | -------- | ------- | --------------------------------------------------------------------- |
| `sha`             | string                                                      | ✅        |         | Commit hash that will be used as a tag for the Docker image           |
| `repository-name` | string                                                      | ✅        |         | Name of repository. It's used to determine an image name              |
| `environment`     | enum<<br/>`temploy`,<br/>`staging`,<br/>`production`,<br/>> |          | staging | Used to determine additional procedures while creating a Docker image |

### Outputs

Not specified

### ENV Variables

All ENV Variables, defined in a GH Workflow are also passed to a GH Action. It means, the might be reused as is.
This is a list of ENV Variables that are used in GH Action:

| name              | description                                        |
| ----------------- | -------------------------------------------------- |
| `GITHUB_TOKEN`    | GitHub token. Is used to checkout `davinci` branch |
| `GCR_ACCOUNT_KEY` | Necessary token to push image to Google cloud      |

### Usage

```yaml
  - uses: ./.github/actions/build-push-release-image
    with:
      sha: 7042976bc3db21012fe38602bb643618a95aa2d0
      repository-name: ${{ env.REPOSITORY_NAME }}
      environment: temploy
```
