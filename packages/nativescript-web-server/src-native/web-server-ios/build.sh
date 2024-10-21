#!/bin/sh

echo "Set exit on simple errors"
set -e

rm -rf $(PWD)/dist

echo "Build for iphonesimulator"
xcodebuild \
    -project WebServerNative.xcodeproj \
    -scheme WebServerNative \
    -sdk iphonesimulator \
    -destination "generic/platform=iOS Simulator" \
    -configuration Release \
    clean build \
    BUILD_DIR=$(PWD)/dist \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Build for iphoneos"
xcodebuild \
    -project WebServerNative.xcodeproj \
    -scheme WebServerNative \
    -sdk iphoneos \
    -destination "generic/platform=iOS" \
    -configuration Release \
    clean build \
    BUILD_DIR=$(PWD)/dist \
    CODE_SIGN_IDENTITY="" \
    CODE_SIGNING_REQUIRED=NO \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Creating XCFramework"
xcodebuild \
    -create-xcframework \
    -framework $(PWD)/dist/Release-iphoneos/WebServerNative.framework \
    -debug-symbols $(PWD)/dist/Release-iphoneos/WebServerNative.framework.dSYM \
    -framework $(PWD)/dist/Release-iphonesimulator/WebServerNative.framework \
    -debug-symbols $(PWD)/dist/Release-iphonesimulator/WebServerNative.framework.dSYM \
    -output $(PWD)/dist/WebServerNative.xcframework