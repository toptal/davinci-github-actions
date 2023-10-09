const targets = ['create-matrix', 'get-changeset-info', 'report-missing-changeset', 'notify-about-build-failure']

module.exports = {
  '{**/*.{js,jsx,ts,tsx},.changeset/*.md}': [
    'davinci-syntax lint code',
    'prettier --write',
  ],
  '{action.yml,README.md}': paths =>
    paths.length > 0
      ? ['yarn documentation:generate', `git add */README.md`]
      : [],
  ...(targets.map((acc, target) => {
    acc[`${target}/**/*.js`] = () => [
      `yarn build:${target}`,
      `git add ${target}/dist`,
    ]

    return acc
  }, {}))
}
