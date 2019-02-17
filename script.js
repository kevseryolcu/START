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

var circleImgs = ["./img/circle13.png", "./img/circle2.png"]
var circleImg = document.createElement("img");
circleImg.setAttribute("id", "circleImgs");
circle.appendChild(circleImg);
// circle.style.animation = "circle 5s linear infinite";
circle.style.marginLeft = '500px';
circle.addEventListener("click", onClickCircle);
window.addEventListener("load", onLoadCircle);

var circleIndexActual = Math.floor(Math.random() * 2);
var circleIndex = circleIndexActual ? 0 : 1;
circleImg.setAttribute("src", circleImgs[circleIndexActual]);

function onClickCircle() {
    console.log("circle clicked! ", circleIndex, circleIndexActual);
    if(circleIndex == 1) {
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
        animation();
        triangleIndex = Math.floor(Math.random() * 4);
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
        //kazandin ekrani
        //next chapter button
    }
    else {
        console.log("loser");
    }
},5000)

var count = 10, timer = setInterval(function() {
    document.getElementById("counter").innerHTML = --count;
    if(count == 1) {
        clearInterval(timer);
        console.log("hahahah");
        stopAnimation();
        //katbettin
    }
}, 1000);


// sound("./sounds/onclick.mp3", triangle, "onclickAudioTriangle");
// sound("./sounds/onclick.mp3", circle, "onclickAudioCircle");

// function sound(src, parent, id) {
//     console.log("sound");
//     var sound = document.createElement("audio");
//     sound.src = src;
//     sound.playbackRate = 3;
//     sound.type="audio/mp3"
//     sound.setAttribute("id", id);
//     sound.setAttribute("preload", "auto");
//     sound.setAttribute("controls", "none");
//     sound.muted = "muted";
//     sound.style.display = "none";
//     if(id === "onclickAudioTriangle") {
//         sound.addEventListener("click", playAudioTriangle);
//     }
//     else {
//         sound.addEventListener("click", playAudioCircle);
//     }
//     parent.appendChild(sound);
// }

    
// function playAudioTriangle() { 
//     var onclickAudio = document.getElementById("onclickAudioTriangle");
//     onclickAudio.play(); 
// } 
    
    
// function playAudioCircle() { 
//     var onclickAudio = document.getElementById("onclickAudioCircle");
//     onclickAudio.play(); 
// } 
