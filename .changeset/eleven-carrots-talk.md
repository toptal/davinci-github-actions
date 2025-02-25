---
'davinci-github-actions': major
---

### yarn-install

- change authentication with Google Artifacts to use WIF, replace the secret `NPM_GAR_TOKE` with the access token from Workload Identity federation as the example below:

```bash
- name: Authenticate to Google Cloud using WIF
        id: gcp-auth
        uses: google-github-actions/auth@v2
        with:
          token_format: access_token
          workload_identity_provider: projects/858873486241/locations/global/workloadIdentityPools/gha-pool/providers/github-com
          service_account: gha-repo-name@toptal-ci.iam.gserviceaccount.com
```

and then call the yarn-install action using the `auth_token` from the `gcp-auth` step:

```bash
- name: Install dependencies
  uses: toptal/davinci-github-actions/yarn-install@ops-695-wif-auth-google-artifacts-for-npm
  with:
    checkout-token: ${{ steps.parse_secrets.outputs.TOPTAL_REPOACCESSBOT_TOKEN }}
    npm-gar-token: ${{ steps.gcp-auth.outputs.auth_token }}
      max-attempts: 2
```

Please remember to add the nescessary permission to the service account of the repository have access to Google Artifact Registry. Example: https://github.com/toptal/gcp-configuration/pull/149/files

for more informartion please consult: https://toptal-core.atlassian.net/wiki/spaces/CI/pages/1310785878/Technical+documentation#How-to-migrate-service-accounts-on-GHA-to-WIF
