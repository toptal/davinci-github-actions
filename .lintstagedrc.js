module.exports = {
  '{**/*.{js,jsx,ts,tsx},.changeset/*.md}': [
    'davinci-syntax lint code',
    'prettier --write',
  ],
  '{action.yml,README.md}': paths =>
    paths.length > 0
      ? ['yarn documentation:generate', `git add */README.md`]
      : [],
  'create-matrix/**/*.js': () => [
    'yarn build:create-matrix',
    'git add create-matrix/dist',
  ],
  'get-changeset-info/**/*.js': () => [
    'yarn build:get-changeset-info',
    'git add get-changeset-info/dist',
  ],
  'report-missing-changeset/**/*.js': () => [
    'yarn build:report-missing-changeset',
    'git add report-missing-changeset/dist',
  ],
  'notify-about-build-failure/**/*.js': () => [
    'yarn build:notify-about-build-failure',
    'git add notify-about-build-failure/dist',
  ],
}
