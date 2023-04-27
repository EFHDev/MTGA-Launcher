import { appWindow } from '@tauri-apps/api/window'
document
  .getElementById('titlebar-minimize')
  .addEventListener('click', () => appWindow.minimize())
document
  .getElementById('titlebar-close')
  .addEventListener('click', () => appWindow.close())

  document
  .getElementById('titlebar-settings')
  .addEventListener('click', () => ToggleSettings())

export function ToggleSettings () {
    const settingsWindow = document.getElementById('settings-window');
    const settings = document.getElementById('titlebar-settings');
    settingsWindow.classList.toggle("active")
    settings.classList.toggle("active")

}