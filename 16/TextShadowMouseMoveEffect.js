var area = document.querySelector('.hero');
var text = area.querySelector('h1');

let shadowRange = 500; // till what range the shadow should go

function shadow (event) {
	let width = area.offsetWidth;
	let height = area.offsetHeight;

	let offX = event.offsetX;
	let offY = event.offsetY;

	if (this!==event.target) {
		offX+=event.target.offsetLeft;
		offY+=event.target.offsetTop;
	}

	let xShadow=(offX/width * shadowRange) - (shadowRange/2);
	let yShadow=(offY/width * shadowRange) - (shadowRange/2);

	let temp = `${xShadow}px ${yShadow}px red`;
	text.style.textShadow = temp;
}

area.addEventListener('mousemove', shadow);