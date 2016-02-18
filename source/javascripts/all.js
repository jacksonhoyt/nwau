(function(){
  var nav = $('nav');

  //sticky navbar
  $(window).scroll(function(){
    var scrollPosition = $(this).scrollTop;
    if ( scrollPosition > 300) {
      nav.addClass('nav-scrolled');
    }
    else{
      nav.removeClass('nav-scrolled');
    };
  });

  //stick navbar take2
  $(document).ready(function() {
    var fromTop = $(window).scrollTop();
    var $nav = $("nav");
    //$clone = $nav.before($nav.clone().addClass("clone"));

    //$(window).on("scroll", function() {
    //  $(window).toggleClass("down", (fromTop > 300));
    //});
    var scrollPosition = $(this).scrollTop;
    if (scrollPosition > 300) {
      $(window).toggleClass("down", (fromTop > 300));
      $nav.addClass("clone");
    }
    else {
      $nav.removeClass("clone");
    }
  });

  //animated scroll to anchor tags
  $(document).ready(function() {
    $('a[href*=#]').each(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          && location.hostname == this.hostname
        && this.hash.replace(/#/,'') ) {
          var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
          var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
          if ($target) {
            var targetOffset = $target.offset().top;
            $(this).click(function() {
              $('html, body').animate({scrollTop: targetOffset}, 400);
              return false;
            });
          }
        }
    });
  });

  //header slideshow
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
  },  4500);
})();
