#!/bin/sh -l

cd $GITHUB_WORKSPACE

yarn install

yarn davinci ci danger