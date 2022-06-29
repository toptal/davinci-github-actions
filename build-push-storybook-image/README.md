## Build & Push Storybook Docker Image

Builds a release image of Storybook and pushes it to the cloud.

### Description

Before using this action, `yarn install` should be executed.

This action uses `yarn storybook:build` command to build storybook and expects the output in the folder `./storybook-static`

### Inputs

The list of arguments, that are used in GH Action:

| name             | type   | required | default            | description                                                 |
| ---------------- | ------ | -------- | ------------------ | ----------------------------------------------------------- |
| `sha`            | string | ✅        |                    | Commit hash that will be used as a tag for the Docker image |
| `davinci-branch` | string |          | master             | Custom davinci branch                                       |
| `dist-folder`    | string |          | ./storybook-static | Path to folder where Storybook is built                     |
| `build-command`  | string |          | storybook:build    | Command to build Storybook with                             |

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
  - uses: toptal/davinci-github-actions/yarn-install@v3.2.0
  - uses: toptal/davinci-github-actions/build-push-storybook-image@v3.2.0
    with:
      sha: 7042976bc3db21012fe38602bb643618a95aa2d0
```
