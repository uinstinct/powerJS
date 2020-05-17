let previoustick;

function checkmultiple (event) {
	let inBetween = false;
	if (event.shiftKey && this.checked) 
	{
		let temp=this; //we store this in temp because we are not using an arrow function
		checkboxes.forEach( function(checkbox,index) 
		{
			// console.log(this)
			console.log(checkbox)
			if (checkbox===temp || checkbox===previoustick) 
			{
				//this if clause will be encountered twice
				inBetween=!inBetween;
				console.log('start')
			}
			if (inBetween) 
			{	
				checkbox.checked=true;
			}
		});
	}
	previoustick=this;
	console.log(previoustick)
}

var inbox = document.querySelector(".inbox");
var checkboxes = inbox.querySelectorAll("input[type='checkbox']");

checkboxes.forEach( function(checkbox) {
	checkbox.addEventListener('click',checkmultiple);
});