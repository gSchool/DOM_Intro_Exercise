var keys = [];

function randomEssential(){
   var essentialsLi = document.querySelectorAll("div#essentials > ul > li");
   console.log(essentialsLi);
   var max = essentialsLi.length -1;
   var random = Math.floor(Math.random() * (max - 0)) + 0;
   var randomLi = essentialsLi[random];
   var initialImage;
   var randomLiImage = randomLi.getAttribute("data-food");
   randomLi.classList.add("selected");
   initialImage = document.querySelector("div#essentials_preview > img");
   initialImage.setAttribute("src", "./images/"+ randomLiImage + ".jpeg");
}

window.onload = function(){
  var essentials = document.querySelectorAll("div#essentials > ul > li");
  for (var i = 0; i < essentials.length; i++) {
    essentials[i].addEventListener("click", swapImage);
  };
  randomEssential();
}

function changeGreeting (){
  var greeting = document.getElementById("greeting");
  greeting.innerHTML = "Hi, Planet Earth!";
}

function makeYellow(){
  var yellowList = document.querySelectorAll("div#essentials > ul > li");
  for (var i = 0; i < yellowList.length; i++) {
    yellowList[i].style.color = "#FFEB3B";
  };
}

function swapImage(){
  var removeSelected = document.querySelectorAll("div#essentials > ul > li");
  for (var i = 0; i < removeSelected.length; i++) {
    removeSelected[i].classList.remove("selected");
  };
  event.target.classList.add("selected");
  var food = event.target.getAttribute("data-food");
  var thingToChange = document.querySelector("div#essentials_preview > img");
  thingToChange.setAttribute("src", "./images/"+ food + ".jpeg");
}


function logKeys(k){
  var activeField = document.activeElement;
  keys[k.keyCode] = true;
  if (keys[13] && keys[91]){
    console.log(activeField);
    console.log(k);
    activeField.blur();
  }
}

function exitKeys (k){
  keys[k.keyCode] = false;
}

function createListItem(){
  var newLi = document.createElement("li");
  var list = document.querySelector("div#essentials > ul");
  newLi.setAttribute("contentEditable", "true");
  newLi.addEventListener("keydown", logKeys, false);
  newLi.addEventListener("keyup", exitKeys, false);
  list.appendChild(newLi);
  newLi.focus();
}


