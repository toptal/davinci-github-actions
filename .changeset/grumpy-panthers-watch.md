---
'davinci-github-actions': minor
---

---

### get-changeset-info

- new action to return changeset information for monorepo. Returns:
  - changed packages compared to base ref
  - release packages defined in changeset files
  - missing packages that have been changed but are not part of release
