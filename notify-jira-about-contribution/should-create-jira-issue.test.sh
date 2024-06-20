# How to test
# 1. Navigate to this folder
# 2. Run `sh should-create-jira-issue.test.sh`

# Temporary file that contains the output of the script
export GITHUB_OUTPUT="./github-output.txt"

function beforeEach {
  rm -f $GITHUB_OUTPUT

  export JIRA_ISSUE_ALREADY_EXISTS=false
  export IS_DRAFT=false
  export IS_TEAM_MEMBER=false
  export IS_DEPENDABOT_PULL_REQUEST=false
  export SHOULD_NOTIFY_ABOUT_MAJOR_DEPENDENCY_UPDATES=false
  export IGNORE_MAJOR_DEPENDENCY_UPDATE_PACKAGES=""
  export PR_TITLE="Test value"
}

function afterAll {
  rm -f $GITHUB_OUTPUT
}

function test {
  expectedOutput=$1
  expectedResult=$2

  output=$(sh should-create-jira-issue.sh)
  if [[ $output != $expectedOutput ]]; then
    echo "Test failed: Invalid output, expected $expectedOutput but got $output"
    exit 1
  fi
  if ! grep -q "result=$expectedResult" "$GITHUB_OUTPUT"; then
    echo "Test failed: Expected result=$expectedResult not found in $GITHUB_OUTPUT"
    exit 1
  fi
}

beforeEach
export JIRA_ISSUE_ALREADY_EXISTS=true
echo "=== Case: Jira issue already exists"
test "Jira issue already exists" "false"

beforeEach
export IS_DRAFT=true
echo "=== Case: pull request is draft"
test "Pull request is a draft" "false"

beforeEach
export IS_DEPENDABOT_PULL_REQUEST=true
export PR_TITLE="Bump lodash from 4.17.20 to 4.17.21"
export SHOULD_NOTIFY_ABOUT_MAJOR_DEPENDENCY_UPDATES=false
echo "=== Case: non-major dependabot pull request, dependabot notifications disabled"
test "Although ths is dependency update, notifying about major dependency updates is turned off" "false"

beforeEach
export IS_DEPENDABOT_PULL_REQUEST=true
export PR_TITLE="Bump lodash from 4.17.20 to 4.17.21"
export SHOULD_NOTIFY_ABOUT_MAJOR_DEPENDENCY_UPDATES=true
echo "=== Case: non-major dependabot pull request, dependabot notifications enabled"
test "It is minor or patch dependency update, no ticket is created" "false"

beforeEach
versionBump="from 4.17.20 to 5.17.21"
export IS_DEPENDABOT_PULL_REQUEST=true
export PR_TITLE="Bump lodash $versionBump"
export SHOULD_NOTIFY_ABOUT_MAJOR_DEPENDENCY_UPDATES=true
echo "=== Case: major dependabot pull request ($versionBump), dependabot notifications enabled"
test "Is major dependency update" "true"

beforeEach
versionBump="from 4.17.20 to 5.17.21"
export IS_DEPENDABOT_PULL_REQUEST=true
export PR_TITLE="Bump @toptal/davinci-github-actions $versionBump"
export SHOULD_NOTIFY_ABOUT_MAJOR_DEPENDENCY_UPDATES=true
export IGNORE_MAJOR_DEPENDENCY_UPDATE_PACKAGES="@toptal"
echo "=== Case: major dependabot pull request ($versionBump), dependabot notifications enabled, package is ignored"
test "Although ths is dependency update and notifying about major dependency updates is turned on, the package is ignored" "false"

beforeEach
versionBump="from 4.4 to 7363638339"
export IS_DEPENDABOT_PULL_REQUEST=true
export PR_TITLE="Bump lodash $versionBump"
export SHOULD_NOTIFY_ABOUT_MAJOR_DEPENDENCY_UPDATES=true
echo "=== Case: major dependabot pull request ($versionBump), dependabot notifications enabled"
test "Is major dependency update" "true"

beforeEach
export IS_TEAM_MEMBER=false
echo "=== Case: pull request author is not a member of the team"
test "Pull request author is not a dependabot and not a member of specified team" "true"

beforeEach
export IS_TEAM_MEMBER=true
echo "=== Case: pull request author is member of the team"
test "Pull request author is member of specified team" "false"

afterAll
