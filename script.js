var mainboard = document.getElementById("mainboard");
var square = document.createElement("div");
// var ctx= mainboard.getc
square.className = "square";
mainboard.appendChild(square);       

square.addEventListener("click", onClickSquare);

function onClickSquare() {
  console.log("square clicked!");
  
}

var squareImg = document.createElement("img");
squareImg.setAttribute("src", "./img/startLogo.png");
square.appendChild(squareImg);

