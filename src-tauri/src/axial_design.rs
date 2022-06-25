#[tauri::command]
pub fn axial_calculate_dims(l:f64, d:f64, phi:f64, fc:f64, q:f64, fy:f64) -> f64 {
    (l + d)/(phi*0.80*(fc*(1.0-q)+fy))
}