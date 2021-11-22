#!/bin/bash
cd ../../packages/nativescript-qr/src-native/qr-ios
set -e


rm -rf ../platforms/ios || true
mkdir -p ../platforms/ios

echo "Build iOS"
./build.sh
#cd ..
echo "Copy /dist/*.xcframework platforms/ios"

cp -R dist/QrNative.xcframework ../../platforms/ios