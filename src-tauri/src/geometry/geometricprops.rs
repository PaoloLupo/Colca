pub enum ColGeoType {
    Rectangular,
    Circular,
    T,
}

fn new_col_geo_type(col_geo_type: &str) -> ColGeoType {
    match col_geo_type {
        "rectangular" => ColGeoType::Rectangular,
        "circular" => ColGeoType::Circular,
        "T" => ColGeoType::T,
        _ => panic!("Unknown col_geo_type: {}", col_geo_type),
    }
}
