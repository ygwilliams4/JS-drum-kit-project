
function playSound(e) {
        const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = this.document.querySelector(`.keys[data-key="${e.keyCode}"]`);
        if (!audio) return; //stop function from running
        audio.currentTime = 0; //rewind to the start
        audio.play();
        key.classList.add("playing");
}
    
function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip it if it's not transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".keys");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
