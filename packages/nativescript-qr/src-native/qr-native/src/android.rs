use std::os::raw::c_void;

use android_logger::Config;
use jni::JNIEnv;
use jni::objects::{JClass, JObject, JString, ReleaseMode};
use jni::sys::{jbyteArray, jint};
use log::{debug, info, Level};

#[no_mangle]
pub extern "system" fn JNI_OnLoad() -> jint {
    {
        android_logger::init_once(Config::default().with_min_level(Level::Debug));
        log::info!("Qr Native library loaded");
    }

    jni::sys::JNI_VERSION_1_6
}


#[no_mangle]
pub extern "C" fn Java_io_nstudio_nativescript_plugins_qr_Qr_nativeGenerateQRWithBytes(
    env: JNIEnv,
    _: JClass,
    bytes: jbyteArray,
    bitmap_in: JObject,
    width: jint,
    height: jint,
    color: JString,
    background_color: JString,
) {
    if let Ok(val) = env.get_array_elements(bytes, ReleaseMode::NoCopyBack) {
        let length = val.size().unwrap_or(0) as usize;
        let buf = unsafe {
            std::slice::from_raw_parts(
                std::mem::transmute::<*mut i8, *mut u8>(val.as_ptr()),
                length,
            )
        };
        let color = env.get_string(color).unwrap_or(
            env.get_string(
                env.new_string("black").unwrap()
            ).unwrap()
        );
        let background_color = env.get_string(background_color).unwrap_or(
            env.get_string(
                env.new_string("white").unwrap()
            ).unwrap()
        );
        let qr = crate::common::generate_qr(buf, width as u32, height as u32, color.to_string_lossy().as_ref(), background_color.to_string_lossy().as_ref());

        let native_interface = env.get_native_interface();
        let bitmap = bitmap_in.into_inner();
        let mut bitmap_info = std::mem::MaybeUninit::uninit();

        unsafe {
            if super::bitmap::AndroidBitmap_getInfo(
                native_interface as _,
                bitmap,
                bitmap_info.as_mut_ptr(),
            ) < super::bitmap::ANDROID_BITMAP_RESULT_SUCCESS
            {
                debug!("Get Bitmap Info Failed");
                return;
            }
        }

        let bitmap_info = unsafe { bitmap_info.assume_init() };
        let mut pixels = std::ptr::null_mut() as *mut c_void;
        let pixels_ptr: *mut *mut c_void = &mut pixels;
        unsafe {
            if super::bitmap::AndroidBitmap_lockPixels(native_interface as _, bitmap, pixels_ptr)
                < super::bitmap::ANDROID_BITMAP_RESULT_SUCCESS
            {
                debug!("Get Bitmap Lock Failed");
            }
        }
        let length = (bitmap_info.height * bitmap_info.stride as u32) as usize;

        let slice: &mut [u8] =
            unsafe { std::slice::from_raw_parts_mut(pixels as *mut u8, length as usize) };

        slice.copy_from_slice(&qr);

        unsafe {
            if super::bitmap::AndroidBitmap_unlockPixels(native_interface as _, bitmap)
                < super::bitmap::ANDROID_BITMAP_RESULT_SUCCESS
            {
                debug!("Unlock Bitmap Failed");
            }
        }
    }
}