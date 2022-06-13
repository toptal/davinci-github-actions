# davinci-github-actions

## 3.0.1

### Patch Changes

- [#74](https://github.com/toptal/davinci-github-actions/pull/74) [`6b6c5de`](https://github.com/toptal/davinci-github-actions/commit/6b6c5de5b44f8135d15459ca4bb20528da08b6ba) Thanks [@OndrejTuma](https://github.com/OndrejTuma)! - ---

  integration-tests

  - fixed `command` input when using complex command for yarn

* [#73](https://github.com/toptal/davinci-github-actions/pull/73) [`bd8824d`](https://github.com/toptal/davinci-github-actions/commit/bd8824d4b2b1c19fe7cb51fbc45c198a550d5169) Thanks [@OndrejTuma](https://github.com/OndrejTuma)! - ---

  ### report-coverage

  - fixed issue with colliding `$PATH` env variable

## 3.0.0

### Major Changes

- [#66](https://github.com/toptal/davinci-github-actions/pull/66) [`888130c`](https://github.com/toptal/davinci-github-actions/commit/888130ca9406f8be2472d420fad933b4cf490710) Thanks [@OndrejTuma](https://github.com/OndrejTuma)! - ---

  Fix possible shell injections in all Davinci GitHub Actions

  ### integration-tests

  - input `command` takes npm script now. Before: `yarn test:integration:ci` -> After: `test:integration:ci`

## 2.2.3

### Patch Changes

- [#69](https://github.com/toptal/davinci-github-actions/pull/69) [`41985f9`](https://github.com/toptal/davinci-github-actions/commit/41985f9972d565554607bf7cbd754fea4c95334b) Thanks [@ertrzyiks](https://github.com/ertrzyiks)! - fix failure to get affected packages on outdated branch

## 2.2.2

### Patch Changes

- [#67](https://github.com/toptal/davinci-github-actions/pull/67) [`3d8172e`](https://github.com/toptal/davinci-github-actions/commit/3d8172e5e5a90cef06c3d85b375eebe880bbb679) Thanks [@ertrzyiks](https://github.com/ertrzyiks)! - fix report of affected packages in case of a cyclic dependencies

## 2.2.1

### Patch Changes

- [#64](https://github.com/toptal/davinci-github-actions/pull/64) [`d27c4a6`](https://github.com/toptal/davinci-github-actions/commit/d27c4a6da8e284a8066f2b871556166baf4465fd) Thanks [@OndrejTuma](https://github.com/OndrejTuma)! - - updated external actions
  - changed commit hashes to version in external actions
  - fixed [issue with yarn-install](https://github.com/actions/cache/issues/811) by updating `actions/cache` to `v3`

## 2.2.0

### Minor Changes

- [#60](https://github.com/toptal/davinci-github-actions/pull/60) [`aeb2389`](https://github.com/toptal/davinci-github-actions/commit/aeb23893fd38a72854d485b09ddbbbb6caa5bfad) Thanks [@ertrzyiks](https://github.com/ertrzyiks)! - add report-affected-packages action

## 2.1.1

### Patch Changes

- [#45](https://github.com/toptal/davinci-github-actions/pull/45) [`3c669ab`](https://github.com/toptal/davinci-github-actions/commit/3c669ab1108e17ae4accee153d0f691d3f6c3c64) Thanks [@dmaklygin](https://github.com/dmaklygin)! - implement README generation

## 2.1.0

### Minor Changes

- [#44](https://github.com/toptal/davinci-github-actions/pull/44) [`bbc77b9`](https://github.com/toptal/davinci-github-actions/commit/bbc77b9d2de239f4914470797ec4d304b8685aed) Thanks [@rafael-anachoreta](https://github.com/rafael-anachoreta)! - Improve node_modules caching glob

### Patch Changes

- [#40](https://github.com/toptal/davinci-github-actions/pull/40) [`89f699f`](https://github.com/toptal/davinci-github-actions/commit/89f699fc65a5f8e279a472932b3a9060e5450f3b) Thanks [@rafael-anachoreta](https://github.com/rafael-anachoreta)! - ---

  ### yarn-install

  - Add yarn cache to install step
  - Add workspace information to cache hash, when applicable
  - Add a new optional cache-version to invalidate cache

## 2.0.4

### Patch Changes

- [#37](https://github.com/toptal/davinci-github-actions/pull/37) [`e3fd8a3`](https://github.com/toptal/davinci-github-actions/commit/e3fd8a3e23ad497c8c3dea9c8479e46fe27c996f) Thanks [@dmaklygin](https://github.com/dmaklygin)! - Send notification to slack channel on release

## 2.0.3

### Patch Changes

- [#35](https://github.com/toptal/davinci-github-actions/pull/35) [`4cab33a`](https://github.com/toptal/davinci-github-actions/commit/4cab33a34f8c66b5e9428c85b6fd4854b31a2092) Thanks [@dmaklygin](https://github.com/dmaklygin)! - Add changeset to the repo

## 0.0.2

### Patch Changes

- Initial Changelog
