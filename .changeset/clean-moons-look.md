---
'davinci-github-actions': patch
---

### yarn-install

- fix `yarn-install` action for scenario when calling `git checkout -- .npmrc`, the example error:

```bash
fatal: detected dubious ownership in repository at '/__w/talent-portal-frontend/talent-portal-frontend'
To add an exception for this directory, call:

	git config --global --add safe.directory /__w/talent-portal-frontend/talent-portal-frontend
```
