const triggers = document.querySelectorAll(".cool>li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function mouseenter (argument) {
  this.classList.add("trigger-enter");

  setTimeout(()=>this.classList.contains('trigger-enter') && this.classList.add("trigger-enter-active"), 125);
  //this statement will only be executed completely when the li has dropped down and the contents are not visible. The delay is given so that the background gets fully positioned before the menu pops out

  background.classList.add("open");

  let dropdown = this.querySelector(".dropdown");
  let dropdownCoords = dropdown.getBoundingClientRect();

  //do not place any element before navbar
  /* if you place any element before the navbar, then the background div might get repostioned by the height or width of that placed element

  you have to subtract the offset navbar's getBoundingClientRect
  you have to dropdownCoords.left-navCoords.left
  and dropdownCoords.top-navCoords.top

  This might also happen in case of SCROLLING the page
  */

  background.style.width = dropdownCoords.width+'px';
  background.style.height = dropdownCoords.height+'px';
  background.style.setProperty("transform",`translate(${dropdownCoords.left}px, ${dropdownCoords.top}px`);

}

function mouseleave (argument) {
  this.classList.remove("trigger-enter");
  this.classList.remove("trigger-enter-active");
  background.classList.remove("open");
}


triggers.forEach(trigger=>trigger.addEventListener('mouseenter', mouseenter));
triggers.forEach(trigger=>trigger.addEventListener('mouseleave', mouseleave))