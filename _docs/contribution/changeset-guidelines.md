# Changesets guidelines

The same as commits, we write changeset in `present simple`.

## Version bump

`patch`

- Bug fix
- Change in the existing functionality
- Change, which does not affect users

`minor`

- New action
- New action input/output

`major`

- Deleting an action
- Deleting an action's input/output
- Users need to take action to use released version with the changes

## Summary of the change (changelog message)

Please use this format:

```
---
'davinci-github-actions': [version bump]
---

---
### action name 1

- change 1 for the action 1

### action name 2

- change 1 for the action 2
- change 2 for the action 2
```