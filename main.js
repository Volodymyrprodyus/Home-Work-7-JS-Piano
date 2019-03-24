const idPlayA = document.getElementById('audio-a');
const idPlayS = document.getElementById('audio-s');
const idPlayD = document.getElementById('audio-d');
const idPlayF = document.getElementById('audio-f');
const idPlayG = document.getElementById('audio-g');
const idPlayH = document.getElementById('audio-h');
const idPlayJ = document.getElementById('audio-j');
const idPlayK = document.getElementById('audio-k');


const buttonA = document.getElementById('batton-a');
const buttonS = document.getElementById('batton-s');
const buttonD = document.getElementById('batton-d');
const buttonF = document.getElementById('batton-f');
const buttonG = document.getElementById('batton-g');
const buttonH = document.getElementById('batton-h');
const buttonJ = document.getElementById('batton-j');
const buttonK = document.getElementById('batton-k');





// натискання на клавіші кнопками клавіатури





document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
        idPlayA.play();
        idPlayA.currentTime = 0;
        buttonA.click();
        console.log('pressed key A');
        buttonA.classList.add('press');
        window.addEventListener ("keyup", () => {buttonA.classList.remove ("press")});
    }
    else if (e.keyCode == 83) {
        idPlayS.play();
        idPlayS.currentTime = 0;
        buttonS.click();
        console.log('pressed key S');
        buttonS.classList.add('press');
        window.addEventListener ("keyup", () => {buttonS.classList.remove ("press")});
    }
    else if (e.keyCode == 68) {
        idPlayD.play();
        idPlayD.currentTime = 0;
        buttonD.click();
        console.log('pressed key D');
        buttonD.classList.add('press');
        window.addEventListener ("keyup", () => {buttonD.classList.remove ("press")});
    }
    else if (e.keyCode == 70) {
        idPlayF.play();
        idPlayF.currentTime = 0;
        buttonF.click();
        console.log('pressed key F');
        buttonF.classList.add('press');
        window.addEventListener ("keyup", () => {buttonF.classList.remove ("press")});
    }
    else if (e.keyCode == 71) {
        idPlayG.play();
        idPlayG.currentTime = 0;
        buttonG.click();
        console.log('pressed key G');
        buttonG.classList.add('press');
        window.addEventListener ("keyup", () => {buttonG.classList.remove ("press")});
    }
    else if (e.keyCode == 72) {
        idPlayH.play();
        idPlayH.currentTime = 0;
        buttonH.click();
        console.log('pressed key H');
        buttonH.classList.add('press');
        window.addEventListener ("keyup", () => {buttonH.classList.remove ("press")});
    }
    else if (e.keyCode == 74) {
        idPlayJ.play();
        idPlayJ.currentTime = 0;
        buttonJ.click();
        console.log('pressed key J');
        buttonJ.classList.add('press');
        window.addEventListener ("keyup", () => {buttonJ.classList.remove ("press")});
    }
    else if (e.keyCode == 75) {
        idPlayK.play();
        idPlayK.currentTime = 0;
        buttonK.click();
        console.log('pressed key K');
        buttonK.classList.add('press');
        window.addEventListener ("keyup", () => {buttonK.classList.remove ("press")});
    }
  });


// натискання на клавіші мишею

buttonA.addEventListener('click', (e) => {
    idPlayA.play();
    idPlayA.currentTime = 0
    event.preventDefault();
    console.log('e', e);
})

buttonS.addEventListener('click', () => {
    idPlayS.play();
    idPlayS.currentTime = 0
    event.preventDefault();
    console.log('e', e);
})

buttonD.addEventListener('click', () => {
    idPlayD.play();
    idPlayD.currentTime = 0
    event.preventDefault();
    console.log('e', e);
})

buttonF.addEventListener('click', () => {
    idPlayF.play();
    idPlayF.currentTime = 0
    event.preventDefault();
    console.log('e', e);
})

buttonG.addEventListener('click', () => {
    idPlayG.play();
    idPlayG.currentTime = 0
    event.preventDefault();
    console.log('e', e);
})

buttonH.addEventListener('click', () => {
    idPlayH.play();
    idPlayH.currentTime = 0
    event.preventDefault();
    console.log('e', e);
})

buttonJ.addEventListener('click', () => {
    idPlayJ.play();
    idPlayJ.currentTime = 0
    event.preventDefault();
    console.log('e', e);
})

buttonK.addEventListener('click', () => {
    idPlayK.play();
    idPlayK.currentTime = 0
    event.preventDefault();
    console.log('e', e);
})
 




