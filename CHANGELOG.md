# davinci-github-actions

## 4.10.2

### Patch Changes

- [#121](https://github.com/toptal/davinci-github-actions/pull/121) [`6d4f0b5`](https://github.com/toptal/davinci-github-actions/commit/6d4f0b5db547a7a18c5e82013b62a32473b8f8e8) Thanks [@TomasSlama](https://github.com/TomasSlama)! - ---

  - use the latest version of gha internally

## 4.10.1

### Patch Changes

- [#116](https://github.com/toptal/davinci-github-actions/pull/116) [`5f34497`](https://github.com/toptal/davinci-github-actions/commit/5f34497595bab09dedd7c05298e69841c2b930f7) Thanks [@TomasSlama](https://github.com/TomasSlama)! - ---

  - refactor deprecated function `set-output`

## 4.10.0

### Minor Changes

- [#117](https://github.com/toptal/davinci-github-actions/pull/117) [`0f78c59`](https://github.com/toptal/davinci-github-actions/commit/0f78c593701bab2601d095d20865480d3d06c4a3) Thanks [@denieler](https://github.com/denieler)! - ---

  ### get-user-slack-from-email

  - add new github action

## 4.9.0

### Minor Changes

- [#108](https://github.com/toptal/davinci-github-actions/pull/108) [`3e49260`](https://github.com/toptal/davinci-github-actions/commit/3e492606327ecb4d0c492bb4588534f592053753) Thanks [@waleedtt](https://github.com/waleedtt)! - ---

  ### yarn-install

  - add custom cache for self-hosted runners

### Patch Changes

- [#113](https://github.com/toptal/davinci-github-actions/pull/113) [`79421e9`](https://github.com/toptal/davinci-github-actions/commit/79421e9d611b53fffff801c038708c80b601c961) Thanks [@eceakcck](https://github.com/eceakcck)! - ---

  ### build-push-release-image

  - bump yarn-install action to latest version

  ### get-workflow-sha

  - address deprecated commands

* [#103](https://github.com/toptal/davinci-github-actions/pull/103) [`04317df`](https://github.com/toptal/davinci-github-actions/commit/04317df260398e4268bbf8af8bca2c5e2eed23af) Thanks [@LashaJini](https://github.com/LashaJini)! - ### notify-jira-about-contribution

  - escape single quotes in PR's title

## 4.8.6

### Patch Changes

- [#110](https://github.com/toptal/davinci-github-actions/pull/110) [`8011c3f`](https://github.com/toptal/davinci-github-actions/commit/8011c3f061dae796122df58c3143b129aec451c7) Thanks [@eceakcck](https://github.com/eceakcck)! - ---

  ### build-push-release-image

  - bump yarn-install action to newer version

## 4.8.5

### Patch Changes

- [#106](https://github.com/toptal/davinci-github-actions/pull/106) [`00ba92a`](https://github.com/toptal/davinci-github-actions/commit/00ba92a66959e74b3c5822ddd7fe49f2ee15091c) Thanks [@LashaJini](https://github.com/LashaJini)! - ### build-push-release-image

  - bump build-push-image version

  ### deploy-storybook

  - bump build-push-image version

## 4.8.4

### Patch Changes

- [#104](https://github.com/toptal/davinci-github-actions/pull/104) [`37f9934`](https://github.com/toptal/davinci-github-actions/commit/37f9934a651e75c9f3b5e73451e44d9d3b58a5b4) Thanks [@LashaJini](https://github.com/LashaJini)! - ### build-push-image

  - Use specific version to fix the issue with gcr. Reason: [docker/buildx#1533](https://github.com/toptal/davinci-github-actions/pull/104)

## 4.8.3

### Patch Changes

- [#95](https://github.com/toptal/davinci-github-actions/pull/95) [`5c13242`](https://github.com/toptal/davinci-github-actions/commit/5c13242ed11d7e2081d34445855f21e6ca4e55c1) Thanks [@lorainegarutti](https://github.com/lorainegarutti)! - ---

  - updating docker/metadata-action action version for build-push-image package
  - updating internal packages for build-push-release-image and deploy-storybook packages
  - updating jenkins-job-trigger-action and actions/github-script action version for deploy-storybook package
  - updating actions/github-script action version for extract-env-variables package
  - updating google-github-actions/setup-gcloud action version for generate-gql-types package

* [#98](https://github.com/toptal/davinci-github-actions/pull/98) [`bdec899`](https://github.com/toptal/davinci-github-actions/commit/bdec899750594f0957c864fd29fb1187d0275663) Thanks [@dependabot](https://github.com/apps/dependabot)! - bump actions/checkout from 3.2.0 to 3.3.0

## 4.8.2

### Patch Changes

- [#93](https://github.com/toptal/davinci-github-actions/pull/93) [`5782d6f`](https://github.com/toptal/davinci-github-actions/commit/5782d6f0f78e0c4aee06ee3814240676bc53a5d0) Thanks [@lorainegarutti](https://github.com/lorainegarutti)! - ---

  - updating set-output command and checkout action version for build-push-image package

## 4.8.1

### Patch Changes

- [#90](https://github.com/toptal/davinci-github-actions/pull/90) [`4f73ed9`](https://github.com/toptal/davinci-github-actions/commit/4f73ed97c582c8c1b577611eda7f15894228eebd) Thanks [@rasitozcan](https://github.com/rasitozcan)! - ---

  - fix version number typo used inside `deploy-storybook` action

## 4.8.0

### Minor Changes

- [#75](https://github.com/toptal/davinci-github-actions/pull/75) [`366faed`](https://github.com/toptal/davinci-github-actions/commit/366faed04fb3e8e2c6afd2ff26cf995232576357) Thanks [@rasitozcan](https://github.com/rasitozcan)! - ---

  ### deploy-storybook

  - add `set up node` step
  - optional `pr-number` input to be used when `event.number` or `event.issue.number` is not present.

  ### generate-gql-types

  - create new action to generate GQL types

## 4.7.0

### Minor Changes

- [#87](https://github.com/toptal/davinci-github-actions/pull/87) [`d362a6d`](https://github.com/toptal/davinci-github-actions/commit/d362a6df1b2be506101d9e978b4ebdc3f3e37de1) Thanks [@stefanteixeira](https://github.com/stefanteixeira)! - ---

  ### deploy-storybook

  - adjust action to support usage on frontier-pub
  - add `use-prebuilt-package`, `use-prebuilt-image` and `jenkins-folder-name` inputs
  - fix `set-output` warnings

  ### yarn-install

  - fix `set-output` warnings

## 4.6.0

### Minor Changes

- [#78](https://github.com/toptal/davinci-github-actions/pull/78) [`708e807`](https://github.com/toptal/davinci-github-actions/commit/708e80791b283d66468e4c5e2cfed1e25a8df1b7) Thanks [@OndrejTuma](https://github.com/OndrejTuma)! - ---

  ### report-missing-changeset

  - add new action for monorepo that report changed packages which are not in changeset

## 4.5.0

### Minor Changes

- [#79](https://github.com/toptal/davinci-github-actions/pull/79) [`56d8e49`](https://github.com/toptal/davinci-github-actions/commit/56d8e49724bbce55eaf82968d8f733ffe64a7b6e) Thanks [@OndrejTuma](https://github.com/OndrejTuma)! - ---

  ### get-changeset-info

  - new action to return changeset information for monorepo. Returns:
    - changed packages compared to base ref
    - release packages defined in changeset files
    - missing packages that have been changed but are not part of release

## 4.4.3

### Patch Changes

- [#76](https://github.com/toptal/davinci-github-actions/pull/76) [`41d5aed`](https://github.com/toptal/davinci-github-actions/commit/41d5aedfabd8b2c02969cb444e48636923dfaff2) Thanks [@LashaJini](https://github.com/LashaJini)! - ---

  ### build-publish-alpha-package

  - bump `toptal/davinci-github-actions/yarn-install` from `3.0.1` to `4.4.2`

  ### build-push-release-image

  - bump `toptal/davinci-github-actions/yarn-install` from `3.0.1` to `4.4.2`
  - bump `toptal/davinci-github-actions/build-push-image` from `3.0.1` to `4.4.2`

  ### deploy-storybook

  - bump `toptal/davinci-github-actions/yarn-install` from `3.2.0` to `4.4.2`
  - bump `toptal/davinci-github-actions/build-push-image` from `3.2.0` to `4.4.2`
  - bump `toptal/davinci-github-actions/extract-env-variables` from `3.2.0` to `4.4.2`

  ### build-publish-alpha-package

  - bump `toptal/davinci-github-actions/is-team-member` from `3.0.2` to `4.4.2`

## 4.4.2

### Patch Changes

- [#70](https://github.com/toptal/davinci-github-actions/pull/70) [`9f6bfd7`](https://github.com/toptal/davinci-github-actions/commit/9f6bfd70d4aec9f436c51d99f15bc24207fde6cb) Thanks [@jcobarreto](https://github.com/jcobarreto)! - ---

  ### build-push-image

  - add GAR as new tag for docker image

## 4.4.1

### Patch Changes

- [#64](https://github.com/toptal/davinci-github-actions/pull/64) [`21cfee8`](https://github.com/toptal/davinci-github-actions/commit/21cfee8a7e89ccd168f3478efb3395b1e6d31c21) Thanks [@dulishkovych](https://github.com/dulishkovych)! - ---

  ### no-untracked-generated-types

  - fix usage of path-pattern

## 4.4.0

### Minor Changes

- [#58](https://github.com/toptal/davinci-github-actions/pull/58) [`465d6f8`](https://github.com/toptal/davinci-github-actions/commit/465d6f82a422a16ad4f0a2c01b3bcefa925d6500) Thanks [@dulishkovych](https://github.com/dulishkovych)! - ---

  ### no-untracked-generated-types

  - add new action that will help with catching ungenerated GQL types

## 4.3.0

### Minor Changes

- [#59](https://github.com/toptal/davinci-github-actions/pull/59) [`1f15f01`](https://github.com/toptal/davinci-github-actions/commit/1f15f014bd87a9debb4a1ef8b05f473682e51c65) Thanks [@denieler](https://github.com/denieler)! - ---

  ### depcuiser-metrics-report

  - add an action to report dependency cruiser metrics

## 4.2.2

### Patch Changes

- [#50](https://github.com/toptal/davinci-github-actions/pull/50) [`125085d`](https://github.com/toptal/davinci-github-actions/commit/125085dc566b10e7ec75b50bcff72d55e14560c5) Thanks [@rafael-anachoreta](https://github.com/rafael-anachoreta)! - ---

  ### yarn-install

  - remove --ignore-optional flag from the yarn install command.

## 4.2.1

### Patch Changes

- [#43](https://github.com/toptal/davinci-github-actions/pull/43) [`e2cf340`](https://github.com/toptal/davinci-github-actions/commit/e2cf34082b064af7cdad7f67088e94007d4ce400) Thanks [@denieler](https://github.com/denieler)! - ---

  ### danger

  - Use davinci in "package by package" way. Requires to install `@toptal/davinci-ci` in your project.

  ### build-publish-alpha-package

  - Use davinci in "package by package" way. Requires to install `@toptal/davinci-engine` in your project.

  ### upload-source-maps

  - Use davinci in "package by package" way. Requires to install `@toptal/davinci-engine` in your project.

## 4.2.0

### Minor Changes

- [#40](https://github.com/toptal/davinci-github-actions/pull/40) [`cb13095`](https://github.com/toptal/davinci-github-actions/commit/cb13095a3decd5165ac2c07605efe23f59c2630b) Thanks [@denieler](https://github.com/denieler)! - ---

  - Add `path` parameter to specify the directory where to run `yarn install` command

## 4.1.1

### Patch Changes

- [#31](https://github.com/toptal/davinci-github-actions/pull/31) [`fe27dbb`](https://github.com/toptal/davinci-github-actions/commit/fe27dbbaf3ba9d32ebd8b24462a573352811882c) Thanks [@OndrejTuma](https://github.com/OndrejTuma)! - ---

  ### notify-jira-about-contribution

  - use single source of truth for PR owner

## 4.1.0

### Minor Changes

- [#27](https://github.com/toptal/davinci-github-actions/pull/27) [`fcd8282`](https://github.com/toptal/davinci-github-actions/commit/fcd8282f448f121260d0ff760551b2a007863c50) Thanks [@dmaklygin](https://github.com/dmaklygin)! - - Rename release name for storybook temploy

## 4.0.0

### Major Changes

- [`8f48713`](https://github.com/toptal/davinci-github-actions/commit/8f48713fac89c8f016468054539652822ccacd6b) Thanks [@OndrejTuma](https://github.com/OndrejTuma)! - ---

  ### build-push-storybook-image

  - remove this action in favor of deploy-storybook

  ### deploy-storybook

  - add new action that handles the whole process of deploying storybook to temploy/staging

## 3.2.0

### Minor Changes

- [#17](https://github.com/toptal/davinci-github-actions/pull/17) [`66df5ce`](https://github.com/toptal/davinci-github-actions/commit/66df5ce3a9177a1e20f5782c848c68a975186b67) Thanks [@OndrejTuma](https://github.com/OndrejTuma)! - ---

  ### build-push-storybook-image

  - new action for build & push storybook image to the cloud

## 3.1.1

### Patch Changes

- [#19](https://github.com/toptal/davinci-github-actions/pull/19) [`30d0e4a`](https://github.com/toptal/davinci-github-actions/commit/30d0e4a498b173d46a5e6fd54db41c590b8b9b1a) Thanks [@LashaJini](https://github.com/LashaJini)! - ### notify-jira-about-contribution

  - Access TITLE and REPO from env

## 3.1.0

### Minor Changes

- [#16](https://github.com/toptal/davinci-github-actions/pull/16) [`7e50715`](https://github.com/toptal/davinci-github-actions/commit/7e50715383d0086fb93d01e2222c1e518c60dadf) Thanks [@dmaklygin](https://github.com/dmaklygin)! - - Add ability to specify a custom davinci branch in build-push-image GH Action

## 3.0.4

### Patch Changes

- [#13](https://github.com/toptal/davinci-github-actions/pull/13) [`c8f5528`](https://github.com/toptal/davinci-github-actions/commit/c8f5528ecf1fbf8bdffabe81044e24af007b777d) Thanks [@LashaJini](https://github.com/LashaJini)! - ---

  ### notify-jira-about-contribution

  - escape title parameter for JIRA ticket

## 3.0.3

### Patch Changes

- [#11](https://github.com/toptal/davinci-github-actions/pull/11) [`9a3f368`](https://github.com/toptal/davinci-github-actions/commit/9a3f368bd069aa1dbe5a0147782cfdd795b2f3a0) Thanks [@LashaJini](https://github.com/LashaJini)! - - Remove single quotes from PR title in the notify jira about contribution

## 3.0.2

### Patch Changes

- [#6](https://github.com/toptal/davinci-github-actions/pull/6) [`9870b85`](https://github.com/toptal/davinci-github-actions/commit/9870b856ff0492b1ad593d705ea8669795a47b99) Thanks [@dmaklygin](https://github.com/dmaklygin)! - Fix release GH Action

* [#5](https://github.com/toptal/davinci-github-actions/pull/5) [`87d58ab`](https://github.com/toptal/davinci-github-actions/commit/87d58ab57878b454bf7d77bafd2d0ecff6331c7f) Thanks [@dmaklygin](https://github.com/dmaklygin)! - - Fix GH Action to Notify JIRA About External Contribution

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
