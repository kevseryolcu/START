var mainboard = document.getElementById("mainboard");
//  triangle
var triangle = document.createElement("div");
triangle.className = "triangle";
mainboard.appendChild(triangle);       

var triangleImgs = ["./img/triangle.png", "./img/triangle90.png", "./img/triangle180.png", "./img/triangle270.png"]
var triangleImg = document.createElement("img");
triangleImg.setAttribute("id", "triangleImgs");
triangle.appendChild(triangleImg);
triangle.style.marginLeft = '500px';
// triangle.style.animation = "triangle 5s linear infinite";

triangle.addEventListener("click", onClicktriangle);

var triangleIndexActual = Math.floor(Math.random() * 4);
var triangleIndex = Math.floor(Math.random() * 4);
triangleImg.setAttribute("src", triangleImgs[triangleIndexActual]);
function onClicktriangle() {
  console.log("triangle clicked!");
  if(triangleIndex == 3) {
      triangleIndex = 0;
  }
  else {
      triangleIndex++;
  }
    triangleImg.setAttribute("src", triangleImgs[triangleIndex]);
}

// circle
var circle = document.createElement("div");
circle.className = "circle";
mainboard.appendChild(circle);       

var circleImgs = ["./img/circle13.png", "./img/circle2.png"]
var circleImg = document.createElement("img");
circleImg.setAttribute("id", "circleImgs");
circle.appendChild(circleImg);
// circle.style.animation = "circle 5s linear infinite";
circle.style.marginLeft = '500px';
circle.addEventListener("click", onClickcircle);
window.addEventListener("load", onLoadCircle);

var circleIndexActual = Math.floor(Math.random() * 2);
var circleIndex = circleIndexActual ? 0 : 1;
circleImg.setAttribute("src", circleImgs[circleIndexActual]);
function onClickcircle() {
  console.log("circle clicked!");
  if(circleIndex == 1) {
      circleIndex = 0;
  }
  else {
      circleIndex++;
  }
    circleImg.setAttribute("src", circleImgs[circleIndex]);
}

function onLoadCircle() {
    setTimeout(function(){ 
        animation();
    },5000);
}

function animation() {
    triangle.style.animation = "triangle 5s linear infinite";
    circle.style.animation = "circle 5s linear infinite";
}

// common
setInterval(function(){
    if(triangleIndex === triangleIndexActual){
        triangle.style.animation = "";
    }
    if(circleIndex === circleIndexActual){
        circle.style.animation = "";
    }

    if(triangleIndex === triangleIndexActual && circleIndex === circleIndexActual) {      
        console.log("You win!");
        //next chapter button
    }
    
    else {
        console.log("loser");
    }
},5000)
