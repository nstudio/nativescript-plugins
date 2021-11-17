#!/bin/sh

echo "Set exit on simple errors"
set -e


echo "Use dumb gradle terminal"
export TERM=dumb

echo "Clean dist"
rm -rf dist

export SKIP_PACK=true
# ./build.android.sh
./build.ios.sh

