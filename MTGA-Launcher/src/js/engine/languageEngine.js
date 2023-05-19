import { launch, login, settings, sidebar } from "../translations/es";
import { fourofour } from "../translations/es";
const yes = [

]

const entrys = fourofour && launch;
document.addEventListener('DOMContentLoaded', function () {
  const language = localStorage.getItem('Language') || 'en'; //Default to english

  launch.forEach(item => {
    Object.entries(item).forEach(([key, value]) => {
      const translation = value[language];
      console.log(`${translation}`)
      const element = document.getElementById(key);
      if (element && translation) {
        if (!element.textContent || !element.title) {
          element.innerHTML = translation;
        }
        if (!element.title) {
          element.textContent = `${translation}`;
          element.innerHTML = `${translation}`;
        }
        if (element.title) {
          element.title = translation;
        }
      }
    });
  });

  fourofour.forEach(item => {
    Object.entries(item).forEach(([key, value]) => {
      const translation = value[language];
      console.log(`${translation}`)
      const element = document.getElementById(key);
      if (element && translation) {
        if (!element.textContent || !element.title) {
          element.innerHTML = translation;
        }
        if (!element.title) {
          element.textContent = `${translation}`;
          element.innerHTML = `${translation}`;
        }
        if (element.title) {
          element.title = translation;
        }
      }
    });
    login.forEach(item => {
      Object.entries(item).forEach(([key, value]) => {
        const translation = value[language];
        console.log(`${translation}`)
        const element = document.getElementById(key);
        if (element && translation) {
          if (!element.textContent || !element.title) {
            element.innerHTML = translation;
          }
          if (!element.title) {
            element.textContent = `${translation}`;
            element.innerHTML = `${translation}`;
          }
          if (element.title) {
            element.title = translation;          
          }
          else {
            console.log('Something went wrong.')
          }
        }
      })
  })})})

 export function translateSettings () {
  const language = localStorage.getItem('Language') || 'en'; //Default to english

    settings.forEach(item => {
      Object.entries(item).forEach(([key, value]) => {
        const translation = value[language];
        console.log(`${translation}`)
        const element = document.getElementById(key);
        if (element && translation) {
          if (!element.textContent || !element.title) {
            element.innerHTML = translation;
          }
          if (!element.title) {
            element.textContent = `${translation}`;
            element.innerHTML = `${translation}`;
          }
          if (element.title) {
            element.title = translation;
          }
        }
      })
    })
  }

  export function translateSidebar () {
    const language = localStorage.getItem('Language') || 'en'; //Default to english
  
      sidebar.forEach(item => {
        Object.entries(item).forEach(([key, value]) => {
          switch (key) {
            case "homeButton":
              const translation = value[language];
              document.getElementById("homeButton").title = translation;
          case "profileButton":
            const translation2 = value[language];
            document.getElementById("profileButton").title = translation2;
          case "settingssidebar":
            const translation3 = value[language];
            document.getElementById("settingssidebar").title = translation3;
          case "configbtn":
            const translation4 = value[language];
            document.getElementById("configbtn").title = translation4;
          case "switchprofile":
            const translation5 = value[language];
            document.getElementById("switchprofile").title = translation5;
            case "closenav":
              const translation6 = value[language];
              document.getElementById("closenav").title = translation6;
        }})})}