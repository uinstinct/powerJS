'use strict';
var purevideo = document.querySelector('.purevideo');
var canvas = document.querySelector('.cambooth');
var ctx = canvas.getContext('2d');

var strap = document.querySelector('.strap');

var doGhastly = false;
var doRedEffect = false;
var doGreenScreen = false;

navigator.mediaDevices.getUserMedia({video:true, audio:false})
	.then(mediastream=>{
		console.log(mediastream);

		purevideo.srcObject = mediastream;
		purevideo.play();
	})
	.catch(console.log('Webcam is needed to display the canvas'));


function canvasprint () {
	const vwidth=purevideo.videoWidth;
	const vheight=purevideo.videoHeight;
	canvas.width=vwidth;
	canvas.height=vheight;
	setInterval(function () {
		ctx.drawImage(purevideo, 0, 0, vwidth, vheight);
		let pixels = ctx.getImageData(0, 0, vwidth, vheight);
		if (doGhastly)
			pixels = applyGhastly(pixels);
		if (doRedEffect)
			pixels = applyRedEffect(pixels);
		if (doGreenScreen)
			pixels = applyGreenScreen(pixels);
		ctx.putImageData(pixels, 0, 0);
	}, 20);
}

// apply functions
function applyRedEffect(pixels){
	for(let i=0; i<pixels.data.length; i+=4){
		pixels.data[i]+=100; // red pixel
		pixels.data[i+1]/=2; // green pixel
		pixels.data[i+2]*=2; // blue pixel
	}
	return pixels;
}
function applyGhastly (pixels) {
	for(let i=0;i<pixels.data.length;i+=4){
		pixels.data[i]=pixels.data[i+500];
		pixels.data[i+1]=pixels.data[i-1000];
		pixels.data[i+2]=pixels.data[i+250];
	}
	return pixels;
}
function applyGreenScreen (pixels) {
	let levels = {};
	document.querySelectorAll('.controlpanel input')
		.forEach(input=>levels[input.name]=input.value);
		for(let i=0;i<pixels.data.length;i+=4){
			const red = pixels.data[i];
			const blue = pixels.data[i+1];
			const green = pixels.data[i+2];
			const alpha = pixels.data[i+3];
		if (  red<levels.rmax
			&& red>levels.rmin
			&& blue<levels.bmax
			&& blue>levels.bmin
			&& green<levels.gmax
			&& green>levels.gmin)
			{
				pixels.data[i+3]=0;
			}
			// debugger;
		}
		return pixels;
}

function snapPhoto () {
	const photo = canvas.toDataURL('image/jpeg');
	const link = document.createElement('a');
	link.href=photo;

	link.setAttribute('download', 'camboothSnap.jpeg');
	link.innerHTML=`<img src="${photo}" alt=camboothSnap>`;
	strap.insertBefore(link, strap.firstChild);

}

purevideo.addEventListener('canplay', canvasprint);

var ghastly = document.querySelector('#ghastly');
ghastly.addEventListener('click', ()=>doGhastly=!doGhastly);

var redeffect = document.querySelector('#redeffect');
redeffect.addEventListener('click', ()=>doRedEffect=!doRedEffect);

var greenscreen = document.querySelector('#greenscreen');
greenscreen.addEventListener('click', ()=>doGreenScreen=!doGreenScreen);


var takephoto = document.querySelector('#takephoto');
takephoto.addEventListener('click', snapPhoto);