#!/bin/bash

echo "Extracting @toptal and @topkit entries"
touch yarn.lock.toptal
if grep -q '/@toptal\|/@topkit' yarn.lock; then
  grep '/@toptal\|/@topkit' yarn.lock | awk '{print $2 " " $2}' > yarn.lock.toptal
fi

echo "Changing the URLs to the new registry for @toptal and @topkit entries, creating a TO/FROM list to be used when reverting back the URLs to the original registry"
sed -i -e "s#https://registry.yarnpkg.com/#https://us-central1-npm.pkg.dev/toptal-ci/npm-registry/#" yarn.lock.toptal
sed -i -e "s#https://registry.npmjs.org/#https://us-central1-npm.pkg.dev/toptal-ci/npm-registry/#" yarn.lock.toptal

echo "Changing the URLs to AR registry for all occurrences"
sed -i -e "s#https://registry.yarnpkg.com/#https://us-central1-npm.pkg.dev/toptal-ci/npm-registry/#g" yarn.lock
sed -i -e "s#https://registry.npmjs.org/#https://us-central1-npm.pkg.dev/toptal-ci/npm-registry/#g" yarn.lock

echo "Removing double quotes from the URLs"
sed -i -e "s/\"//g" yarn.lock.toptal

echo "Reverting the @toptal and @topkit packages to the original registry, working on revert fewer ocurrences (specific list) is faster than loop all the file"
while read -r line; do
  url1="$(awk '{ print $1 }' <<<"$line")"
  url2="$(awk '{ print $2 }' <<<"$line")"
  sed -i -e "s~${url1}~${url2}~" yarn.lock
done < yarn.lock.toptal
