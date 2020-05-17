'use strict';
const speaker = new SpeechSynthesisUtterance();
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
speaker.text=document.querySelector('[name="text"]').value

var voices = []; //the array which contains the voices

function populateVoices () {
	voices=this.getVoices();
	voicesDropdown.innerHTML=voices
		.map(voice=>`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
		.join('');
}

speechSynthesis.addEventListener('voiceschanged',populateVoices);

voicesDropdown.addEventListener('change',()=>{
	speaker.voice=voices.find(voice=>voice.name===this.value);
});

options.forEach((option)=>option.addEventListener('change', changeInOptions))

function changeInOptions() {
	console.log(this.name, this.value);
	speaker[this.name]=this.value;
}

speakButton.addEventListener('click', ()=>{
	speechSynthesis.cancel(); //so that the new speech does not overlap
	speechSynthesis.speak(speaker);
}); // the speaker has the message we want to hear

stopButton.addEventListener('click', ()=>speechSynthesis.cancel());