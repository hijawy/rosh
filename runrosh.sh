#!/bin/bash

google-chrome \
  --disable-web-security \
  --user-data-dir=/tmp/chrome-profile \
  --incognito \
  --new-window "$(dirname "$(realpath "$0")")/index.html" \
  "$@"
