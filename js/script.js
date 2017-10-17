
$(function () {
  //Smooth Scroll from https://css-tricks.com/snippets/jquery/smooth-scrolling/
  //Updated to account for fixed header height
  // Select all links with hashes
    $("a[href*='#']:not([href='#'])").click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        var headerHeight = $("header").height();
        var scrollToPosition = $(target).offset().top - headerHeight;
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: scrollToPosition}, 800);
          return false;
        }
      }
    });

    // Cart Counter
    var counter = 0;
    $(".add-to-cart").on('click', function(){
      counter++;
      $('.cart-counter').text(counter);
      $('.cart-counter').css("display", "block");
    });

    // Flickity 
    checkSize();
    // An attempt to throttle the checkSize function

    var checkingSize = false;

    $(window).resize(function(){
      if (!checkingSize){
        checkingSize = true;
        checkSize();
        checkingSize = false;
      }
    });

    // Sign up form
    $(".form-button").on('click', function(event){
      event.preventDefault();
      var sEmail = $('#subscribe').val();
      if (validateEmail(sEmail)) {
        alert('Thanks for subscribing.');
      }
      else {
        alert('Please enter a valid email address.');
      }
    })
});

  // Function to apply different jQuery depending on screen size.. not strictly necessary in this case, but a fun exercise
    function checkSize() {
      // Checks for a style that doesn't exist in the mobile section
      if ($(".mobile-hide").css("display") == "block") {
        // console.log("resize!")
        $('.main-carousel').flickity({
          cellAlign: 'left',
          pageDots: true,
          prevNextButtons: false,
          contain: true,
          wrapAround: true,
        });
      }
      else {
        // console.log("mobile!")
        $('.main-carousel').flickity({
          accessibility: true,
          cellAlign: 'center',
          contain: true,
          pageDots: true,
          prevNextButtons: false,
        });
      }
    }

    // Email Validation
    function validateEmail(sEmail) {
      var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (filter.test(sEmail)) {
        return true;
      }
      else {
        return false; 
      }
    };






  