import { levels } from "./levels";
import { ask, open } from '@tauri-apps/api/dialog';
export const level = levels

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
    return;
  }
}
else {
  launch();
  return
}
}

async function restart() {
  const response = await fetch('https://127.0.0.1:42069/tauri/server/restart', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
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
  const response = await fetch('https://127.0.0.1:42069/tauri/launcher/start', {
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

if (launchGameButton.dataset.listener !== 'true') {
  launchGameButton.dataset.listener = 'true';
  launchGameButton.addEventListener("click", function () {
    login();
  });
}
//const RestartServer = document.getElementById("restart-server-button");
//
//if (RestartServer.dataset.listener !== 'true') {
//  RestartServer.dataset.listener = 'true';
//  RestartServer.addEventListener("click", function () {
//    restart();
//  });
//}