---
'davinci-github-actions': patch
---

---
### yarn-install

- fix for custom usage of path parameter. If path input parameter is used - use `yarn.lock` file from that path to generate cache hash.
