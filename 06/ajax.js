const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = [];

axios.get(endpoint)
.then(function(response)
{
	return(response.data)
})
.then(function(cityObject)
{
	cities.push(...cityObject)
})
.catch()
{
	console.log("it did not work")
}
console.log(cities)

function findMatchers (word , cities) {
	return cities.filter(place=>{
		let regex=new RegExp(word,'gi' )
		return place.city.match(regex)||place.state.match(regex);
	});
}

function displayMatchers () {
	let matchedArray= findMatchers(this.value, cities)
	let displayText = matchedArray.map(place=>
	{
		let regex =new RegExp(this.value, 'gi')
		let highlight = "<span class='hl'>"+this.value+"</span>";
		let cityName = place.city.replace(regex, highlight )
		let stateName = place.state.replace(regex, highlight)
		return `<li>
					<span class='name'>${cityName} , ${stateName}</span>
				</li>`;
	}).join('');
	suggestions.innerHTML=displayText;
	let placenames = document.querySelectorAll('.name');
	placenames.forEach(place=>place.addEventListener('click', placename=>{
		searchInput.value= place.innerText;
	}))
}

var searchInput = document.querySelector('.search')
var suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('keyup', displayMatchers)
