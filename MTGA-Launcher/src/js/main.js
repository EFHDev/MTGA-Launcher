export const server = localStorage.getItem('server')
if(server === null) { localStorage.setItem('server', 'https://127.0.0.1:42069'); } //default server IP.
await import ("./functions/titlebar")
await import ("./functions/navigation")
await import ("./functions/controls")
await import ("./functions/theme")
await import ("./engine/languageEngine")
import { translateSettings } from './engine/languageEngine'
import { translateSidebar } from './engine/languageEngine'

//  if (message === "") { return "" }
//  const msgBuffer = new TextEncoder().encode("MTGA__" + message);
//  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
//  const hashArray = Array.from(new Uint8Array(hashBuffer));
//  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//}
/* -------------------------------------------------------------------------- */
/*                      UPDATE PROFILE FUNCTION OBVIOUSLY                     */
/* -------------------------------------------------------------------------- */
import { updateProfileData } from './functions/profile'
setInterval(updateProfileData, 500000); // update profile data every 500000ms (5 minutes)

translateSettings()
translateSidebar()