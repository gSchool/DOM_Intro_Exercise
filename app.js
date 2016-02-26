document.addEventListener('DOMContentLoaded', function() {

  var imgArray = ['./images/milk.jpeg','./images/honey.jpeg','./images/water.jpeg','./images/wine.jpeg','./images/beer.jpeg'];

  var greeting = document.getElementById("greeting");
  greeting.innerText = "Hello, World!";

  var li = document.querySelectorAll("li");
  for (var i = 0; i < li.length; i++) {  
    li[i].style.backgroundColor = "yellow";
  }

  var imgChange = document.querySelector("img");
  var img = document.createElement("img");
  img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  greeting.appendChild(img);


  var ul = document.getElementsByTagName("ul");
  function selected(event) {
    for (var j = 0; j < li.length; j++) {
      li[j].classList.remove("selected");
    }
    event.target.classList.add("selected");

    for (var k = 0; k < li.length; k++) {
      if (li[k].className === "selected") {
        imgChange.src = imgArray[k];
      }
    }
    event.target.classList.add("selected");
  }
  ul[0].addEventListener("click", selected);


  var ghosting = document.getElementById("ghosting");
  function spooky() {
    this.remove();
  }
  ghosting.addEventListener("mouseenter", spooky);

    //how to not hard-code width change?
  var resize = document.getElementById("resize");
  function bigger() {
    // var curr_width = parseInt(this.style.width);  this.style.width returns "" 
    // this.style.width = {curr_width * 2} + "px";
    this.style.width = "400px";
  }
  resize.addEventListener("mouseenter", bigger);

  function smaller() {
    // var curr_width = parseInt(this.style.width);
    // this.style.width = {curr_width / 2} + "px";
    this.style.width = "200px";
  }
  resize.addEventListener("mouseleave", smaller);

  var button = document.getElementById("reset");
  function reset() {
    for (var j = 0; j < li.length; j++) {
      li[j].classList.remove("selected");
      imgChange.src = './images/panic.jpeg';
    }
  }
  button.addEventListener("click", reset);

  window.addEventListener("keypress", function(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      alert("I HATE NUMBERZZZ!");
    }
  });
  
  var combo = [];
  window.addEventListener("keyup", function(event) {
    
    if (combo.length == 10) {
      combo.shift();
      combo.push(event.keyCode);
    } else combo.push(event.keyCode);

    var comboStr = "";
    for (var i = 0; i < combo.length; i++) {
      comboStr += combo[i];
    }
    if (comboStr === "38384040373937396665") alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
  });

});