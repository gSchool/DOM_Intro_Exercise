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

makeActive = function (e) {
    for (var i = 0; i < elems.length; i++){
        elems[i].classList.remove('selected');
      }
    e.target.classList.add('selected');
};

for (var i = 0; i < elems.length; i++){
    elems[i].addEventListener('mousedown', makeActive);
}



// ---#5. Change the image to be the most recently clicked food item.---


var img1 = (document.getElementsByTagName("img"))

showImage = function (e) {
  // for (var j=0; j<elems.length; j++){
  //   // console.log(elems[j].innerHTML)
  // }
  // console.log(e.target.innerHTML)
  img1[1].src = "./images/"+ e.target.innerHTML + ".jpeg"
}

for (var i = 0; i < elems.length; i++){
    elems[i].addEventListener('mousedown', showImage);
}

// ---#6. When the gray div is moused over, it's removed from the DOM.---
var divs = (document.querySelectorAll("div"))

grayOut = function (e) {
  divs[4].hidden = true;
}

divs[4].addEventListener('mouseover', grayOut);

// ---#7. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.---

var getWide = function (e) {
  divs[5].style.width = "400px";
}
var getNarrow = function (e) {
  divs[5].style.width = "200px";
}


divs[5].addEventListener('mouseover', getWide);
divs[5].addEventListener('mouseout', getNarrow);

console.log(document.querySelectorAll('div'))


// ---#8. When the reset button is clicked - remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.---


var inputButton = document.querySelector("input")

var panic = function (e){
  for (var i = 0; i < elems.length; i++){
      elems[i].classList.remove('selected');
    }
  img1[1].src = "./images/panic.jpeg"
}


inputButton.addEventListener('click', panic);




// ---#9. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"---

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 48:
            alert('I HATE NUMBERZZZ!');
            break;
        case 49:
            alert('I HATE NUMBERZZZ!');
            break;
        case 50:
            alert('I HATE NUMBERZZZ!');
            break;
        case 51:
            alert('I HATE NUMBERZZZ!');
            break;
        case 52:
            alert('I HATE NUMBERZZZ!');
            break;
        case 53:
            alert('I HATE NUMBERZZZ!');
            break;
        case 54:
            alert('I HATE NUMBERZZZ!');
            break;
        case 55:
            alert('I HATE NUMBERZZZ!');
            break;
        case 56:
            alert('I HATE NUMBERZZZ!');
            break;
        case 57:
            alert('I HATE NUMBERZZZ!');
            break;
    }
};
