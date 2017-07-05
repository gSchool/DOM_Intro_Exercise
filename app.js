console.log("Javascript is alive!");

console.log(document.getElementById("greeting"));

lis = document.getElementsByTagName("li")
console.log(lis);
for(var i=0; i<lis.length; i++){
  console.log(lis[i]);
  lis[i].style.backgroundColor = "yellow";
}
