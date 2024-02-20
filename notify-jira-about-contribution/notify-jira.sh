#!/bin/bash

set -x

generate_data()
{
  cat <<EOF
  {
    "data": {
      "author": "$AUTHOR",
      "author_url": "$AUTHOR_URL",
      "title": "$TITLE",
      "number": "$NUMBER",
      "url": "$URL",
      "repo": "$REPO",
      "label": "$LABEL"
    }
  }
EOF
}

generate_data | sed "s/'/\\\\'/g" | curl -H 'Content-type: application/json' --data-binary @- "$JIRA_HOOK"
