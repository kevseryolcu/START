var mainboard = document.getElementById("mainboard");
var square = document.createElement("div");
// var ctx= mainboard.getc
square.className = "square";
mainboard.appendChild(square);       


var squareImgs = ["./img/triangle.png", "./img/triangle90.png", "./img/triangle180.png", "./img/triangle270.png"]
var squareImg = document.createElement("img");
squareImg.setAttribute("id", "squareImgs");
squareImg.setAttribute("src", "./img/triangle.png");
square.appendChild(squareImg);
square.style.animation = "circle 10s linear infinite";

square.addEventListener("click", onClickSquare);

var squareIndexActual = 3;
var squareIndex = 0;
function onClickSquare() {
  console.log("square clicked!");
  if(squareIndex == 3) {
      squareIndex = 0;
  }
  else {
      squareIndex++;
  }
    squareImg.setAttribute("src", squareImgs[squareIndex]);
}


setInterval(function(){
    if(squareIndex === squareIndexActual){
        console.log("You win!");
        square.style.animation = "";
    }
    else {
        console.log("loser");
    }
},10000)
