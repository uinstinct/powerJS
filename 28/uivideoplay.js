const speed = document.querySelector(".speed");
const speedBar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");


function setSpeed (event){
	
	const y = event.pageY - this.offsetTop; // offsetTop because the page can be scrolled down;
	const heightpercent = y/this.offsetHeight;
	console.log(heightpercent);
	speedBar.style.setProperty("height", Math.round(heightpercent*100)+'%');

	const [min,max]= [0.099,3.01]; //just because 1 and 3 will be visible
	const playbackRate = heightpercent*(max-min) +min;
	speedBar.innerText = playbackRate.toFixed(2)+'x';
	video.playbackRate=playbackRate;

}

speed.addEventListener('mousemove', setSpeed);