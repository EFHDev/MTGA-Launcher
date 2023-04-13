import { open, ask } from '@tauri-apps/api/dialog';
import { appConfigDir } from '@tauri-apps/api/path';
import * as fs from 'fs';

const response = await fetch('./levels.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({})
});
const responseBody = await response.json();
export const levels = responseBody;
console.log(responseBody);

const sessionID = localStorage.getItem("SessionID");
const serveraddress = "127.0.0.1:42069";
export const experience = localStorage.getItem("Experience");
export const userlevel = localStorage.getItem("level");

async function login() {
  if (!localStorage.getItem("Agreed")) {
    console.log("called login");
    const confirmed = await ask("By proceeding, you agree that we are not liable for any bans (Wont happen unless YOU fuck something up.) resulting from the use of this modifacation of Tarkov. Do you agree?", { title: 'Liability agreement', type: 'warning' });
    if (!confirmed) {
      alert("You did not agree. Game will not launch.")
    }
    else{
    localStorage.setItem("Agreed", true);
    launch();
  }
}
else {
  launch();
}
}

async function launch() {
  if (!localStorage.getItem("tarkovPath")) {
    console.log("tarkovPath isnt defined!!! Opening select dialog!")
    const selected = await open({
      multiple: false,
      filters: [{
        name: 'EscapeFromTarkov.exe',
        extensions: ['exe']
      }],
      title: 'Select Escape From Tarkov executable. NOT YOUR LIVE ONE.'
    });
    if (selected === null) {
      // user cancelled the selection
      return;
    }
    localStorage.setItem("tarkovPath", selected);
  }

  const tarkovPath = localStorage.getItem("tarkovPath");
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

  if (responseBody === "INVALID_SESSION") {
    alert("Invalid session! Please login again!");
    //accountcontrol.logout();
  } else if (responseBody === "TARKOV_PATH_INVALID") {
    alert("Your tarkov path is invalid! Please click launch again to re-set it!");
    localStorage.removeItem("tarkovPath");
  } else {
    window.minimi;
  }
}

const launchGameButton = document.getElementById("launch-game-button");

launchGameButton.addEventListener("click", function () {
  login();
});