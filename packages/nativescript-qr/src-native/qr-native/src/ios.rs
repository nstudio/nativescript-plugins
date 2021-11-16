use std::ffi::CStr;
use std::os::raw::c_uint;

#[no_mangle]
pub fn native_generate_qr_with_bytes(
    bytes: *const u8,
    size: usize,
    width: c_uint,
    height: c_uint,
    color: *const i8,
    background_color: *const i8,
){
    let buf = unsafe { std::slice::from_raw_parts(bytes, size) };
    let color = unsafe { CStr::from_ptr(color) };
    let background_color = unsafe { CStr::from_ptr(background_color) };
    let qr = crate::common::generate_qr(buf, width, height, color.to_string_lossy().as_ref(), background_color.to_string_lossy().as_ref());
}