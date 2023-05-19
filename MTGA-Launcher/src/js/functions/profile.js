import { server } from "../main";

export async function updateProfileData() {
    const SessionID = localStorage.getItem("SessionID")
    if (!SessionID) { // if sessionID is undefined
      ("Couldnt updateProfileData cause its sessionID is undefined lol") // log error
      return
    }
    const response = await fetch(`${server}/tauri/get/charcter`, { // fetch data
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        sessionID: SessionID
      })
    });
    const data = await response.json();
    const level = data.level;
    const experience = data.experience;
    localStorage.setItem("Level", level); // set level to localstorage
    localStorage.setItem("Experience", experience); // set experience to localstorage
  };
  