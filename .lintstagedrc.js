const buildTargets = ['create-matrix', 'get-changeset-info', 'report-missing-changeset', 'notify-about-build-failure']

module.exports = {
  '{**/*.{js,jsx,ts,tsx},.changeset/*.md}': [
    'davinci-syntax lint code',
    'prettier --write',
  ],
  '{action.yml,README.md}': paths =>
    paths.length > 0
      ? ['yarn documentation:generate', `git add */README.md`]
      : [],
  ...(buildTargets.map((acc, target) => {
    acc[`${target}/**/*.js`] = () => [
      `yarn ncc build ${target}/index.js -o ${target}/dist`,
      `git add ${target}/dist`,
    ]

    return acc
  }, {}))
}
