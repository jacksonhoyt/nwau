var nav = $('.main-nav');
var num = 300; //number of pixels to scroll before freezing navbar
var headerLink = $('nav ul li');

//sticky navbar
$(window).scroll(function(){
  if ( $(this).scrollTop() > num) {
    nav.addClass('nav-scrolled');
  }

  else{
    nav.removeClass('nav-scrolled');
  }; 
});


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
  });

//arrow click to scroll
var arrow1 = $('#arrow1 img')
arrow1.click(function() {
    $('html, body').animate({
        scrollTop: $("#arrow2").offset().top
    }, 2000);
});

//scroll to anchors
var $root = $('html, body');
headerLink.click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

//navbar response to mouse hover
$(document).ready(function(){
  headerLink.hover(function(){
    $(this).css('font-size','26px')
  })

});

$(document).ready(function() {
  if (headerLink.mouseenter()) {
    $(this).css('font-size','26px')
  } 
  else{
    $(this).css('font-size','24px')
  };
});

headerLink.mouseenter(function(){
  $(this).css('font-size', '26px')
});
headerLink.mouseleave(function() {
  $(this).css('font-size','24px')
});

