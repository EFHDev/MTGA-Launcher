const animspeed = localStorage.getItem("animSpeed")

class AnimationController {
    
}
export async function LoadingAninm(img) {

    const animatespeed = localStorage.getItem("animSpeed")
    if(animatespeed < 0.1) {return}
    const imageSrc = `../../../src-tauri/icons/radix-icons/${img}.svg`;
    (imageSrc);
    
    const loadingElem = document.createElement("div");
    loadingElem.style.position = "fixed";
    loadingElem.style.top = "50%";
    loadingElem.style.left = "50%";
    loadingElem.style.transform = "translate(-50%, -50%)";
    loadingElem.style.zIndex = "99999";
    
    loadingElem.innerHTML = `
    <img
      id="loadingimg"
      src="${imageSrc}"
      alt="loading animation"
      style="animation: loading ${animatespeed}s;"
    />
    <label for="loadingimg" id="loadingLabel">Loading</label>
  `;
    localStorage.getItem("animSpeed")
    localStorage.getItem("serverPath")
    localStorage.getItem("Theme")
    //localStorage.Parse("animSpeed")
    //localStorage.Parse("serverPath")
    //localStorage.Parse("Theme")
  
    document.body.appendChild(loadingElem);
        loadingElem.style.animationName = `enter  ${animatespeed * 1000 / 2}`;
  
    setTimeout(() => {
        loadingElem.style.animationName = `exit  ${animatespeed * 1000 / 2}`;
      setTimeout(() => {
        document.body.removeChild(loadingElem);
      }, animatespeed * 1000 / 2);
    }, animatespeed * 1000 / 2);
  }