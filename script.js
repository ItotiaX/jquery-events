
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

//keypress event
    $(document).on('keypress', function (e) {
        let keyPressed = String.fromCharCode(e.which).toLowerCase();
        window.location = "#" + keyPressed;
    });
});


