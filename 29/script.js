var timerseconds = document.querySelector('#timerseconds');
var timerminutes = document.querySelector('#timerminutes');
var over = document.querySelector('#over');
var lis = document.querySelectorAll('li');

var aud = new Audio('https://drive.google.com/uc?id=18cXpSi4DnanW_oHQxA7F0M_NiYgC1uuq');

var countdown;
timerseconds.innerText='--';
timerminutes.innerText='--:';

function displaySeconds(secs) {
	timerseconds.innerText=`${secs>=10?secs:'0'+secs}`;
	timerseconds.style.transform = 'scale(0)';
	timerseconds.style.color='white';
	--secs;
	if (secs<0)
		secs=59;
	setTimeout(function () {
		timerseconds.style.transform='scale(1)';
		timerseconds.style.color='black';
		timerseconds.innerText=`${secs>=10?secs:'0'+secs}`;
	}, 500)
}

function displayMinutes(mins) {
	timerminutes.innerText=mins+':';
}


function tout(secs){
	clearInterval(countdown);
	let tbegin = Date.now();
	let tend = Date.now()+secs*1000;
	tover(tend);
	countdown = setInterval(function () {
		tseconds=Math.round((tend-tbegin)/1000);
		tminutes=Math.floor(tseconds/60);
		// console.log(tseconds,tseconds/60);
		tseconds=tseconds%60;
		displaySeconds(tseconds);
		displayMinutes(tminutes);
		tend-=1000;
		if (tend===tbegin)
		{
			clearInterval(countdown);
			tover(0);
			aud.play();
		}
		// return does not stop the countdown
	}, 1000)
}

function tover (t) {
	const d = new Date(t);
	let h = d.getHours();
	let m = d.getMinutes();
	over.innerText='Gets over at';
	if (h>12) 
		over.innerText+=` ${h-12} : ${m} p.m.`;
	else
		over.innerText+=` ${h} : ${m} a.m.`;
	if (t===0)
		over.innerText='';
}

lis.forEach(function (li) {
	li.addEventListener('click', function () {
		tout(li.dataset.time);
	})
});

document.customForm.addEventListener('submit', function (e) {
	e.preventDefault();
	tout(this.minutes.value*60)
	this.reset();
})