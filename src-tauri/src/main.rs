#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]


mod reinfsteel;
mod col_props;
mod axial_design;

use window_vibrancy::{apply_mica,apply_blur};
use tauri::Manager;

#[tauri::command]
fn area_colums(ancho: i32, altura: i32) -> i32 {
    ancho * altura
}

fn main() {
    let context = tauri::generate_context!();
    let window= tauri::Builder::default()
        .setup(|app| {
            let win= app.get_window("main").unwrap();
            #[cfg(target_os = "windows")]
            apply_mica(&win)
                .expect("Unsupported platform! 'apply_blur' is only supported on Windows");
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            area_colums,
            axial_design::axial_calculate_dims
        ])
        // .menu(tauri::Menu::os_default(&context.package_info().name))
        .run(context)
        .expect("error while running tauri application");

}
