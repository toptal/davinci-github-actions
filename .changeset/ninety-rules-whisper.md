---
'davinci-github-actions': minor
---

- fix issues with `yarn-install` action
- remove `GCR_ACCOUNT_KEY` from envVar for `build-push-image` action
- remove "Login to Google Artifact Registry - GAR" step from the same action and replace it with "Set up Docker login"
