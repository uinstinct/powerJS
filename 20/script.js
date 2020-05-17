var notepad = document.querySelector('.notepad');



navigator.getUserMedia({ audio: true},
	function () { // enabled callback
		let p = document.createElement('p');
		p.innerText='Try saying something!'
		notepad.appendChild(p);

		setTimeout(function () {
			p.remove();
		}, 5000)
	},
	function(){ // error callback
		let p = document.createElement('p');
		p.innerText='Oops! You have not enabled the mic option\nPlease refresh the page it still not working';
});

window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

var speech = new SpeechRecognition();
speech.lang='en-IN';

speech.addEventListener('result', speak=>{
	let p = document.createElement('p');
	p.innerText=speak.results[0][0].transcript;
	notepad.appendChild(p)
});

speech.addEventListener('end', speech.start)
// restarts again when the previous speech gets over

speech.start();	