---
'davinci-github-actions': minor
---

### Create new Jira Deployment

- add new inputs `transient-environment` and `auto-inactive`
- useful for development environment when we want to have multiple deployments active for a single environment

```yaml
- uses: toptal/davinci-github-actions/create-jira-deployment@v6.3.0
  with:
    token: ${{ env.GITHUB_TOKEN }}
    environment: temploy
    environment-url: http://temploy.example.com
    transient-environment: false
    auto-inactive: false
```
