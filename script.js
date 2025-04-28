
//mouse over event 
$(document).ready(function() {

    
    $("h1, h2").on("mouseover", function() {
      $(this).css("color", "blue"); // hover color
    });
  
    $("h1, h2").on("mouseout", function() {
      $(this).css("color", "black"); // original color
    });
  });

  //click event
  $(document).ready(function () {
    // Step 1: Hide all botanic names
    $('.botanic').hide();

    // Step 2: Click event to show namES
    $('.flower').click(function () {
        $('.botanic').hide(); 
        $(this).children('.botanic').show(); 
    });

//keypress events
    $(document).on('keypress', function (e) {
        let keyPressed = String.fromCharCode(e.which).toLowerCase();
        window.location = "#" + keyPressed;
    });
});

//hide signup info on load in
$(document).ready(function() {
	// Hide form
	$('#newsSignup').hide();

	// Signup click event
	$('#signuplink').click(function(e) {
		e.preventDefault(); // halt default behavior

		// Toggle the form visibility
		$('#newsSignup').slideToggle();

		// Change the + to - 
		var icon = $('#openclose');
		if (icon.text() === '+') {
			icon.text('-');
		} else {
			icon.text('+');
		}
	});
});


//slogan event
$(document).ready(function() {
  // Mouseover effect
  $("#slogan").mouseover(function() {
    // Fade out 
    $(this).fadeOut("normal", "linear", function() {
      // Callback function
      $(this).text("Hand Picked Just for You").fadeIn("slow", "swing");
    });
  });
  
  // Mouseout effect
  $("#slogan").mouseout(function() {
    // Fade out 
    $(this).fadeOut("fast", "swing", function() {
      $(this).text("The Power of Flowers").fadeIn("slow", "linear");
    });
  });
});


//rose event
$(document).ready(function(){
  $('#rose').animate({
    right: '100px',
    opacity: 1
  }, {
    duration: 2000,
    easing: 'swing'
  });
  

});

//signup event

$(document).ready(function(){
  $('#newsSignup').submit(function(e){
    e.preventDefault(); // stops form
    
    alert('thank you for registering');
    $('#newsSignup').hide();
    $('#newsSignup').fadeTo('slow', 0.3);
    
  });


});

