var target = document.getElementById("root");
var newElement = " <h1>here is the text<h1/>";

target.insertAdjacentHTML("beforeend", newElement);
target.style.background = "red";
target.classList.add("abc");

console.log(target.children[1]);
console.log(target);
