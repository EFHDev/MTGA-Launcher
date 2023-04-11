import { open } from '@tauri-apps/api/dialog';
import { appConfigDir } from '@tauri-apps/api/path';
import * as fs from 'fs';
const sessionID = localStorage.getItem("SessionID")
const serveraddress = "127.0.0.1:42069"





async function login() {
if(!localStorage.getItem("tarkovPath")) {
  const selected = await open({
    multiple: false,
    filters: [{
      name: 'EscapeFromTarkov.exe',
      extensions: ['exe']
    }]
  });
   if (selected === null) {
    // user cancelled the selection
  } else {
    localStorage.setItem("tarkovPath", selected)
    const tarkovPath = localStorage.getItem("tarkovPath")
    const response = await fetch('https://127.0.0.1:42069/launcher/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tarkovPath: tarkovPath,
        sessionID: sessionID
      })
    });
    const responseBody = await response.json();
  }
}
else {
  const tarkovPath = localStorage.getItem("tarkovPath")
  const response = await fetch('https://127.0.0.1:42069/launcher/start', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      tarkovPath: tarkovPath,
      sessionID: sessionID
    })
  });
  const responseBody = await response.json();
  if(responseBody = "INVALID_SESSION"){
    alert("Invalid session! Please login again!")
    //accountcontrol.logout();
  }
  else if (responseBody = "TARKOV_PATH_INVALID"){
    alert("Your tarkov path is invalid! Please click launch again to re-set it!")
    localStorage.removeItem("tarkovPath")
  }
  else{
    window.minimi
  }
}
}
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('launch-game-button').addEventListener("click", () => login());
});