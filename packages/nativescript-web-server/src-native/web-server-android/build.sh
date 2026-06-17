#!/bin/sh

# Build the Android JNI library (libwebservernative.so) for all four ABIs
# and assemble the release AAR. Android counterpart of
# `web-server-ios/build.sh`.
#
# Requirements:
#   - rustup with a nightly toolchain and the four Android targets
#     (aarch64-linux-android, armv7-linux-androideabi, i686-linux-android,
#     x86_64-linux-android),
#   - cargo-ndk (`cargo install cargo-ndk`),
#   - an Android NDK — cargo-ndk auto-detects it via $ANDROID_NDK_HOME or
#     $ANDROID_HOME/ndk.
#
# The JNI lib is a plain cdylib: unlike iOS we do NOT use `-Z build-std` or
# the iOS RUSTFLAGS (`-undefined dynamic_lookup` etc. are Mach-O/iOS only).

echo "Set exit on simple errors"
set -e

source "$HOME/.cargo/env"

ANDROID_DIR="$PWD"
JNILIBS="$ANDROID_DIR/webserver/src/main/jniLibs"

echo "Build Rust JNI lib for all ABIs -> $JNILIBS"
# cargo-ndk discovers the workspace via `cargo metadata` in the CWD (it
# ignores a build-subcommand --manifest-path), so run it from the Rust
# workspace dir and emit the .so straight into the gradle module's jniLibs.
cd ../web-server-native
cargo +nightly ndk \
    -t arm64-v8a \
    -t armeabi-v7a \
    -t x86 \
    -t x86_64 \
    -o "$JNILIBS" \
    build --release -p server-android
cd "$ANDROID_DIR"

echo "Assemble release AAR"
./gradlew :webserver:assembleRelease
