#!/bin/sh

echo "Set exit on simple errors"
set -e

rm -rf $(PWD)/build

echo "Build for iphonesimulator"
xcodebuild \
    -project BarcodeScannerFramework.xcodeproj \
    -scheme BarcodeScannerFramework \
    -sdk iphonesimulator \
    -configuration Release \
    clean build \
    BUILD_DIR=$(PWD)/build \
    SKIP_INSTALL=NO \
    -quiet

echo "Build for iphoneos"
xcodebuild \
    -project BarcodeScannerFramework.xcodeproj \
    -scheme BarcodeScannerFramework \
    -sdk iphoneos \
    -configuration Release \
    clean build \
    BUILD_DIR=$(PWD)/build \
    CODE_SIGN_IDENTITY="" \
    CODE_SIGNING_REQUIRED=NO \
    SKIP_INSTALL=NO \
    -quiet

echo "Creating XCFramework"
xcodebuild \
    -create-xcframework \
    -framework $(PWD)/build/Release-iphoneos/BarcodeScannerFramework.framework \
    -debug-symbols $(PWD)/build/Release-iphoneos/BarcodeScannerFramework.framework.dSYM \
    -framework $(PWD)/build/Release-iphonesimulator/BarcodeScannerFramework.framework \
    -debug-symbols $(PWD)/build/Release-iphonesimulator/BarcodeScannerFramework.framework.dSYM \
    -output $(PWD)/build/BarcodeScannerFramework.xcframework
