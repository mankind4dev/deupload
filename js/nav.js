$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
  });

  // Add click event listener to all links
  $(".link").click(function(){
    // Check if the navigation menu is active
    if ($(".navigation-menu").hasClass("active")) {
      // Close the navigation menu
      $(".navigation-menu").removeClass("active");
      // Reset the toggle button icon
      $(".menu-toggle-btn").removeClass("fa-times");
    }
  });