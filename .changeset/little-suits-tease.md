---
'davinci-github-actions': major
---

---

### yarn-install

- fix using single yarn.lock file to detect cache hash in the root folder of the project, so reducing the time for action execution

BREAKING CHANGE: The action now uses a single yarn.lock located in the root of the repository to detect the cache hash. If you have multiple yarn.lock files in your repository, only the root one will be included in cache hash calculations.
