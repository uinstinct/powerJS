var keys = document.querySelectorAll('.key');

function playsound (event) {
	const audioSelected = document.querySelector("audio[data-key=\""+event.keyCode+"\"]");

	const keyPressed = document.querySelector(".key[data-key=\""+event.keyCode+"\"]");

	if (!audioSelected) {return;} //when there is a button which has no audio linked

	audioSelected.currentTime = 0; // so that when another key is pressed, the previous key stops

	audioSelected.play();

	keyPressed.classList.add('playing'); //css class with special effects when button is pressed
}


function removeTransition (event) {

	this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playsound);

// for(key in keys)
// {
// 	key.addEventListener('transitionend',removeTransition);
// }