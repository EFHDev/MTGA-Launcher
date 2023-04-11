import { open } from '@tauri-apps/api/dialog';

async function Sel() {
    if(!localStorage.getItem("tarkovPath")) {
    const selected = await open({
        multiple: false,
        filters: [{
          name: 'Image',
          extensions: ['png', 'jpeg']
        }]
      });
      if (Array.isArray(selected)) {
        // user selected multiple files
      } else if (selected === null) {
        // user cancelled the selection
      } else {
        // user selected a single file
      }
    }
}


window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('login').addEventListener("click", () => Sel());
  });