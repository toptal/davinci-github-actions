#!/bin/bash


echo "{
  \"data\": \"{
    \"author\": \"$AUTHOR\",
    \"author_url\": \"$AUTHOR_URL\",
    \"title\": \"$TITLE\",
    \"number\": \"$NUMBER\",
    \"url\": \"$URL\",
    \"repo\": \"$REPO\"
  }\"
}" | sed "s/'/\\\\'/g" | curl -H 'Content-type: application/json' --data-binary @- "$JIRA_HOOK"
