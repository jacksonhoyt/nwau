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

//  //animated scroll to anchor tags
//  $(document).ready(function() {
//    $('a[href*=#]').each(function() {
//      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//          && location.hostname == this.hostname
//        && this.hash.replace(/#/,'') ) {
//          var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
//          var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
//          if ($target) {
//            var targetOffset = $target.offset().top;
//            $(this).click(function() {
//              $('html, body').animate({scrollTop: targetOffset}, 400);
//              return false;
//            });
//          }
//        }
//    });
//  });
