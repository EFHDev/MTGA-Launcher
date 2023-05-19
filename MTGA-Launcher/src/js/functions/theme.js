const theme = localStorage.getItem('theme');
    setTheme(theme);
    document.getElementById('theme-select').addEventListener('change', async () => {
      const theme = document.getElementById('theme-select').value;
      await setTheme(theme);
      localStorage.setItem("theme", theme);
    });



async function setTheme(theme) {
    const stylesheet = document.querySelector('#theme-stylesheet');

    if (theme === 'darkHC') {
        stylesheet.href = '/src/assets/css/styles-dark.css';
        ("Theme set to DarkHC")
    } else if (theme === 'dark') {
        stylesheet.href = '/src/assets/css/styles-darkde.css';
        ("Theme set to DarkDefault")
    } else if (theme === 'mtgaclassic') {
        stylesheet.href = '/src/assets/css/styles.css';
        ("Theme set to MTGA Classic")
    }
    else if (theme === 'mtgamodern') {
        stylesheet.href = '/src/assets/css/better-css-test.css';
        ("Theme set to MTGA Modern")
    }
    else if(theme === 'Custom') {
        //do stuff
    }
    else {("Theme NOT FUCKING FOUND WHAT THE FUCK")}
}
window.addEventListener('storage', (event) => {
    if (event.key === 'theme') {
        setTheme(event.newValue);
    }
});