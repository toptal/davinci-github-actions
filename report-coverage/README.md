## Print coverage report in a PR

Merge all report files in `path` folder using `nyc merge`
Then prints coverage report as a comment in related PR

### Description

Downloads artifact folder and uses `nyc` to merge all report files into one.

Then prints coverage report as a comment in related PR

### Inputs

The list of arguments, that are used in GH Action:

| name           | type   | required | default       | description                                                                                              |
| -------------- | ------ | -------- | ------------- | -------------------------------------------------------------------------------------------------------- |
| `path`         | string |          | code-coverage | Path to a folder with code coverage file(s)                                                              |
| `reporter`     | string |          | text-summary  | Istanbul reporter for coverage output - see https://istanbul.js.org/docs/advanced/alternative-reporters/ |
| `github-token` | string |          |               | GitHub token                                                                                             |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/report-coverage@v3.0.1
    with:
      path: code-coverage
      reporter: text-summary
      github-token: ${{ secrets.TOPTAL_DEVBOT_TOKEN }}
```
