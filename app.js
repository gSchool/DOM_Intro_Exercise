window.onload = function() {

  // change greeting
  var greeting_div = document.getElementById("greeting");
  greeting_div.innerHTML = "Hello, World!";

  // set background on lis and add event listener
  var list_items = document.querySelectorAll("li");
  for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].style.backgroundColor = "yellow";
    list_items[i].addEventListener("click", selectItem);
  }

  // create and add image
  var img = document.createElement('img');
  img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  greeting_div.appendChild(img);

  // add more event listeners
  document.querySelector("#reset").addEventListener("click",resetButtonHandler);
  document.querySelector("#ghosting").addEventListener("mouseover", function() { this.remove(); });
  document.querySelector("#resize").addEventListener("mouseenter", doubleWidth);
  document.querySelector("#resize").addEventListener("mouseleave", resetWidth);
  document.querySelector("body").addEventListener("keyup", noDigits);

  // BONUS
  document.querySelector("body").addEventListener("keyup", konamiCheck);
};

function selectItem() {
  var curSelected = document.querySelector(".selected");
  if (curSelected) { curSelected.className = ""; }
  this.className = "selected";
  document.querySelectorAll("img")[1].src = "./images/" + this.innerHTML + ".jpeg";
}

function resetButtonHandler() {
  var curSelected = document.querySelector(".selected");
  if (curSelected) { curSelected.className = ""; }
  document.querySelectorAll("img")[1].setAttribute("src","./images/panic.jpeg");
}

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

// BONUS

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