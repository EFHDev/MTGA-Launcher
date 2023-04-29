import { levels } from "./levels";
import { ask, open } from '@tauri-apps/api/dialog';
import { launch } from "./translations/es";
const level = levels

const sessionID = localStorage.getItem("SessionID");
const serveraddress = "127.0.0.1:42069";
const experience = localStorage.getItem("Experience");
const userlevel = localStorage.getItem("level");

var currentHour = new Date().getHours();
var nickname = localStorage.getItem("Nickname");
var firstChar = nickname.charAt(0);
var capitalizedFirstChar = firstChar.toUpperCase();
var capitalizedNickname = capitalizedFirstChar + nickname.slice(1);
const language = localStorage.getItem('Language') || 'en';
const goodmorning = launch[1].greetings.goodmorning[language];
const goodafternoon = launch[1].greetings.goodafternoon[language]; 
const goodevening = launch[1].greetings.goodevening[language];
var morningGreeting = `${goodmorning}, ${capitalizedNickname}!`;
var afternoonGreeting = `${goodafternoon}, ${capitalizedNickname}!`;
var eveningGreeting = `${goodevening}, ${capitalizedNickname}!`;

// Select greeting based on the current hour
var greeting = "";
if (currentHour >= 5 && currentHour < 12) {
  greeting = morningGreeting;
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = afternoonGreeting;
} else {
  greeting = eveningGreeting;
}
var greetingBox = document.getElementById("greeting-box");
greetingBox.innerText = greeting;

var progressBar = document.querySelector(".progress-bar");
const userLevel = +localStorage.getItem("Level")
const userExp = localStorage.getItem("Experience");
("sex " + level[0][9])
const nextLevelExp = level[0][userLevel + 1]

// Calculate the percent progress towards the next level
const percentProgress = (userExp / nextLevelExp) * 100;
(`${percentProgress}%`)

var progress = percentProgress; // 
progressBar.style.width = progress + "%";
const xpLabel = document.querySelector("#xp-needed");
xpLabel.innerText = `${userExp} XP / ${nextLevelExp} XP`;
const levelNow = document.querySelector("#levelnow");
levelNow.innerText = `${userLevel}`;
const levelNext = document.querySelector("#levelnext");
levelNext.innerText = `${userLevel + 1}`;

async function login() {
  if (!localStorage.getItem("Agreed")) {
    ("called login");
    const confirmed = await ask(`${launch[1].liabilitywarning[language]}`, { title: `${launch[1].liabilitywarningtitle[language]}`, type: 'warning' });
    if (!confirmed) {
      alert(`${launch[1].didnotagree[language]}`)
    }
    else{
    localStorage.setItem("Agreed", true);
    Launch();
    return;
  }
}
else {
  Launch();
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

async function Launch() {
  if (!localStorage.getItem("tarkovPath")) {
    ("tarkovPath isnt defined!!! Opening select dialog!")
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

const launchGameButton = document.getElementById("launchgamebutton");

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