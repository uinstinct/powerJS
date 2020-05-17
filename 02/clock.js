function setDate () {
	let current = new Date();
	console.log(current)
	let secs = current.getSeconds();
	let rotSecs = secs * 6;
	var secHand = document.querySelector(".secondhand");
	secHand.style.transform = `rotate(${rotSecs+90}deg)`;

	let mins=current.getMinutes();
	let rotMins = mins*6;
	var minHand = document.querySelector(".minutehand");
	minHand.style.transform = 'rotate('+(rotMins+90)+'deg)';

	let hours = current.getHours();
	let rotHours = hours*30;
	var hourHand = document.querySelector(".hourhand");
	hourHand.style.transform = `rotate(${rotHours+90}deg)`;



	// when hand completes one rotation, the transition is uneven	FIGURE IT OUT

}

setInterval(setDate, 1000);