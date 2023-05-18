import { toggleNavigation } from "./navigation";
import { ToggleSettings } from "./titlebar";


document.addEventListener("keydown", function(event) {
    switch (event.key) {
    case "Tab" :
        event.preventDefault();
        toggleNavigation()
        break;
    case "F1" :
        event.preventDefault();
        ToggleSettings()
        break;
    }
  });