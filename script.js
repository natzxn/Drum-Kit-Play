function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //selects the audio file present with a pressed key

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //stores the .key element of the pressed key 
    //in the variable

    if(!audio) return; 
    //stoping the function if no audio

    audio.currentTime = 0; 
    //sets current time position to 0 sec

    audio.play();
    //play audio file

    key.classList.add('playing');
    //adds class "playing" to the key variable
};

function removeTransition(e) {
if(e.propertyName !== 'transform') return; 
//statement will return nothing if there is no any
//property with the property name of "transform"

this.classList.remove('playing');
//if there is "transform" property, "playing" class
//will be removed from the element
}

const keys = document.querySelectorAll('.key');
//we select all the keys

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//we start metod forEach, which invokes removeTransition()
//metod, after the 'transitionend' event fires when
//the key is pressed

window.addEventListener('keydown', playSound);
