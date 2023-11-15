Action to get Google Secret Manager secrets. This action is based on google-github-actions/auth and google-github-actions/get-secretmanager-secrets, practically combining them and performing a cleanup afterwards.

Unfortunately, due to the specifics of GHA implementation for composite actions, it is not possible to expose arbitrary outputs, so this action goes hand by hand with a [parser](../expose-json-outputs/README.md) that exposes a JSON string as outputs of a JS action, which is able to expose arbitrary outputs.

> To prevent accidentally committing credentials please add these lines to .gitignore file:

    # Ignore generated credentials from google-github-actions/auth 
    gha-creds-*.json
