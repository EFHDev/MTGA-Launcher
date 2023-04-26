const tarkovPath = localStorage.getItem("tarkovPath");
const tarkovPathInput = document.getElementById("tarkovPath");
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");
const editionInput = document.getElementById("edition");

function loadSettings() {
    tarkovPathInput.value = tarkovPath;
    usernameInput.value = localStorage.getItem("Nickname");
    editionInput.value = localStorage.getItem("Edition");
}