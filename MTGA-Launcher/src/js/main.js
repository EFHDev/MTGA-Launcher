import ("./functions/navigation")
import ("./functions/controls")
import ("./functions/titlebar")

//export async function sha256(message) {
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