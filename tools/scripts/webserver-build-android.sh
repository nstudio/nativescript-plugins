#!/bin/bash
cd ../../packages/nativescript-web-server/src-native/web-server-android
set -e


rm -rf ../../platforms/android/webserver-release.aar || true
mkdir -p ../../platforms/android

echo "Build Android"
./build.sh

echo "Copy webserver-release.aar platforms/android"

echo $PWD

cp -R webserver/build/outputs/aar/webserver-release.aar ../../platforms/android
