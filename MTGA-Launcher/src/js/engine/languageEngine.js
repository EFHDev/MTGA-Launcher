import { launch } from "../translations/es";
document.addEventListener('DOMContentLoaded', function() {
    const language = localStorage.getItem('Language') || 'en';
  
    launch.forEach(item => {
      Object.entries(item).forEach(([key, value]) => {
        const translation = value[language];
        console.log(`${translation}`)
        const element = document.getElementById(key);
        if (element && translation) {
          if(!element.textContent) {
            element.innerHTML = translation;
          }
          element.textContent = `${translation}`;
          element.innerHTML = `${translation}`;
        }
      });
    });
  });