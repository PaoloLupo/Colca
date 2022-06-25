pub struct ColProps {
    col_width: f64,
    col_height: f64,
    col_cover : f64,
    fc: f64,
    fy: f64,
    phi: f64,
    live_load: f64,
    death_load: f64,
}

pub fn col_props(col_width: f64, col_height: f64, col_cover: f64, fc: f64, fy: f64, phi: f64, live_load: f64, death_load: f64) -> ColProps {
    ColProps {
        col_width,
        col_height,
        col_cover,
        fc,
        fy,
        phi,
        live_load,
        death_load,
    }
}