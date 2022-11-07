$(document).ready(function(){

  $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();

      $('h1').css({
          'opacity': ((height - (scrollTop * 10)) / height)
      });

      $('header .logo').css({
          'opacity': 1 - ((height - (scrollTop * 10)) / height)
      });

      $('#main .hero h2').css({
          'opacity': 1 - ((height - (scrollTop * 7)) / height)
      });
  });

});
