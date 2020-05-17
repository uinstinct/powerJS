const nav = document.querySelector("#navbar");
var topOfNav = nav.offsetTop;
const mainbody = document.querySelector(".main")

function fixNav () {
	if (window.scrollY>=topOfNav) {
		document.body.classList.add("fixed-nav");
		mainbody.style.paddingTop = 2.5*nav.offsetHeight +"px";
	}
	else
	{
		document.body.classList.remove("fixed-nav");
	    mainbody.style.paddingTop = 0;
	}
}

window.addEventListener('scroll', fixNav)