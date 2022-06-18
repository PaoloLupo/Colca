#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn area_colums(ancho: i32, altura: i32) -> i32 {
  ancho * altura
}

fn main() {
  let context = tauri::generate_context!();
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![area_colums])
    // .menu(tauri::Menu::os_default(&context.package_info().name))
    .run(context)
    .expect("error while running tauri application");
}
