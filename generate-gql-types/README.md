## Generate GQL Types

Generate graphql types before application build

### Description

### Inputs

The list of arguments, that are used in GH Action:

| name                           | type   | required | default        | description                                          |
| ------------------------------ | ------ | -------- | -------------- | ---------------------------------------------------- |
| `generate-types-command`       | string |          | generate:types | Command to generate gql types                        |
| `gcr-gql-schemas-bucket-token` | string | ✅        |                | Necessary token to pull gql schema from google cloud |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/generate-gql-types@4.7.0
    env:
      GCR_ACCOUNT_KEY: ${{ secrets.GCR_ACCOUNT_KEY }}
      GCR_GQL_SCHEMAS_BUCKET_TOKEN: ${{ secrets.GCR_GQLGW_SCHEMAS_BUCKET_ACCOUNT }}
    with:
      generate-types-command: generate:types
      gcr-gql-schemas-bucket-account: ${{ secrets.GCR_GQL_SCHEMAS_BUCKET_ACCOUNT }}
```
