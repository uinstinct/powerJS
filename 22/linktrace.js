var linktags = document.querySelectorAll('a');
var highlighter = document.createElement('span');
highlighter.classList.add('highlight');
document.body.appendChild(highlighter);

console.log(linktags);

function highlightlink(){
	console.log(this.innerText);
	let linkCoords = this.getBoundingClientRect();
	console.log(linkCoords);
	let coords = {
		width : linkCoords.width,
		height : linkCoords.height,
		top : linkCoords.top+window.scrollY,
		//since on scrolling the highlighter gets a new absolute postion
		left : linkCoords.left+window.scrollX
	};

	console.log(coords)
	highlighter.style.width = `${coords.width}px`; //do not forget the pixels at the end
	highlighter.style.height = `${coords.height}px`;
	highlighter.style.transform = `translate(${coords.left}px,${coords.top}px)`;
	console.log(highlighter.style.transform)
}

linktags.forEach( function(linktag) {
	linktag.addEventListener('mouseenter', highlightlink);
});