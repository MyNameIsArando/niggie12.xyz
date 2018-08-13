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

	// Unlock script to "unlock" the page, by Demi x
	var timeoutId = 0,
  	holdTime = 1000,
	holdTrigger = $('.holdTrigger'),
	welcomeLayerV = document.getElementById("welcomeLayer"),
	mainContainer = document.getElementById("mainContainer");

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
		$("#mainContainer").slideToggle("slow");
	});
	// i think this jquery event should work for mobiles

	window.oncontextmenu = function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	};
	// script to prevent context menus popping up

	function menuToggle() {
		// TODO: Add fade effect here tbh fam -- DONE(?)
        $(".jill").slideToggle("slow");
        $("#welcomeLayer").slideToggle("slow");
        $("#unlock").slideToggle("fast");
		$("#note").slideToggle("fast");
		$("#mainContainer").slideToggle("slow");
		
	}



//////////// Phone Apps ////////////

// Welcome Open
$(document).ready(function(){
    $("#appWelcome").click(function(){
        $("#mainContainer").slideToggle("slow");
        $(".welcomeCover").slideToggle("slow");
    });
});
// Welcome Close
$(document).ready(function(){
    $("#appWelcome-close").click(function(){
        $("#mainContainer").slideToggle("slow");
        $(".welcomeCover").slideToggle("slow");
    });
});

// Dangeru Open
$(document).ready(function(){
    $("#appDangeru").click(function(){
        $("#mainContainer").slideToggle("slow");
		$(".dangerCover").slideToggle("slow");
    });
});
// Dangeru Close
$(document).ready(function(){
    $("#appDangeru-close").click(function(){
        $("#mainContainer").slideToggle("slow");
		$(".dangerCover").slideToggle("slow");
    });
});

// Gallery Open
$(document).ready(function(){
    $("#appLife").click(function(){
        $("#mainContainer").slideToggle("slow");
        $(".lifeCover").slideToggle("slow");
    });
});
// Gallery Close
$(document).ready(function(){
    $("#appLife-close").click(function(){
        $("#mainContainer").slideToggle("slow");
        $(".lifeCover").slideToggle("slow");
    });
});

// Augmented Eye Open
$(document).ready(function(){
    $("#appAugeye").click(function(){
        $("#mainContainer").slideToggle("slow");
        $(".augeyeCover").slideToggle("slow");
    });
});
// Augmented Eye Close
$(document).ready(function(){
    $("#appAugeye-close").click(function(){
        $("#mainContainer").slideToggle("slow");
        $(".augeyeCover").slideToggle("slow");
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


// TEMP MOBILE FIX
$(document).ready(function(){
    $("#note").click(function(){
		$(".jill").slideToggle("slow");
        $("#welcomeLayer").slideToggle("slow");
        $("#unlock").slideToggle("fast");
		$("#note").slideToggle("fast");
		$("#mainContainer").slideToggle("slow");
    });
});


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