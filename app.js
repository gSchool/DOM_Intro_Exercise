var changeGreetingAndAddGif = function(){
  var greeting_div = document.getElementById("greeting");
  greeting_div.innerHTML = "Hello, World!";
  var img = document.createElement('img');
  img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  greeting_div.appendChild(img);
};

var styleListElements = function(){
  var list_items = document.querySelectorAll("div#essentials > ul > li");
  for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].style.backgroundColor = "yellow";
    list_items[i].addEventListener("click", selectItem);
  }
};

var selectItem = function(event){
  var list_items = document.querySelectorAll("div#essentials > ul > li");
  for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].classList.remove("selected");
  }
  this.classList.add("selected");
  document.querySelectorAll("img")[1].setAttribute("src","./images/" + this.innerHTML + ".jpeg");
};

var resetButtonHandler = function() {
  var list_items = document.querySelectorAll("li");
  for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].className = "";
  }
  document.querySelectorAll("img")[1].setAttribute("src","./images/panic.jpeg");
};

var doubleWidth = function() {
  this.style.width = '400px';
};

var resetWidth = function() {
  this.style.width = '200px';
};

var noDigits = function(e) {
  if (e.keyCode >= 48 && e.keyCode <= 57) {
    alert("I HATE NUMBERZZZ!");
  }
};

var idx = 0;

var konamiCheck = function(e) {
  var konamiCodeKeyCodes = [38,38,40,40,37,39,37,39,66,65];
  if (e.keyCode === konamiCodeKeyCodes[idx]) {
    idx++;
    if (idx === konamiCodeKeyCodes.length) {
      alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
      idx = 0;
    }
  } else {
    idx = 0;
  }
};

var initialize = function(){
  changeGreetingAndAddGif();
  styleListElements();
  document.querySelector("#reset").addEventListener("click",resetButtonHandler);
  document.querySelector("#ghosting").addEventListener("mouseover", function() { this.remove(); });
  document.querySelector("#resize").addEventListener("mouseenter", doubleWidth);
  document.querySelector("#resize").addEventListener("mouseleave", resetWidth);
  document.querySelector("body").addEventListener("keyup", noDigits);
  document.querySelector("body").addEventListener("keyup", konamiCheck);
};

window.onload=initialize;
