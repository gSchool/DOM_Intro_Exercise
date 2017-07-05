// ---#1. Change the greeting from "Hello, There!" to "Hello, World!".---
var greeting = document.getElementById("greeting");
greeting.innerHTML = "heya"


// ---#2. Set the background color of each `<li>` to `yellow`.---
lis = document.getElementsByTagName("li")
for(var i=0; i<lis.length; i++){
  lis[i].style.backgroundColor = "yellow";
}

// ---#3. Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, and append the to the `#greeting` div.---
var img = document.createElement("img");
img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
var src = document.getElementById("greeting");
src.appendChild(img);

// ---#4. Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.---

var selector, elems, makeActive;
selector = "li";
elems = document.getElementsByTagName(selector);

makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('selected');
    this.classList.add('selected');
};

for (var i = 0; i < elems.length; i++){
    elems[i].addEventListener('mousedown', makeActive);
}
