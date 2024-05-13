## Build & Push Docker Image

Builds release image of a project and pushes to cloud

### Description

This GH Action builds a Docker image and pushes to google cloud.

> A docker file as well as build arguments might be specified.

### Inputs

The list of arguments, that are used in GH Action:

| name               | type                                                        | required | default                                          | description                                                                                |
| ------------------ | ----------------------------------------------------------- | -------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `sha`              | string                                                      |          | ${{ github.sha }}                                | Commit hash that will be used as a tag for the Docker image                                |
| `image-name`       | string                                                      | ✅        |                                                  | Name of the Docker image. Might be used in the next steps (for ex.: deploy a Docker image) |
| `build-args`       | string                                                      |          |                                                  | Multiline string to describe build arguments that will be used during dockerization        |
| `environment`      | enum<<br/>`temploy`,<br/>`staging`,<br/>`production`,<br/>> |          | staging                                          | Determines additional procedures while creating a Docker image.                            |
| `docker-file`      | string                                                      |          | Dockerfile                                       | pathname to Dockerfile                                                                     |
| `davinci-branch`   | string                                                      |          | master                                           | Custom davinci branch                                                                      |
| `labels`           | string                                                      |          |                                                  | List of metadata for the Docker image                                                      |
| `context`          | string                                                      |          | .                                                | Build context                                                                              |
| `push`             | string                                                      |          | false                                            | Push the image to the registry                                                             |
| `platforms`        | string                                                      |          | linux/amd64                                      | List of target platforms for build                                                         |
| `tags`             | string                                                      |          |                                                  | Additional tags for the Docker image                                                       |
| `target`           | string                                                      |          |                                                  | Sets the target stage to build                                                             |
| `checkout-davinci` | string                                                      |          | false                                            | Checkout davinci repository                                                                |
| `registry-name`    | string                                                      |          | us-central1-docker.pkg.dev/toptal-hub/containers | Registry to push the builded image                                                         |

### Outputs

Not specified

### ENV Variables

All ENV Variables, defined in a GH Workflow are also passed to a GH Action. It means, the might be reused as is.
This is a list of ENV Variables that are used in GH Action:

| name                       | description                                        |
| -------------------------- | -------------------------------------------------- |
| `DOCKER_BUILDX_ENDPOINT`   | Docker buildx endpoint                             |
| `GCR_ACCOUNT_KEY`          | Necessary token to push image to Google cloud      |
| `GITHUB_TOKEN`             | GitHub token. Is used to checkout `davinci` branch |
| `TOPTAL_BUILD_BOT_SSH_KEY` | SSH key to access Google cloud                     |

### Usage

```yaml
  - uses: toptal/davinci-github-actions/build-push-image@v4.4.2
    with:
      sha: 7042976bc3db21012fe38602bb643618a95aa2d0
      image-name: my-image-name
      environment: staging
      docker-file: ./davinci/packages/ci/src/configs/docker/Dockerfile.gha-deploy
      build-args: |
        ENV_RUNTIME_ENTRYPOINT=./davinci/packages/ci/src/configs/docker/env-runtime.entrypoint.sh
        DIST_FOLDER=./dist
        NGINX_CONFIG=./davinci/packages/davinci/docker/nginx-vhost.conf
        VERSION=7042976bc3db21012fe38602bb643618a95aa2d0
```
