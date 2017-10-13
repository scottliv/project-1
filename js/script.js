
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
    // Flickity 
    checkSize();
    $(window).resize(function(){
      checkSize();
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

  // Function to the css rule
    function checkSize() {
      if ($(".mobile-hide").css("display") == "block") {
        // alert("Not mobile!");
        console.log("resize!")
        $('.main-carousel').flickity({
          cellAlign: 'left',
          pageDots: true,
          prevNextButtons: false,
          contain: true,
          wrapAround: true,
        });
      }
      else {
        console.log("mobile!")
        $('.main-carousel').flickity({
          // options
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




  