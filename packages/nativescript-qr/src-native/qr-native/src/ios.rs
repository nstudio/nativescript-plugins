use std::ffi::CStr;
use std::os::raw::c_uint;

#[no_mangle]
pub extern "C" fn native_generate_qr_with_string(
    string: *const i8,
    bytes_in: *mut u8,
    bytes_in_size: usize,
    width: c_uint,
    height: c_uint,
    color: *const i8,
    background_color: *const i8,
) {
    let val = unsafe { CStr::from_ptr(string) };
    let color = unsafe { CStr::from_ptr(color) };
    let background_color = unsafe { CStr::from_ptr(background_color) };
    let qr = crate::common::generate_qr(val.to_bytes(), width, height, color.to_string_lossy().as_ref(), background_color.to_string_lossy().as_ref());
    let in_slice = unsafe { std::slice::from_raw_parts_mut(bytes_in, bytes_in_size) };
    in_slice.copy_from_slice(&qr);
}


#[no_mangle]
pub extern "C" fn native_generate_qr_with_bytes(
    bytes: *const u8,
    size: usize,
    bytes_in: *mut u8,
    bytes_in_size: usize,
    width: c_uint,
    height: c_uint,
    color: *const i8,
    background_color: *const i8,
) {
    let buf = unsafe { std::slice::from_raw_parts(bytes, size) };
    let color = unsafe { CStr::from_ptr(color) };
    let background_color = unsafe { CStr::from_ptr(background_color) };
    let qr = crate::common::generate_qr(buf, width, height, color.to_string_lossy().as_ref(), background_color.to_string_lossy().as_ref());
    let in_slice = unsafe { std::slice::from_raw_parts_mut(bytes_in, bytes_in_size) };
    in_slice.copy_from_slice(&qr);
}