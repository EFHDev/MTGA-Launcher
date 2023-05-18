import { launch, login, settings } from "../translations/es";
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