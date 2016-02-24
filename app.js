console.log("Javascript is alive!");

window.onload = function() {
  document.querySelector('body').addEventListener('keypress', function(e)  {
    console.log(e)
  })
};