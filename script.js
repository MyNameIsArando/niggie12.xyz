// JS File

	// CRT Effect Toggle 
	$(document).ready(function(){
		$(".crtToggle").click(function(){
			$("body").toggleClass("crt");
		});
	});

	// Date script thrown together by Demi x
	var d = new Date();
	var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

	document.getElementById("date").innerHTML = days[d.getDay()] + " " + d.getDate() + "/" + d.getMonth();

	// Lock Screen Unlock
	$(document).ready(function(){
		$("#unlock").click(function(){
			$("#welcomeLayer").slideToggle("slow");
			$("#mainContainer").delay(600).slideToggle("slow");
		});
	});


//////////// Phone Apps ////////////

// Welcome Open
$(document).ready(function(){
    $("#appWelcome").click(function(){
        $("#mainContainer").toggle("slow");
		$(".welcomeCover").slideToggle("slow");
		$(".appClose").toggle("scale, 1500");
    });
});
// Welcome Close
$(document).ready(function(){
    $("#appWelcome-close").click(function(){
        $("#mainContainer").toggle("slow");
		$(".welcomeCover").slideToggle("slow");
		$(".appClose").toggle("scale, 1500");
    });
});

// Go back to lock screen
$(document).ready(function(){
    $("#relock").click(function(){
		$(".jill").slideToggle("slow");
        $("#welcomeLayer").slideToggle("slow");
        $("#unlock").slideToggle("fast");
		$("#note").slideToggle("fast");
		$("#mainContainer").slideToggle("slow");
    });
});

//////////// Phone Apps ////////////

// Volume
document.getElementById("music").volume = 0.02;

// Play / Pause
var x = document.getElementById("music"); 
function playAudio() { 
	x.play(); 
} 
function pauseAudio() { 
	x.pause(); 
} 

// Modal

var modal = document.getElementById('popup');
var btn = document.getElementById("creditBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
	modal.classList.add("chachaslide");
}
span.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}