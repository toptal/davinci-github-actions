## Generate GQL Types

Generate graphql types before application build

### Description

This action performs the following steps:

1.  Authenticates to Google Cloud using the provided `workload_identity_provider` and `service_account`.
2.  Sets up the `gcloud` CLI.
3.  Checks for a cache of previously generated types based on your project's lock files and GraphQL-related files.
4.  If no cache hit, runs the specified `generate-types-command`.

### Inputs

The list of arguments, that are used in GH Action:

| name                         | type   | required | default        | description                                                                                                                               |
| ---------------------------- | ------ | -------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `generate-types-command`     | string |          | generate:types | Command to generate gql types                                                                                                             |
| `workload_identity_provider` | string | ✅        |                | The Google Cloud Workload Identity Provider. E.g. projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider |
| `service_account`            | string | ✅        |                | The Google Cloud Service Account email. E.g. my-service-account@my-project.iam.gserviceaccount.com                                        |

### Outputs

Not specified

### ENV Variables

Not specified

### Usage

```yaml
  - uses: toptal/davinci-github-actions/generate-gql-types@4.7.0
    with:
      generate-types-command: 'yarn generate:types' # Or your specific command
      workload_identity_provider: 'projects/YOUR_GCP_PROJECT_NUMBER/locations/global/workloadIdentityPools/YOUR_POOL_ID/providers/YOUR_PROVIDER_ID'
      service_account: 'your-service-account-email@YOUR_GCP_PROJECT_ID.iam.gserviceaccount.com'
```
