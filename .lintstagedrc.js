module.exports = {
  '*.{js,jsx,ts,tsx}': ['davinci syntax lint code', 'prettier --write'],
  '{action.yml,README.md}': paths =>
    paths.length > 0
      ? ['yarn documentation:generate', `git add */README.md`]
      : []
}
