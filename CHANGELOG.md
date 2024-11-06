# davinci-github-actions

## 15.6.0

### Minor Changes

- [#359](https://github.com/toptal/davinci-github-actions/pull/359) [`206ecb0`](https://github.com/toptal/davinci-github-actions/commit/206ecb0811e752e112de3deb7bdddfaf622e3f62) Thanks [@sashuk](https://github.com/sashuk)!
- add `gh-runner-driver-opts` parameter to `build-push-release-image` action

## 15.5.0

### Minor Changes

- [#356](https://github.com/toptal/davinci-github-actions/pull/356) [`5f88bee`](https://github.com/toptal/davinci-github-actions/commit/5f88bee8653c2774690d6e7b0e3877786ec84c2d) Thanks [@catks](https://github.com/catks)!
- add `gh-runners-driver-opts` option to `build-push-image` action to allow using custom image for `buildx`

## 15.4.1

### Patch Changes

- [#351](https://github.com/toptal/davinci-github-actions/pull/351) [`4216a19`](https://github.com/toptal/davinci-github-actions/commit/4216a194ebce8dc70f82f0f3ff8528192b1c47c9) Thanks [@sashuk](https://github.com/sashuk)!
- delete `automerge-release-pr` action

## 15.4.0

### Minor Changes

- [#348](https://github.com/toptal/davinci-github-actions/pull/348) [`c482a1c`](https://github.com/toptal/davinci-github-actions/commit/c482a1cf2d7d01ee95eec70d28fd3d7a7eb590d6) Thanks [@sashuk](https://github.com/sashuk)!
- add `automerge-release-pr` composite action

## 15.3.1

### Patch Changes

- [#335](https://github.com/toptal/davinci-github-actions/pull/335) [`c380f36`](https://github.com/toptal/davinci-github-actions/commit/c380f36707a8024a2cc713e096bb28dcd1398edc) Thanks [@MarianoSalerno](https://github.com/MarianoSalerno)!
- update `ssh-agent` action version used in build-push-image
  - update `github-script` action version used in extract-env-variables

## 15.3.0

### Minor Changes

- [#331](https://github.com/toptal/davinci-github-actions/pull/331) [`7e8fb48`](https://github.com/toptal/davinci-github-actions/commit/7e8fb487c86fb48601f6cfd197cfd423cc37903a) Thanks [@sashuk](https://github.com/sashuk)!
- do not create contribution tickets for major dependency updates that match the pattern

## 15.2.1

### Patch Changes

- [#326](https://github.com/toptal/davinci-github-actions/pull/326) [`20ea651`](https://github.com/toptal/davinci-github-actions/commit/20ea6513c39a6c3bf92a79909da5b67297456ebb) Thanks [@serbantarmure](https://github.com/serbantarmure)!
- fixup naming for custom runners for @yarn-install

## 15.2.0

### Minor Changes

- [#324](https://github.com/toptal/davinci-github-actions/pull/324) [`f8cc820`](https://github.com/toptal/davinci-github-actions/commit/f8cc8200e431db0b62c469eeca59c681ab17f996) Thanks [@serbantarmure](https://github.com/serbantarmure)!
- make @yarn-install && @build-push-action to work with runner-sets

## 15.1.0

### Minor Changes

- [#321](https://github.com/toptal/davinci-github-actions/pull/321) [`11b0379`](https://github.com/toptal/davinci-github-actions/commit/11b037976336f8148006309c394914ad4327afa4) Thanks [@serbantarmure](https://github.com/serbantarmure)!
- bump google-github-actions/get-secretmanager-secrets to @v2

## 15.0.0

### Major Changes

- [#315](https://github.com/toptal/davinci-github-actions/pull/315) [`fc0a39d`](https://github.com/toptal/davinci-github-actions/commit/fc0a39dd7497bc406e0126b6d289289d253475da) Thanks [@jcobarreto](https://github.com/jcobarreto)!
- change build-push-image action to encapsulate steps needed to use CI buildx instance when using custom runners.

  - by using the CI buildx we can cache the intermediate docker image layers, saving time for the next runs, and also
    saving with Cloud NAT, since we don't need to download packages for each run.

  Breaking changes:
  We added some new inputs and also removed the node-version input.

## 14.0.0

### Major Changes

- [#316](https://github.com/toptal/davinci-github-actions/pull/316) [`8661845`](https://github.com/toptal/davinci-github-actions/commit/86618455dbab6c34c7c1296e03e73a15e62a0cea) Thanks [@dmaklygin](https://github.com/dmaklygin)!
- drop support for Node.js@18; set Node.js@20 as the default version for all GitHub Actions.

## 13.0.2

### Patch Changes

- [#310](https://github.com/toptal/davinci-github-actions/pull/310) [`fab1446`](https://github.com/toptal/davinci-github-actions/commit/fab14467eff20f152cdb2ec44fcfcffb989d7cf8) Thanks [@TomasSlama](https://github.com/TomasSlama)!

### Yarn install

- run the check for the uncommitted changes in working directory

## 13.0.1

### Patch Changes

- [#308](https://github.com/toptal/davinci-github-actions/pull/308) [`0c60e73`](https://github.com/toptal/davinci-github-actions/commit/0c60e73ec246410de23cae4d98ade8d622e12fc0) Thanks [@TomasSlama](https://github.com/TomasSlama)!

### yarn install action

- throw an error when there is an uncommitted change in the yarn.lock

## 13.0.0

### Major Changes

- [#304](https://github.com/toptal/davinci-github-actions/pull/304) [`320c1d4`](https://github.com/toptal/davinci-github-actions/commit/320c1d41e9451cad3a26f07d48735be615bc6151) Thanks [@denieler](https://github.com/denieler)!

---

### yarn-install

- fix using single yarn.lock file to detect cache hash in the root folder of the project, so reducing the time for action execution

BREAKING CHANGE: The action now uses a single yarn.lock located in the root of the repository to detect the cache hash. If you have multiple yarn.lock files in your repository, only the root one will be included in cache hash calculations.

## 12.12.1

### Patch Changes

- [#300](https://github.com/toptal/davinci-github-actions/pull/300) [`9085b03`](https://github.com/toptal/davinci-github-actions/commit/9085b03792a556e03934ea0cdbe7aa61541c7ad4) Thanks [@dmaklygin](https://github.com/dmaklygin)!
- add DAVINCI_DOCKER_BUILD env variable to build images

## 12.12.0

### Minor Changes

- [#297](https://github.com/toptal/davinci-github-actions/pull/297) [`bb98d96`](https://github.com/toptal/davinci-github-actions/commit/bb98d96336b94a7db4000295a5554987c00d01fd) Thanks [@TomasSlama](https://github.com/TomasSlama)!
- add new options to build-push-release-image to support multi hosts in monorepo

## 12.11.0

### Minor Changes

- [#295](https://github.com/toptal/davinci-github-actions/pull/295) [`a8e9e03`](https://github.com/toptal/davinci-github-actions/commit/a8e9e0379a761da2d996933ac2ed4817b2398042) Thanks [@jcobarreto](https://github.com/jcobarreto)!
- revert yarn.lock to original registry refs after executing yarn install

## 12.10.0

### Minor Changes

- [#291](https://github.com/toptal/davinci-github-actions/pull/291) [`3f0e5e8`](https://github.com/toptal/davinci-github-actions/commit/3f0e5e8709485dba11f409e1eb4b74c69dcfce5b) Thanks [@sashuk](https://github.com/sashuk)!
- add `major-dependency-update-jira-label` parameter to `notify-jira-about-contribution` action

## 12.9.5

### Patch Changes

- [#289](https://github.com/toptal/davinci-github-actions/pull/289) [`51eb4ab`](https://github.com/toptal/davinci-github-actions/commit/51eb4ab67044b36dde17e63cb137dcf5e4f715b0) Thanks [@dkezele-t](https://github.com/dkezele-t)!
- remove NPM proxy variable which does not work in composite actions

## 12.9.4

### Patch Changes

- [#280](https://github.com/toptal/davinci-github-actions/pull/280) [`4d54b62`](https://github.com/toptal/davinci-github-actions/commit/4d54b62ccde2c0173029deae695906636e15eed7) Thanks [@sashuk](https://github.com/sashuk)!
- fix major version detection in `notify-jira-about-contribution` action

## 12.9.3

### Patch Changes

- [#282](https://github.com/toptal/davinci-github-actions/pull/282) [`abe350f`](https://github.com/toptal/davinci-github-actions/commit/abe350fe099a43d2763175c300fb4b88f20bf13f) Thanks [@dkezele-t](https://github.com/dkezele-t)!
- add switch to disable NPM proxy through organisational variable

## 12.9.2

### Patch Changes

- [#281](https://github.com/toptal/davinci-github-actions/pull/281) [`e935a35`](https://github.com/toptal/davinci-github-actions/commit/e935a357703d7558c7a32662b53b283d01e68aa1) Thanks [@Jakub-Kwak](https://github.com/Jakub-Kwak)!
- make build-publish-alpha-package action work with custom runners

## 12.9.1

### Patch Changes

- [#278](https://github.com/toptal/davinci-github-actions/pull/278) [`ea567d2`](https://github.com/toptal/davinci-github-actions/commit/ea567d2b8ddddf37c4577022f038e1166078fa29) Thanks [@sashuk](https://github.com/sashuk)!
- fix logic and step names in `notify-jira-about-contribution` action

## 12.9.0

### Minor Changes

- [#272](https://github.com/toptal/davinci-github-actions/pull/272) [`9a2ad2f`](https://github.com/toptal/davinci-github-actions/commit/9a2ad2f2f1417716e461aab5cd7edcfddaded5da) Thanks [@sashuk](https://github.com/sashuk)!
- enable notify-jira-about-contribution action to create tickets for major dependabot pull requests

## 12.8.1

### Patch Changes

- [#274](https://github.com/toptal/davinci-github-actions/pull/274) [`6e4d78e`](https://github.com/toptal/davinci-github-actions/commit/6e4d78e9345c87e83660f00e4014c2cbcc1aa4e4) Thanks [@dkezele-t](https://github.com/dkezele-t)!
- add workaround for NPM registry in `yarn-install` action

## 12.8.0

### Minor Changes

- [#270](https://github.com/toptal/davinci-github-actions/pull/270) [`80aa00b`](https://github.com/toptal/davinci-github-actions/commit/80aa00b21a57f6d425ef7ae3cec6459470f1baf5) Thanks [@dmaklygin](https://github.com/dmaklygin)!
- add feature to notify a fallback group in slack

## 12.7.2

### Patch Changes

- [#267](https://github.com/toptal/davinci-github-actions/pull/267) [`d9a483a`](https://github.com/toptal/davinci-github-actions/commit/d9a483a1fceb54be93aeb7bb3985c70d0904a0b1) Thanks [@Achillefs](https://github.com/Achillefs)!

---

### Node version bumps

- upgrade Node to V20 for create-matrix and get-changeset-info actions

## 12.7.1

### Patch Changes

- [#265](https://github.com/toptal/davinci-github-actions/pull/265) [`b590eac`](https://github.com/toptal/davinci-github-actions/commit/b590eac9b1ae494ddb22cc80fa2b42f90ccbea53) Thanks [@TomasSlama](https://github.com/TomasSlama)!
- add safeguard to not send empty title to github api

## 12.7.0

### Minor Changes

- [#259](https://github.com/toptal/davinci-github-actions/pull/259) [`7ef334d`](https://github.com/toptal/davinci-github-actions/commit/7ef334d54424df9c076e0fa3c02cac37eccb1dca) Thanks [@augustobmoura](https://github.com/augustobmoura)!

### update-dependency-to-latest

- add action for updating a npm dependency to the latest available

## 12.6.1

### Patch Changes

- [#257](https://github.com/toptal/davinci-github-actions/pull/257) [`27cad6c`](https://github.com/toptal/davinci-github-actions/commit/27cad6c7d5e40bcde6ef94c27a7feb4b7ab8d252) Thanks [@sashuk](https://github.com/sashuk)!
- rename max attempts parameter in `yarn-install`

## 12.6.0

### Minor Changes

- [#251](https://github.com/toptal/davinci-github-actions/pull/251) [`3822c87`](https://github.com/toptal/davinci-github-actions/commit/3822c87a4ccb74313e3dceecf17048c319cd3b27) Thanks [@augustobmoura](https://github.com/augustobmoura)!

### yarn-install

- add option for retry yarn install multiple times

## 12.5.2

### Patch Changes

- [#247](https://github.com/toptal/davinci-github-actions/pull/247) [`4822b13`](https://github.com/toptal/davinci-github-actions/commit/4822b13a2d75556da162b658e4d866eef5a84f2e) Thanks [@sashuk](https://github.com/sashuk)!
- update dependencies (`google-github-actions/*` and `docker/*`)

## 12.5.1

### Patch Changes

- [#222](https://github.com/toptal/davinci-github-actions/pull/222) [`0cd098d`](https://github.com/toptal/davinci-github-actions/commit/0cd098d3927e6b7a10fd5cad5df52a7b805b8e86) Thanks [@dependabot](https://github.com/apps/dependabot)!
- bump actions/setup-node

- [#235](https://github.com/toptal/davinci-github-actions/pull/235) [`8da2e7b`](https://github.com/toptal/davinci-github-actions/commit/8da2e7b0661d71b19073bf10cf5cc34c3743e09c) Thanks [@dependabot](https://github.com/apps/dependabot)!
- bump github-scripts

## 12.5.0

### Minor Changes

- [#240](https://github.com/toptal/davinci-github-actions/pull/240) [`0541d45`](https://github.com/toptal/davinci-github-actions/commit/0541d45c4912ee4898f53f6351ac6e13affc7c63) Thanks [@serbantarmure](https://github.com/serbantarmure)!
- use GSM in workflows

## 12.4.0

### Minor Changes

- [#239](https://github.com/toptal/davinci-github-actions/pull/239) [`c8ea3b9`](https://github.com/toptal/davinci-github-actions/commit/c8ea3b973bb005d3eb0baf565c0fb10edda3e420) Thanks [@mkrl](https://github.com/mkrl)!

### deploy-storybook

- fixed storybook temploy link

## 12.3.0

### Minor Changes

- [#233](https://github.com/toptal/davinci-github-actions/pull/233) [`711fad8`](https://github.com/toptal/davinci-github-actions/commit/711fad852c1004f2faed8b092874cd5a8f78480d) Thanks [@sashuk](https://github.com/sashuk)!
- add option of specifying the version of Node.js used for some of the actions (`build-publish-alpha-package`, `build-push-image`, `deploy-storybook`, `report-affected-packages`)

## 12.2.0

### Minor Changes

- [#228](https://github.com/toptal/davinci-github-actions/pull/228) [`dbb531f`](https://github.com/toptal/davinci-github-actions/commit/dbb531f5979eac4f7e31fb4a01ab96f436dbd4ab) Thanks [@augustobmoura](https://github.com/augustobmoura)!
- add action for renaming PR titles from conventional commits to Toptal's commits, useful for renaming dependabot PRs

## 12.1.0

### Minor Changes

- [#230](https://github.com/toptal/davinci-github-actions/pull/230) [`744bc4a`](https://github.com/toptal/davinci-github-actions/commit/744bc4aa77d41d24828cfa541b4ac21eae320c83) Thanks [@serbantarmure](https://github.com/serbantarmure)!
- add Google Secrets Manager related actions

## 12.0.2

### Patch Changes

- [#225](https://github.com/toptal/davinci-github-actions/pull/225) [`270798f`](https://github.com/toptal/davinci-github-actions/commit/270798f1e298f16604fd920988757a8f8b353c1b) Thanks [@ertrzyiks](https://github.com/ertrzyiks)!
- clean up tmp-workspaces.json file after it's not needed

## 12.0.1

### Patch Changes

- [#224](https://github.com/toptal/davinci-github-actions/pull/224) [`8a6ec9e`](https://github.com/toptal/davinci-github-actions/commit/8a6ec9efc63ff9abaa13c65b26009c2d4bef5c30) Thanks [@ertrzyiks](https://github.com/ertrzyiks)!
- fix `yarn cache dir` crash when no NPM_TOKEN env variable is available in the job

## 12.0.0

### Major Changes

- [#215](https://github.com/toptal/davinci-github-actions/pull/215) [`c9298a9`](https://github.com/toptal/davinci-github-actions/commit/c9298a9d97aaa166255f25b77609c03906d3e271) Thanks [@sashuk](https://github.com/sashuk)!
- change default value of `docker-file` parameter in `davinci-github-actions/build-push-image` action

## 11.0.0

### Major Changes

- [#214](https://github.com/toptal/davinci-github-actions/pull/214) [`772025f`](https://github.com/toptal/davinci-github-actions/commit/772025fab6acea12aa5196026f2e949d277fc9ab) Thanks [@dmaklygin](https://github.com/dmaklygin)!
- bump node version to 18

## 10.1.0

### Minor Changes

- [#211](https://github.com/toptal/davinci-github-actions/pull/211) [`3ae470b`](https://github.com/toptal/davinci-github-actions/commit/3ae470b92d85b939932f1d2e8cf957006a2604eb) Thanks [@sashuk](https://github.com/sashuk)!
- add notify-about-build-failure action. It sends notifications about build failure to specified Slack channel and private Slack messages of failing commit author

## 10.0.1

### Patch Changes

- [#209](https://github.com/toptal/davinci-github-actions/pull/209) [`bc21921`](https://github.com/toptal/davinci-github-actions/commit/bc21921afd63e695c95aae94b8e9b57a4b59b86e) Thanks [@dependabot](https://github.com/apps/dependabot)!
- bump actions/checkout from 4.0.0 to 4.1.0

## 10.0.0

### Major Changes

- [#205](https://github.com/toptal/davinci-github-actions/pull/205) [`b8fdfc9`](https://github.com/toptal/davinci-github-actions/commit/b8fdfc9a266596dc3fba05712316d4af1a3f12fd) Thanks [@dmaklygin](https://github.com/dmaklygin)!
- make GH Deployment optional in `create-jira-deployment` GH Action. By default this feature is disabled

## 9.1.1

### Patch Changes

- [#203](https://github.com/toptal/davinci-github-actions/pull/203) [`21476cc`](https://github.com/toptal/davinci-github-actions/commit/21476ccfacaf4906bca4ed3bfb3f8f1755bf2158) Thanks [@dmaklygin](https://github.com/dmaklygin)!
- make `environment-url` input parameter optional in `create-jira-deployment` GH Action

## 9.1.0

### Minor Changes

- [#197](https://github.com/toptal/davinci-github-actions/pull/197) [`706ff24`](https://github.com/toptal/davinci-github-actions/commit/706ff2459054185699581b5796604f6f5a7c8056) Thanks [@pudek357](https://github.com/pudek357)!
- pass additional variables to upload source maps action

## 9.0.2

### Patch Changes

- [#194](https://github.com/toptal/davinci-github-actions/pull/194) [`4662ded`](https://github.com/toptal/davinci-github-actions/commit/4662dedd38beb02e63692ded0c1a1432f0825e6b) Thanks [@dmaklygin](https://github.com/dmaklygin)!
- fix sha for jira deployment gh action

## 9.0.1

### Patch Changes

- [#192](https://github.com/toptal/davinci-github-actions/pull/192) [`6d59212`](https://github.com/toptal/davinci-github-actions/commit/6d592122aabca2eeadb965040f223e9c53911a1f) Thanks [@dmaklygin](https://github.com/dmaklygin)!
- fix sha for jira deployment gh action

## 9.0.0

### Major Changes

- [#190](https://github.com/toptal/davinci-github-actions/pull/190) [`6996874`](https://github.com/toptal/davinci-github-actions/commit/6996874543e496444f40d8be61989f25af75b4e9) Thanks [@dmaklygin](https://github.com/dmaklygin)!
- use jenkins to create jira deployment

## 8.0.1

### Patch Changes

- [#185](https://github.com/toptal/davinci-github-actions/pull/185) [`77f204d`](https://github.com/toptal/davinci-github-actions/commit/77f204d525b47fbe27693d531707ed528b762a89) Thanks [@rafael-anachoreta](https://github.com/rafael-anachoreta)!

---

### yarn-install

- add architecture to yarn-install cache key

## 8.0.0

### Major Changes

- [#182](https://github.com/toptal/davinci-github-actions/pull/182) [`aa67f39`](https://github.com/toptal/davinci-github-actions/commit/aa67f392d003ed6b6dec66a4219b6239bf11cff7) Thanks [@sashuk](https://github.com/sashuk)!
- all workflows use `node@16`

## 7.1.0

### Minor Changes

- [#179](https://github.com/toptal/davinci-github-actions/pull/179) [`c6762f2`](https://github.com/toptal/davinci-github-actions/commit/c6762f24d0e5d091929169311142c7cc3c50a030) Thanks [@TomasSlama](https://github.com/TomasSlama)!

### Create new Jira Deployment

- add new inputs `transient-environment` and `auto-inactive`
- useful for development environment when we want to have multiple deployments active for a single environment

```yaml
- uses: toptal/davinci-github-actions/create-jira-deployment@v6.3.0
  with:
    token: ${{ env.GITHUB_TOKEN }}
    environment: temploy
    environment-url: http://temploy.example.com
    transient-environment: false
    auto-inactive: false
```

## 7.0.1

### Patch Changes

- [#175](https://github.com/toptal/davinci-github-actions/pull/175) [`83362f1`](https://github.com/toptal/davinci-github-actions/commit/83362f1062cdcd81a828fa0486fad935631d27ad) Thanks [@dmaklygin](https://github.com/dmaklygin)!

---

- bump coverage-reporter gh action

## 7.0.0

### Major Changes

- [#173](https://github.com/toptal/davinci-github-actions/pull/173) [`7ff6c6c`](https://github.com/toptal/davinci-github-actions/commit/7ff6c6c6e444d2f69155cd3f26d87a8231d13de7) Thanks [@dmaklygin](https://github.com/dmaklygin)!
- build-push-image: avoid pushing images to Google Cloud Registy

## 6.5.0

### Minor Changes

- [#167](https://github.com/toptal/davinci-github-actions/pull/167) [`f5de2f0`](https://github.com/toptal/davinci-github-actions/commit/f5de2f085f722dd84e5c0cefa9538fa3f6a2be47) Thanks [@jcobarreto](https://github.com/jcobarreto)!

---

- change to use inputs.path in yarn-install action when provided

## 6.4.0

### Minor Changes

- [#160](https://github.com/toptal/davinci-github-actions/pull/160) [`39bddf5`](https://github.com/toptal/davinci-github-actions/commit/39bddf582488467328921d3a45ec4ddfb064b694) Thanks [@jcobarreto](https://github.com/jcobarreto)!

---

- add npm-gar-token input to yarn-install action to enable npm package caching in Artifact Registry

## 6.3.0

### Minor Changes

- [#158](https://github.com/toptal/davinci-github-actions/pull/158) [`7921199`](https://github.com/toptal/davinci-github-actions/commit/79211995c3b0c401091715c4b72b0d236751ce60) Thanks [@dmaklygin](https://github.com/dmaklygin)!

---

- add new GH Action to create a Jira deployment

## 6.2.0

### Minor Changes

- [#156](https://github.com/toptal/davinci-github-actions/pull/156) [`5a2eb19`](https://github.com/toptal/davinci-github-actions/commit/5a2eb19e1f33647e281becf1175d4c61abdef2b1) Thanks [@augustobmoura](https://github.com/augustobmoura)!

---

### build-publish-alpha

- change node version to follow 14 major

### build-push-image

- change node version to follow 14 major

### Patch Changes

- [#159](https://github.com/toptal/davinci-github-actions/pull/159) [`4edb936`](https://github.com/toptal/davinci-github-actions/commit/4edb936f813b168d7a23cb0711e491153c7ca7ee) Thanks [@dmaklygin](https://github.com/dmaklygin)!

---

- bump davinci-syntax version to 20

## 6.1.0

### Minor Changes

- [#151](https://github.com/toptal/davinci-github-actions/pull/151) [`8bcd3f0`](https://github.com/toptal/davinci-github-actions/commit/8bcd3f05e3588ba9813a650babe8069383e73798) Thanks [@denieler](https://github.com/denieler)!

---

### extract-env-variables

- add support of old and new davinci-app charts. Append env variables with `davinci-app` prefix.

### Patch Changes

- [#154](https://github.com/toptal/davinci-github-actions/pull/154) [`50812b1`](https://github.com/toptal/davinci-github-actions/commit/50812b14e0f2b5c7b0aa09a7251d1927b5cc8710) Thanks [@denieler](https://github.com/denieler)!

---

### deploy-storybook

- fix when no .env file is used for a project

## 6.0.5

### Patch Changes

- [#148](https://github.com/toptal/davinci-github-actions/pull/148) [`400fb0c`](https://github.com/toptal/davinci-github-actions/commit/400fb0c1531a25e5aed8cdfb214a5ffd654b26fa) Thanks [@dmaklygin](https://github.com/dmaklygin)! - ---
  - pass checkout-token from deploy-storybook GH Action to yarn-install

## 6.0.4

### Patch Changes

- [#146](https://github.com/toptal/davinci-github-actions/pull/146) [`f66544e`](https://github.com/toptal/davinci-github-actions/commit/f66544e0fd2b45c732c42b3803458b0dc36429e2) Thanks [@mkrl](https://github.com/mkrl)! - ---

  ### build-publish-alpha-package

  - fixed a bug with an action failing when root-folder is not specified

## 6.0.3

### Patch Changes

- [#143](https://github.com/toptal/davinci-github-actions/pull/143) [`29b70ec`](https://github.com/toptal/davinci-github-actions/commit/29b70ec28060045c7b0f6226ea9176f28275afd5) Thanks [@dependabot](https://github.com/apps/dependabot)! - ---

  - bump actions/checkout from 3.4.0 to 3.5.0

## 6.0.2

### Patch Changes

- [#140](https://github.com/toptal/davinci-github-actions/pull/140) [`f2ea3c5`](https://github.com/toptal/davinci-github-actions/commit/f2ea3c5e08027611afe047d1be326cd0278a7840) Thanks [@sashuk](https://github.com/sashuk)! - ---

  - the `Ana06/get-changed-files` was replaced with `masesgroup/retrieve-changed-files`

## 6.0.1

### Patch Changes

- [#138](https://github.com/toptal/davinci-github-actions/pull/138) [`0afea29`](https://github.com/toptal/davinci-github-actions/commit/0afea29a192c36ccd3b473a4dd4db98424113ae3) Thanks [@sashuk](https://github.com/sashuk)! - ---

  - bring `toptal/davinci-github-actions/*` dependencies up-to-date

## 6.0.0

### Major Changes

- [#135](https://github.com/toptal/davinci-github-actions/pull/135) [`085cb7e`](https://github.com/toptal/davinci-github-actions/commit/085cb7e3243c43dde3358793d3164c60c2f315bd) Thanks [@sashuk](https://github.com/sashuk)! - ---

  - support for `node < 14` was dropped; `actions/checkout`, `docker/metadata-action`, `xt0rted/pull-request-comment-branch`, `actions/upload-artifact`, `actions/github-script` dependencies were updated

## 5.0.0

### Major Changes

- [#127](https://github.com/toptal/davinci-github-actions/pull/127) [`c9c3a78`](https://github.com/toptal/davinci-github-actions/commit/c9c3a78d6ce69fd45a169bb375a5ae11a1a11da6) Thanks [@mkrl](https://github.com/mkrl)! - ---

  ### build-publish-alpha-package

  - add new input `root-folder` to specify the root folder of a package to be published
  - build-publish-alpha-package now requires davinci-engine@9.1.0 or later

## 4.10.4

### Patch Changes

- [#128](https://github.com/toptal/davinci-github-actions/pull/128) [`83acd56`](https://github.com/toptal/davinci-github-actions/commit/83acd562a8fe55548995a6ca5c01cdda5733f081) Thanks [@dmaklygin](https://github.com/dmaklygin)! - ---

  - set the `danger` environment variable to ensure that all API requests are performed on the correct domain

## 4.10.3

### Patch Changes

- [#123](https://github.com/toptal/davinci-github-actions/pull/123) [`ef8bd12`](https://github.com/toptal/davinci-github-actions/commit/ef8bd122670b913904f4963bf50ef768706be909) Thanks [@OleksandrNechai](https://github.com/OleksandrNechai)! - ---

  - fix broken notify-jira-about-contribution GHA

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
