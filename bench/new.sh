#!/bin/bash

PUBLIC_YARN_REGISTRY="https://registry.yarnpkg.com/"
PUBLIC_NPM_REGISTRY="https://registry.npmjs.org/"
TOPTAL_NPM_REGISTRY="https://us-central1-npm.pkg.dev/toptal-ci/npm-registry/"

echo "Updating registry URLs in yarn.lock file and writing output to yarn.lock.temp"
# NOTE: setting IFS= (empty) for `read -r line` ensures that:
#  1. Leading and trailing whitespace in each line is preserved
#  2. The line is read exactly as-is, without any field splitting
#  3. Any whitespace characters within the line remain untouched
while IFS= read -r line; do
    if [[ $line =~ /@toptal|/@topkit ]]; then
        # For @toptal and @topkit packages, keep the original registry
        echo "$line" >> yarn.lock.temp
    else
        # For all other packages, replace with new registry
        modified_line="${line//$PUBLIC_YARN_REGISTRY/$TOPTAL_NPM_REGISTRY}"
        modified_line="${modified_line//$PUBLIC_NPM_REGISTRY/$TOPTAL_NPM_REGISTRY}"
        echo "$modified_line" >> yarn.lock.temp
    fi
done < yarn.lock

echo "Replacing yarn.lock file with yarn.lock.temp"
mv yarn.lock.temp yarn.lock

echo "Registry URLs updated while preserving @toptal and @topkit package sources"
