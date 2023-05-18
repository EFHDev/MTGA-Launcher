const animspeed = document.getElementById('animationspeed').value
import { appWindow } from '@tauri-apps/api/window'
import { LoadingAninm } from '../engine/animationEngine';
//if (animspeed < 0.1)
// {if 
//  (window.location.origin == "/") {
//    
// }
//}
document
  .getElementById('titlebar-minimize')
  .addEventListener('click', () => appWindow.minimize())
  
document
  .getElementById('titlebar-close')
  .addEventListener('click', () => appWindow.close())

  document
  .getElementById('titlebar-settings')
  .addEventListener('click', () => ToggleSettings())

  document.
  getElementById('animationspeed')
  .addEventListener('change', () => {
    document.getElementById('animationspeed').title = animspeed
    localStorage.setItem("animSpeed", animspeed)
  })
const language = localStorage.getItem("Language")
  document.
  getElementById('language-select')
  .addEventListener('change', () => {
    const langsel = document.getElementById('language-select').value
    localStorage.setItem("Language", langsel )
    window.location.reload(); 
    ToggleSettings() 
  })

  document.getElementById('animationspeed').value = localStorage.getItem("animSpeed")
  document.getElementById('animationspeed').title = localStorage.getItem("animSpeed")
  document.getElementById('theme-select').value = localStorage.getItem("theme")
  document.getElementById('language-select').value = localStorage.getItem("Language")



export async function ToggleSettings () {
  if (document.getElementById('loadingimg')) {
    // the loading element exists, do nothing
    return;
  }

  const animatespeed = localStorage.getItem("animSpeed")
    const settingsWindow = document.getElementById('settings-window');
    const settings = document.getElementById('titlebar-settings');
    settings.classList.toggle("active")
    if (!settingsWindow.classList.contains("active")) {
      ("its active.")
    await LoadingAninm("gear")
    setTimeout(() => {
      settingsWindow.classList.toggle("active")

    }, animatespeed * 2000 / 2);

    }
    else {settingsWindow.classList.toggle("active")}

}
