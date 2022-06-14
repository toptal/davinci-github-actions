
# Reusable Github Actions

Reusable Github Actions for davinci based applications

## Overview

Actions are the building blocks that power your GH workflow.

This repo represents a library of reusable GH Actions you can use in your GH workflows.

Actions in this repo were specially created to use in [davinci](https://github.com/toptal/davinci)-based applications.


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
        uses: toptal/davinci-github-actions/yarn-install@v3.0.1

      - uses: toptal/davinci-github-actions/danger@v3.0.1
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
