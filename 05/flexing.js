var containers = document.querySelectorAll('.image-container');

function enlarge (e) {
	console.info(e);
	this.classList.toggle('open');
}

function translate(event){
	console.log(event.propertyName); 
	// the function is triggered for each property
	// here is triggered twice - one for flex and other for font-size
	if (event.propertyName.includes('flex'))
		this.classList.toggle('open-active');
}

containers.forEach(container=>container.addEventListener('click',enlarge));
containers.forEach(container=>container.addEventListener('transitionend',translate));