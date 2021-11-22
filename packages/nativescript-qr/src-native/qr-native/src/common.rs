use css_color_parser::Color;

const BLACK_COLOR: Color = Color { r: 0, g: 0, b: 0, a: 1.0 };
const WHITE_COLOR: Color = Color { r: 255, g: 255, b: 255, a: 1.0 };


pub fn generate_qr(bytes: &[u8],
                   width: u32,
                   height: u32,
                   color: &str,
                   background_color: &str) -> Vec<u8> {
    let qr = qrcode::QrCode::new(bytes);

    let color = color.parse::<css_color_parser::Color>().unwrap_or(
        BLACK_COLOR
    );

    let background_color = background_color.parse::<css_color_parser::Color>().unwrap_or(
        WHITE_COLOR
    );

    let dark_color = image::Rgba::from([
        color.r, color.g, color.b, (color.a * 255.) as u8
    ]);
    let light_color = image::Rgba::from([
        background_color.r, background_color.g, background_color.b, (background_color.a * 255.) as u8
    ]);

    let result = qr.unwrap()
        .render::<image::Rgba<u8>>()
        .dark_color(
            dark_color
        )
        .light_color(
            light_color
        )
        .build();


    let image = image::DynamicImage::ImageRgba8(result).resize(
        width, height, image::imageops::Nearest
    );

    image.to_bytes()
}