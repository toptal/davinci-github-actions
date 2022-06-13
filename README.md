
# Reusable Github Actions

A brief description of what this project does and who it's for


## Overview

Actions are the building blocks that power your GH workflow.

This repo represents a library of reusable GH Actions you can use in your GH workflows.

Actions in this repo were specially created to use in [davinci](https://github.com/toptal/davinci)-based applications.


> **_NOTE:_**  This repo is private, therefore [it's not possible](https://docs.github.com/en/actions/learn-github-actions/finding-and-customizing-actions#overview) to directly use these GH Actions from GH Workflows.

To start using GH Actions from this repo, a developer must checkout the repo via [actions/checkout](https://github.com/actions/checkout) GH Action.
## Example

This is a simple example of using GH Actions. Here, we checkout this repo and execute two GH Actions:
* yarn install
* danger check

```
jobs:
  danger:
    name: Check:Danger
    runs-on: ubuntu-latest
    steps:
      - name: Checkout davinci GHAs
        uses: actions/checkout@v2
        with:
            repository: toptal/davinci-github-actions
            ref: v2
            token: ${{ env.GITHUB_TOKEN }}
            path: ./.github/actions/

      - uses: ./.github/actions/yarn-install

      - uses: ./.github/actions/danger
```

## Contribute

Hi! We’re excited that you’re interested in contributing! Take a moment to read the following guidelines. And thanks for contributing to davinci-github-actions! 👏👌

### Improve documentation

As a user of this project you’re perfect for helping us improve our docs. Typo corrections, error fixes, better explanations, new examples, etcetera. Anything!

### Improve issues

If you think these GH Actions are not optimal enough, please share your thought, proposal. Help us make GH Actions better and better.

### Write code

Code contributions are very welcome. It’s often good to first create an issue to report a bug or suggest a new feature before creating a pull request to prevent you from doing unnecessary work.

### How to contribute to to Davinci Github Actions

* First of all, you need to download and install the project:

  ```shell
  yarn install
  ```

* Create a new branch from `master`
* Create or update the GH Action

* Re-generate a README.md:
  ```shell
  yarn documentation:generate
  ```

* Increase version (path, minor, major):

  ```shell
  yarn changeset
  ```
* Push changes to origin
* Create a new PR
* Wait for approvals and "green" CI
* Merge PR
