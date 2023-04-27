import { toggleNavigation } from "./navigation";


document.addEventListener("keydown", function(event) {
    switch (event.key) {
    case "Tab" :
        event.preventDefault();
        toggleNavigation()
    case "F1" :
        window.href
    }
  });