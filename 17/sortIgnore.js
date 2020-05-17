'use strict';
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(band) {
  return band.replace(/^(a |the |an )/i, '');
}

const sortedBands = bands.sort(function (band1 , band2) {
	if (strip(band1)>strip(band2)) {
		return 1;
	}
	else
	{
		return -1;
	}
})

sortedBands.forEach( function(band) {
	var item = document.createElement('li');//create an <li> </li>
	item.innerText=band; //store text inside this list item
	list.appendChild(item); //append this item to the list
	console.log(band)
});