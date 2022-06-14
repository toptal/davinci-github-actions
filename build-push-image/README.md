## Build & Push Docker Image

Builds release image of a project and pushes to cloud

### Description

This GH Action builds a Docker image and pushes to google cloud.

> A docker file as well as build arguments might be specified.

### Inputs

The list of arguments, that are used in GH Action:

| name          | type                                                        | required | default                                             | description                                                                                |
| ------------- | ----------------------------------------------------------- | -------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `sha`         | string                                                      | ✅        |                                                     | Commit hash that will be used as a tag for the Docker image                                |
| `image-name`  | string                                                      | ✅        |                                                     | Name of the Docker image. Might be used in the next steps (for ex.: deploy a Docker image) |
| `environment` | enum<<br/>`temploy`,<br/>`staging`,<br/>`production`,<br/>> |          | staging                                             | Determines additional procedures while creating a Docker image.                            |
| `build-args`  | string                                                      | ✅        |                                                     | Multiline string to describe build arguments that will be used during dockerization        |
| `docker-file` | string                                                      |          | ./davinci/packages/ci/src/configs/docker/Dockerfile | pathname to Docker file                                                                    |

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
  - uses: ./.github/actions/build-push-image
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
