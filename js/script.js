function waitForLoad(id, callback){
    var timer = setInterval(function(){
        if(document.getElementById(id)){
            clearInterval(timer);
            callback();
        }
    }, 100);
}

waitForLoad("modal", function(){
    console.log("load successful, you can proceed!!");

var modal = document.getElementById("modal");
var roomImg = document.getElementById("myImg");
var roomImg2 = document.getElementById("myImg2");
var roomImg3 = document.getElementById("myImg3");
var roomImg4 = document.getElementById("myImg4");
var roomImg5 = document.getElementById("myImg5");
var roomImg6 = document.getElementById("myImg6");
var roomImg7 = document.getElementById("myImg7");
var roomImg8 = document.getElementById("myImg8");
var roomImg9 = document.getElementById("myImg9");
var roomdesc1 = document.getElementById("room-desc-1");
var room = document.getElementById("img01");
var imgLayer1 = document.getElementById("layer1");
var imgLayer2 = document.getElementById("layer2");
var imgLayer3 = document.getElementById("layer3");
var imgLayer4 = document.getElementById("layer4");
var imgLayer5 = document.getElementById("layer5");
var imgLayer6 = document.getElementById("layer6");
var imgLayer7 = document.getElementById("layer7");
var imgLayer8 = document.getElementById("layer8");
var imgLayer9 = document.getElementById("layer9");

  imgLayer1.onclick = function(){
  modal.style.display = "block";
  room.src = roomImg.src;
  }
  imgLayer2.onclick = function(){
  modal.style.display = "block";
  room.src = roomImg2.src;
  }
  imgLayer3.onclick = function(){
  modal.style.display = "block";
  room.src = roomImg3.src;
  }
  imgLayer4.onclick = function(){
  modal.style.display = "block";
  room.src = roomImg4.src;
  }
  imgLayer5.onclick = function(){
  modal.style.display = "block";
  room.src = roomImg5.src;
  } 
  imgLayer6.onclick = function(){
  modal.style.display = "block";
  room.src = roomImg6.src;
  } 
  imgLayer7.onclick = function(){
  modal.style.display = "block";
  room.src = roomImg7.src;
  } 
  imgLayer8.onclick = function(){
  modal.style.display = "block";
  room.src = roomImg8.src;
  } 
  imgLayer9.onclick = function(){
  modal.style.display = "block";
  room.src = roomImg9.src;
  }  

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
});

/* Slideshow banner functionality on index.html */
/* This code was partially taken from W3 Schools' website examples */
var slideIndex = 0;
showSlidesAuto(slideIndex);

function showSlidesAuto(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlidesAuto,4000); 
}
