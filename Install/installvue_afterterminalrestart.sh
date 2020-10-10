#!/usr/bin/env bash

# This first command has to be repeated for some reason
export PATH="$PATH:`yarn global bin`"
nvm install --lts
yarn global add @vue/cli
yarn global add @vue/cli-service-global
