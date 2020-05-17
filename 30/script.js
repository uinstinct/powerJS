'use strict';

var startbutton = document.querySelector('#startbutton');
var levelButtons = document.querySelectorAll('.panel button');
var message = document.querySelector('.message span');
var game = document.querySelector('.game');

var rabbits;
var grassElements;
var difficulty='intermediate';
var points = 0;
var preGrass;
var over=false;
var tinterval=500;


function startGame () {
	let grasses,mintime,maxtime,gap,columns;
	points=0;
	over=false;
	preGrass=0;
	tinterval=500;
	if (difficulty==='beginner')
	{
		grasses=4;
		mintime=800;
		maxtime=1200;
		gap='5rem';
		columns="1fr 1fr";
	}
	else if(difficulty==='intermediate')
	{
		grasses=6;
		mintime=300;
		maxtime=1000;
		gap='10rem';
		columns="1fr 1fr 1fr";
	}
	else if (difficulty==='advanced') 
	{
		grasses=8;
		mintime=200;
		maxtime=700;
		gap='13.5rem';
		columns="1fr 1fr 1fr 1fr";
	}
	
	message.innerText = 'Starting game on '+difficulty+' level';
	setGrasses(grasses,gap,columns);

	rabbits = document.querySelectorAll('.rabbit');
	rabbits.forEach(rabbit=>rabbit.addEventListener('click',smack));

	grassElements=document.querySelectorAll('.grass');

	setTimeout(()=>{
		clearInterval(interval);
		over=true;
		let grasses,mintime,maxtime,gap,columns=null;
	},30*1000);
	let interval=setInterval(()=>{
		if (!over)
			appear(maxtime, mintime, grasses);
	}, tinterval);
}

function appear (maxtime, mintime, grasses) {
	console.log(maxtime, mintime, grasses)
	tinterval = Math.round(Math.random()*(maxtime-mintime));
	let grass = Math.floor(Math.random()*grasses);
	if (preGrass===grass) {
		appear(maxtime, mintime, grasses);
	}
	grassElements[preGrass].classList.remove('up');
	preGrass=grass;
	grassElements[grass].classList.add('up');
}

function smack (e) {
	points++;
	message.innerText='GAME POINTS : '+points;
	this.parentNode.classList.remove('up');
}

function setGrasses (grasses, gap, columns) {
	game.style.gridColumnGap=gap;
	game.style.gridTemplateColumns=columns;
	game.innerHTML='';
	for(let i=1;i<=grasses;i++)
	{
		let div=document.createElement('div');
		div.classList.add('grass');
		div.innerHTML=`<div class='rabbit'></div>`
		game.appendChild(div);
	}
}


startbutton.addEventListener('click', startGame);

levelButtons.forEach(button=>{
	button.addEventListener('click',()=>
		{difficulty=button.name
			console.log(difficulty, button.name)
		});
})


message.innerText=
`Smack on a Rabbit to get a point
Select a difficulty level from the left and then click Start`;
setGrasses(6, '10rem', '1fr 1fr 1fr');