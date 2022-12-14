module.exports = {
  '{**/*.{js,jsx,ts,tsx},.changeset/*.md}': [
    'davinci-syntax lint code',
    'prettier --write',
  ],
  '{action.yml,README.md}': paths =>
    paths.length > 0
      ? ['yarn documentation:generate', `git add */README.md`]
      : [],
  'get-changeset-info/index.js': () => [
    'yarn build:get-changeset-info',
    'git add get-changeset-info/dist',
  ],
  'report-missing-changeset/**/*.js': () => [
    'yarn build:report-missing-changeset',
    'git add report-missing-changeset/dist',
  ],
}
