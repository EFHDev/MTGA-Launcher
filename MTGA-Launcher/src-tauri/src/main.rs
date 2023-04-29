// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::{process::{Command, Stdio}, os::windows::process::CommandExt};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

//use std::process::{Command, Stdio};
//use tauri::api::dialog::FileDialogBuilder;
//#[tauri::command]
//fn start_server() -> Result<(), String> {
//    let path = match tauri::api::dialog::open().directory(true).show() {
//        Ok(res) => res,
//        Err(e) => return Err(format!("Error selecting directory: {}", e)),
//    };
//    let server_executable = format!("{}/path/to/server.js", env!("CARGO_MANIFEST_DIR")); // specify the path to your server executable here
//    let server_process = match Command::new("node")
//        .arg(server_executable)
//        .arg("--path")
//        .arg(path.to_string_lossy().into_owned())
//        .spawn()
//    {
//        Ok(p) => p,
//        Err(e) => return Err(format!("Error starting server: {}", e)),
//    };
//
//    // You can add additional error handling here if desired, such as checking the exit status of the process and returning an error message if it exits with an error code.
//
//    Ok(())
//}

use tauri::Manager;
use window_shadows::set_shadow;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            set_shadow(&window, true).expect("Unsupported platform!");
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}