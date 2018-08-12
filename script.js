// JS File

	// CRT Effect Toggle 
	$(document).ready(function(){
		$(".crtToggle").click(function(){
			$("body").toggleClass("crt");
		});
	});

	/* Date script thrown together by Demi x */
	var d = new Date();
	var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

	document.getElementById("date").innerHTML = days[d.getDay()] + " " + d.getDate() + "/" + d.getMonth();

	/* Unlock script to hide cover div by Demi x */
	var timeoutId = 0,
  	holdTime = 1000,
	holdTrigger = $('.holdTrigger'),
	welcomeLayerV = document.getElementById("welcomeLayer"),
	mainContainer = document.getElementById("main-container");

	holdTrigger.mousedown(function() {
    	timeoutId = setTimeout(menuToggle, holdTime);
	}).bind('mouseup mouseleave', function() {
    	clearTimeout(timeoutId);
	});

	holdTrigger.on("taphold", function(){
		$(".jill").slideToggle("slow");
        $("#welcomeLayer").slideToggle("slow");
        $("#unlock").slideToggle("fast");
		$("#note").slideToggle("fast");
		$("#main-container").slideToggle("slow");
	});
	/* i think this jquery event should work for mobiles */

	window.oncontextmenu = function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	};
	/* script to prevent context menus popping up */

	function menuToggle() {
		/* TODO: Add fade effect here tbh fam -- DONE(?) */
        $(".jill").slideToggle("slow");
        $("#welcomeLayer").slideToggle("slow");
        $("#unlock").slideToggle("fast");
		$("#note").slideToggle("fast");
		$("#main-container").slideToggle("slow");
		
	}


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

// Not my code, https://codepen.io/blackjacques/pen/LLQKKJ
var player = document.getElementById('music'); // id for audio element
var duration; // Duration of audio clip
progressBar  = document.getElementById('progress-bar');
source       = document.getElementById('audioSource');

// Add a listener for the timeupdate event so we can update the progress bar
player.addEventListener('timeupdate', updateProgressBar, false);
			
// Update the progress bar
function updateProgressBar() {
// Work out how much of the media has played via the duration and currentTime parameters
var percentage = Math.floor((100 / player.duration) * player.currentTime);
// Update the progress bar's value
progressBar.value = percentage;
// Update the progress bar's text (for browsers that don't support the progress element)
progressBar.innerHTML = progressBar.title = percentage + '% played';
}
        
function resetPlayer() {
progressBar.value = 0;
//clear the current song
player.src = '';
// Move the media back to the start
player.currentTime = 0;
// Set the play/pause button to 'play'
changeButtonType(btnPlayPause, 'play');
}  


// Hide/Show
/*
$(document).ready(function(){
    $("#unlock").click(function(){
        $(".main-container").slideToggle("slow");
        $(".jill").slideToggle("slow");
        $(".landing-cover").slideToggle("slow");
        $("#unlock").slideToggle("fast");
        $("#note").slideToggle("fast");
    });
}); */