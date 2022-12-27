## Create parallelization matrix

Creates parallelization matrix. By default creates 2 instances for SPA or 2 instances for each package in monorepo.

### Description

This action is designed to create a `parallel-groups` number of instances for:

*   a monolith project
*   **each package** in monorepo

Typical use-case is to split tests in CI into parallel instances to speed things up.

Because this action uses `yarn workspaces info` command
to get information about monorepo packages,
the **repository has to be checked out before running this action**.

### Inputs

The list of arguments, that are used in GH Action:

| name              | type                                                                                   | required | default | description                                                                                                                                                                         |
| ----------------- | -------------------------------------------------------------------------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `parallel-groups` | number                                                                                 |          | 2       | Defines how many instances to create in monolith. Or how many instances per package to create in monorepo                                                                           |
| `parallel-matrix` | Array<{<br/>`pkg`: string,<br/>`location`: string<br/>`parallel-groups`: number<br/>}> |          |         | Overrides `parallel-groups`<br/>A recipe by which to create the output array<br/>For each `parallel-matrix[*].pkg` creates `parallel-matrix[*].parallel-groups` number of instances |

### Outputs

The list of variables, that are returned by GH Action:

| name          | type                                                                                                | description                                                                                                                                                                                                                                                                                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `matrix`      | Array<{<br/>`pkg`: string,<br/>`location`: string,<br/>`index`: number,<br/>`total`: number,<br/>}> | Array to be used as a map value in `jobs.<job_id>.strategy.matrix`<br/>Each object represents one parallel instance<br/>`pkg` - current package name. In monolith app it is `default`<br/>`location` - current package location. In monolith app it is `.`<br/>`index` - current instance index<br/>`total` - number of total instances for current instance (package) |
| `is-monorepo` | boolean                                                                                             | Information about current repository                                                                                                                                                                                                                                                                                                                                   |

### ENV Variables

Not specified

### Usage

#### Using `parallel-groups`

This will create 3 parallel instances in monolith or 3 parallel instances for each package in monorepo.

```yaml
- uses: toptal/davinci-github-actions/create-matrix@v4.4.2
  with:
    parallel-groups: 3
```

#### Using `parallel-matrix`

This option is suitable for monorepo, when you don't want to create parallel instances for each package.

This will create 3 parallel instances for the whole monorepo:

```yaml
- uses: toptal/davinci-github-actions/create-matrix@v4.4.2
  with:
    parallel-matrix: |
      [
        {
          "pkg": "@toptal/my-package",
          "location": "packages/my-package",
          "parallel-groups": 3
        }
      ]
```

#### Applying the output to create parallel matrix

Let's assume we created matrix in a job called `matrix`

```yaml
parallelization:
    needs: [matrix]
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        include: ${{ fromJson(needs.matrix.outputs.matrix) }}
    env:
      GROUP_INDEX: ${{ matrix.index }}
      GROUP_LOCATION: ${{ matrix.location }}
      GROUP_PACKAGE: ${{ matrix.pkg }}
      PARALLEL_GROUPS: ${{ matrix.total }}
    steps:
      - run: echo "run tests"
```

#### Putting it all together

```yaml
env:
  PARALLEL_GROUPS: 3
  GITHUB_TOKEN: ${{ secrets.TOPTAL_DEVBOT_TOKEN }}

jobs:
  matrix:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout project
        uses: actions/checkout@v3

      - name: Run Matrix
        id: set-matrix
        uses: toptal/davinci-github-actions/create-matrix@v4.4.2
        with:
          parallel-groups: ${{ env.PARALLEL_GROUPS }}

    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}

  parallelization:
    needs: [matrix]
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        include: ${{ fromJson(needs.matrix.outputs.matrix) }}
    env:
      GROUP_INDEX: ${{ matrix.index }}
      GROUP_LOCATION: ${{ matrix.location }}
      GROUP_PACKAGE: ${{ matrix.pkg }}
      PARALLEL_GROUPS: ${{ matrix.total }}
    steps:
      - run: echo "run tests"
```
