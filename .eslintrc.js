module.exports = {
  "extends": './node_modules/@toptal/davinci-syntax/src/configs/.eslintrc.cjs',
  "rules": {
    "id-length": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "varsIgnorePattern": "__", "argsIgnorePattern": "^_" }],
    "complexity": "off",
    "max-lines-per-function": "off",
    "padding-line-between-statements": "off"
  }
}
