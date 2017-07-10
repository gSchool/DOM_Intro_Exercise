// console.log(document.querySelectorAll('li'))


// ---1. Change the greeting from "Hello, There!" to "Hello, World!".---

$("#greeting").text('Hey ya');
// $("#greeting").attr("offsetTop", '100px');


// ---2. Set the background color of each `<li>` to `yellow`.---

 $("li").css("background-color", "yellow")

// ---3. Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, and append the to the `#greeting` div.---

$("<img src='http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif'>").appendTo("#greeting");


// ---4. Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.---


var selector = $('li')
// console.log(imgSrc)
$(selector).on('click', function(){
    $(selector).removeClass('selected');
    $(this).addClass('selected');
    var clickImage = $(this).text();
    // console.log(clickImage)
    var imgSrc = "./images/" + clickImage + ".jpeg";
    // console.log(imgSrc)
    // var foodImg = $('img[alt="beer"]')
    // $(foodImg).text(imgSrc);
    $('img[alt="beer"]').attr("src",imgSrc)
    // console.log($('img[alt="beer"]'))

});


// ---5. Change the image to be the most recently clicked food item.---

//see above

// ---6. When the gray div is moused over, it's removed from the DOM.---
var ghost = $("#ghosting")
$(ghost).mouseover(function(){
  ghost.hide();
})

// ---7. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.---
var resize = $("#resize")
$(resize).mouseover(function(){
  resize.width(400);
})
$(resize).mouseout(function(){
  resize.width(200);
})


// ---8. When the reset button is clicked - remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.---

var reset = $("#reset");
// console.log(reset)
$(reset).on("click", function(){
  $('img[alt="beer"]').attr("src", "./images/panic.jpeg");
  $(selector).removeClass('selected');
})


// ---9. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"---


$(document).keydown(function(e){
  if(e.keyCode >= 48 && e.keyCode <= 57){
    alert("I hate numbers")
  }
})
