//Smooth Scroll from https://css-tricks.com/snippets/jquery/smooth-scrolling/
//Updated to account for fixed header height

// Select all links with hashes


$(function () {
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
});

