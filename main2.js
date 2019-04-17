const keys = ["a", "s", "d", "f", "g", "h", "j", "k"];



function buttonId(key) {
  return document.getElementById('batton' + key);
}

function soundId(key) {
  return document.getElementById('audio' + key);
}

// натискання на клавіші кнопками клавіатури

document.addEventListener("keydown", (e)=> {
  function playByKeys(element, sound) {
    element.play();
    element.currentTime = 0;
    sound.click();
    sound.classList.add("press");
    window.addEventListener("keyup", () => sound.classList.remove("press"));
  };
  if (keys.includes(e.key)) {
    return playByKeys(soundId(e.key), buttonId(e.key));
  };
});

// натискання на клавіші мишею

document.addEventListener("mousedown", (f)=> {
    function playByKeys(element, sound) {
      element.play();
      element.currentTime = 0;
      sound.click();
      sound.classList.add("press");
      window.addEventListener("mouseup", () => sound.classList.remove("press"));
    }
    if (keys.includes(f.toElement.innerHTML)) {
        return playByKeys(soundId(f.toElement.innerHTML), buttonId(f.toElement.innerHTML))
    };
});

