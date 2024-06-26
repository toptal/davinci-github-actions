if [[ -z $JIRA_ISSUE_ALREADY_EXISTS ]]; then
  echo "Error: JIRA_ISSUE_ALREADY_EXISTS environment variable is not set" >&2
  exit 1
fi

if [[ -z $IS_DRAFT ]]; then
  echo "Error: IS_DRAFT environment variable is not set" >&2
  exit 1
fi

if [[ -z $IS_TEAM_MEMBER ]]; then
  echo "Error: IS_TEAM_MEMBER environment variable is not set" >&2
  exit 1
fi

if [[ -z $IS_DEPENDABOT_PULL_REQUEST ]]; then
  echo "Error: IS_DEPENDABOT_PULL_REQUEST environment variable is not set" >&2
  exit 1
fi

if [[ -z $SHOULD_NOTIFY_ABOUT_MAJOR_DEPENDENCY_UPDATES ]]; then
  echo "Error: SHOULD_NOTIFY_ABOUT_MAJOR_DEPENDENCY_UPDATES environment variable is not set" >&2
  exit 1
fi

if [[ -z $PR_TITLE ]]; then
  echo "Error: PR_TITLE environment variable is not set" >&2
  exit 1
fi

jiraIssueAlreadyExists=$JIRA_ISSUE_ALREADY_EXISTS
if [[ $jiraIssueAlreadyExists == "true" ]]; then
  echo "Jira issue already exists"
  echo "result=false" >> $GITHUB_OUTPUT
  exit
fi

isDraft=$IS_DRAFT
if [[ $isDraft == "true" ]]; then
  echo "Pull request is a draft"
  echo "result=false" >> $GITHUB_OUTPUT
  exit
fi

isTeamMember=$IS_TEAM_MEMBER
if [[ $isTeamMember == "true" ]]; then
  echo "Pull request author is member of specified team"
  echo "result=false" >> $GITHUB_OUTPUT
  exit
fi

# Exit early if pull request is not from dependabot
isDependabotPullRequest=$IS_DEPENDABOT_PULL_REQUEST
if [[ $isDependabotPullRequest == "false" ]]; then
  echo "Pull request author is not a dependabot and not a member of specified team"
  echo "result=true" >> $GITHUB_OUTPUT
  exit
fi

shouldNotifyAboutMajorDependencyUpdates=$SHOULD_NOTIFY_ABOUT_MAJOR_DEPENDENCY_UPDATES
if [[ $shouldNotifyAboutMajorDependencyUpdates == "false" ]]; then
  echo "Although ths is dependency update, notifying about major dependency updates is turned off"
  echo "result=false" >> $GITHUB_OUTPUT
  exit
fi

pullRequestTitle=$PR_TITLE

ignoreMajorDependencyUpdatePackages=$IGNORE_MAJOR_DEPENDENCY_UPDATE_PACKAGES
if [[ -n "$IGNORE_MAJOR_DEPENDENCY_UPDATE_PACKAGES" ]]; then
  if [[ "$pullRequestTitle" =~ $IGNORE_MAJOR_DEPENDENCY_UPDATE_PACKAGES ]]; then
    echo "Although ths is dependency update and notifying about major dependency updates is turned on, the package is ignored"
    echo "result=false" >> $GITHUB_OUTPUT
    exit
  fi
fi

# Extract major versions using grep utility
# For "Bump @cypress/webpack-preprocessor from 5.17.1 to 6.0.1" it returns "5"
currentMajorVersion=$(echo "$pullRequestTitle" | grep --only-matching --extended-regexp 'from [0-9]+(\.[0-9]+)?' | cut -d' ' -f2 | cut -d'.' -f1)
if [ -z "$currentMajorVersion" ]; then
  echo "Error: Unable to extract current major version" >&2
  exit 1
fi

# For "Bump @cypress/webpack-preprocessor from 5.17.1 to 6.0.1" it returns "6"
newMajorVersion=$(echo "$pullRequestTitle" | grep --only-matching --extended-regexp 'to [0-9]+(\.[0-9]+)?' | cut -d' ' -f2 | cut -d'.' -f1)
if [ -z "$newMajorVersion" ]; then
  echo "Error: Unable to extract new major version" >&2
  exit 1
fi

if [ "$currentMajorVersion" == "$newMajorVersion" ]; then
  echo "It is minor or patch dependency update, no ticket is created"
  echo "result=false" >> $GITHUB_OUTPUT
  exit
fi

echo "Is major dependency update"
echo "result=true" >> $GITHUB_OUTPUT
