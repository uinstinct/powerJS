const itemsList = document.querySelector('.plates'); //ul list
const addItems = document.querySelector('.add-items'); //form
const items = JSON.parse(localStorage.getItem('items')) || []; //get the array from the local storage else result in an empty array
//it is parsed because it is in JSON string format


function addItem (event) {
	event.preventDefault(); //does let the browser redirect when the form is submitted
	let text = (this.querySelector('[name=item]')).value; //this here is the form element
	let temp = {
		text:text,
		done:false
	}
	items.push(temp);
	console.log(items);
	localStorage.setItem('items', JSON.stringify(items));
	listIt(temp.text);
	addItems.reset();
}

function listIt (item) {
	let li = document.createElement('li');
	li.innerText=item;
	itemsList.append(li);
}

window.onload=
	function () {
		itemsList.innerHTML="";
		items.forEach( (item)=> {
			listIt(item.text);
		});
	};

addItems.addEventListener('submit', addItem);

var clearButton = document.querySelector('.clearAll');
clearButton.addEventListener('click',function(){
	localStorage.clear(); //clears local storage
	location.reload(); //reloads the current page
})