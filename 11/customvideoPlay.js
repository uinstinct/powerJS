// get your elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// propose your functions for the tasks

function pauseplay () {
	if (video.paused)
		video.play();
	else
		video.pause();
}

function updateButton () {
	let icon = this.paused?'►' : '❚ ❚';
	toggle.textContent=icon;
}

function skip (event) {
	video.currentTime+= parseFloat(this.dataset.skip)
}

function rangeUpdate () {
	console.log(this.value)
	video[this.name]=this.value;
}

function progressUpdate()
{
	let percent = (video.currentTime/video.duration)*100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e) {
	let scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
	video.currentTime = scrubTime; 
}

function fullscreen()
{
	if (player.requestFullscreen()) {
		player.requestFullscreen();
	}
}

//listen for the events
var mousedown = false;
window.addEventListener('mousedown',()=>mousedown=true);
window.addEventListener('mouseup', ()=>mousedown=false)

video.addEventListener('click', pauseplay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
window.addEventListener("keydown", (e)=>{
	console.log(e)
	if (e.code==='Space') {pauseplay();}
	else if(e.key==='f') {fullscreen();}
});

video.addEventListener('timeupdate', progressUpdate);

toggle.addEventListener('click', pauseplay);

skipButtons.forEach(function (skipButton) {
	skipButton.addEventListener('click', skip)
});

ranges.forEach(range=>range.addEventListener('change',rangeUpdate));
ranges.forEach(range=>range.addEventListener('mousemove',rangeUpdate));

progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e)=>mousedown&&scrub(e));