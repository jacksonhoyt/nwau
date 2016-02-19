//= require jquery
//= require plugins/bootstrap

jQuery(function($){
  var $slideshow = $('header .slideshow'),
    $images = $slideshow.find('img');

  // Transition to next image
  $slideshow.on('transition', function(){
    var $current = $images.filter('.current'),
      $next = $current.next();

    // Cycle through to the beginning
    if ($next.length == 0) {
      $next = $images.first();
    }

    $current.removeClass('current');
    $next.addClass('current');
  });

  // Transition every 4.5 seconds
  setInterval(function(){
   $slideshow.trigger('transition');
  }, 4500);
});

jQuery(function() {
  $('a[href^=#]').each(function() {
    var $target = $(this.hash);

    if ($target.length) {
      var targetOffset = $target.offset().top;

      $(this).click(function(event) {
        $('html, body').animate({ scrollTop: targetOffset }, 400);
        event.preventDefault();
      });
    }
  });
});
