import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri supports es2021
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        no: resolve(__dirname, 'src/no.html'),
        titlebarhtml: resolve(__dirname, 'src/HTML-AddIns/titlebar.html'),
        lausettings: resolve(__dirname, 'src/HTML-AddIns/launcher-settings.html'),
        notdonehtml: resolve(__dirname, 'src/notdone.html'),
        registerhtml: resolve(__dirname, 'src/register.html'),
        sidebaraddin: resolve(__dirname, 'src/HTML-AddIns/sidebar.html'),
        animationEngine: resolve(__dirname, 'src/js/engine/animationEngine.js'),
        languageEngine: resolve(__dirname, 'src/js/engine/languageEngine.js'),
        controls: resolve(__dirname, 'src/js/functions/controls.js'),
        navigation: resolve(__dirname, 'src/js/functions/navigation.js'),
        profile: resolve(__dirname, 'src/js/functions/profile.js'),
        theme: resolve(__dirname, 'src/js/functions/theme.js'),
        titlebar: resolve(__dirname, 'src/js/functions/titlebar.js'),
        htmlimporter: resolve(__dirname, 'src/js/modules/defaulthtmlimports.js'),
        es: resolve(__dirname, 'src/js/translations/es.js'),
        assort: resolve(__dirname, 'src/js/assort.js'),
        debug: resolve(__dirname, 'src/js/debug.js'),
        styles: resolve(__dirname, 'src/assets/css/styles.css'),
        darkthemehc: resolve(__dirname, 'src/assets/css/styles-dark.css'),
        benderlight: resolve(__dirname, 'src/assets/bender.light.otf'),
        levels: resolve(__dirname, 'src/js/levels.js'),
        MTGA: resolve(__dirname, 'src/assets/MTGA.png'),
        vite: resolve(__dirname, 'src/assets/vite.svg'),
        logincss: resolve(__dirname, 'src/assets/css/login.css'),
        maincss: resolve(__dirname, 'src/assets/css/main.css'),
        notdone: resolve(__dirname, 'src/assets/css/notdone.css'),
        registercss: resolve(__dirname, 'src/assets/css/register.css'),
        launch: resolve(__dirname, 'src/js/launch.js'),
        loginjs: resolve(__dirname, 'src/js/login.js'),
        mainjs: resolve(__dirname, 'src/js/main.js'),
        registerjs: resolve(__dirname, 'src/js/register.js')

      },
    },
  },
})
  ,
);
