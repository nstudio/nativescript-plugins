#!/bin/bash
cd ../../packages/nativescript-web-server/src-native/web-server-ios
set -e


rm -rf ../../platforms/ios/WebServerNative.xcframework || true
mkdir -p ../../platforms/ios

echo "Build iOS"
./build.sh
#cd ..
echo "Copy /dist/*.xcframework platforms/ios"

echo $PWD

cp -R dist/WebServerNative.xcframework ../../platforms/ios