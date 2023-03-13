$(document).ready(function() {
    $('#menu a').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1400);
    });
  });
