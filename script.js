var mainboard = document.getElementById("mainboard");
var win = 0;
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
    console.log("triangle clicked!", triangleIndex, triangleIndexActual);
    if(triangleIndex == 3) {
        triangleIndex = 0;
    }
    else {
        triangleIndex++;
    }
    triangleImg.setAttribute("src", triangleImgs[triangleIndex]);

    var audio= document.getElementById("audio");
    audio.playbackRate = 3;
    audio.play();
}

// circle
var circle = document.createElement("div");
circle.className = "circle";
mainboard.appendChild(circle);       

var circleImgs = ["./img/circle13.png", "./img/circle2.png", "./img/shapesmall2.png"]
var circleImg = document.createElement("img");
circleImg.setAttribute("id", "circleImgs");
circle.appendChild(circleImg);
// circle.style.animation = "circle 5s linear infinite";
circle.style.marginLeft = '500px';
circle.addEventListener("click", onClickCircle);
window.addEventListener("load", onLoadCircle);

var circleIndexActual = Math.floor(Math.random() * 3);
var circleIndex = Math.floor(Math.random() * 3);
circleImg.setAttribute("src", circleImgs[circleIndexActual]);

function onClickCircle() {
    console.log("circle clicked! ", circleIndex, circleIndexActual);
    if(circleIndex == 2) {
        circleIndex = 0;
    }
    else {
        circleIndex++;
    }
    circleImg.setAttribute("src", circleImgs[circleIndex]);

    var audio= document.getElementById("audio");
    audio.playbackRate = 3;
    audio.play();
}

function onLoadCircle() {
    setTimeout(function(){ 
        triangleImg.setAttribute("src", triangleImgs[triangleIndex]);
        circleImg.setAttribute("src", circleImgs[circleIndex]);
        animation();
    }, 3000);
}

function animation() {
    triangle.style.animation = "triangle 5s linear infinite";
    circle.style.animation = "circle 5s linear infinite";
}

function stopAnimation() {
    circle.style.animation = "";
    triangle.style.animation = "";
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
        win = 1;
        location.href="win.html";
    }
    else {
        console.log("loser");
    }
},5000)

var count = 30, timer = setInterval(function() {
    document.getElementById("counter").innerHTML = --count;
    if(count == 1) {
        clearInterval(timer);
        stopAnimation();
        location.href="gameover.html";
        
    }
}, 1000);
