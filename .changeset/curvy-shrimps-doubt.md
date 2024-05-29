---
'davinci-github-actions': major
---

- change build-push-image action to encapsulate steps needed to use CI buildx instance when using custom runners.

- by using the CI buildx we can cache the intermediate docker image layers, saving time for the next runs, and also
  saving with Cloud NAT, since we don't need to download packages for each run.

Breaking changes:
We added some new inputs and also removed the node-version input.
