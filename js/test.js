// smooth scroll script + custom addons
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      if (target.length) {
        $('html,body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
        
      // set active nav menu
      var $par = $(this).closest('li');
      $par.siblings().removeClass('active');
      $par.addClass('active');
      
      // close mobile nav on click
      $par.closest('div').removeClass('in');
      return false;
      }
    }
  });
});




    var $nav = $('nav');
    $nav.addClass('slide-in');
    $nav.addClass('navslide');

$(function() {
    var $nav = $('nav');
    $nav.removeClass('slide-in');
});
    