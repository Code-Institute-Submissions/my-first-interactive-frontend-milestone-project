function waitForLoad(id, callback){
    var timer = setInterval(function(){
        if(document.getElementById(id)){
            clearInterval(timer);
            callback();
        }
    },100);
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
  };
  imgLayer2.onclick = function(){
    modal.style.display = "block";
    room.src = roomImg2.src;
  };
  imgLayer3.onclick = function(){
    modal.style.display = "block";
    room.src = roomImg3.src;
  };
  imgLayer4.onclick = function(){
    modal.style.display = "block";
    room.src = roomImg4.src;
  };
  imgLayer5.onclick = function(){
    modal.style.display = "block";
    room.src = roomImg5.src;
  };
  imgLayer6.onclick = function(){
    modal.style.display = "block";
    room.src = roomImg6.src;
  };
  imgLayer7.onclick = function(){
    modal.style.display = "block";
    room.src = roomImg7.src;
  };
  imgLayer8.onclick = function(){
    modal.style.display = "block";
    room.src = roomImg8.src;
  };
  imgLayer9.onclick = function(){
    modal.style.display = "block";
    room.src = roomImg9.src;
  };

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
});

// Slideshow banner functionality on index.html
// This code was partially taken from W3 Schools' website examples

waitForLoad("slideshow", function(){
    console.log("load successful, you can proceed!!");

var slideIndex = 0;

function showSlidesAuto(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlidesAuto, 4000);
}

showSlidesAuto(slideIndex);
});

/* Javascript code for the Event Signup Form - Modal 
   Note: Code is partially taken from https://www.queness.com/post/77/simple-jquery-modal-window-tutorial */
   $(document).ready(function() {	

	//select all the a tag with name equal to modal
	$('a[name=modal]').click(function(e) {
		//Cancel the link behavior
		e.preventDefault();
		//Get the A tag
		var id = $(this).attr('href');
	
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set height and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#mask').fadeTo(300, 0.3);
	
		//transition effect
        $(id).css("display", "block");
		$(id).fadeIn(300); 
	});
	
	//if close button is clicked
	$('.window .closewindow').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		$('#mask, .window').hide();
	});		
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});				
});