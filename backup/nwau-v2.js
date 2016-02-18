var nav = $("#nav");

$(window).scroll(function(){
	if ( $(this).scrollTop() > 300) {
		nav.addClass("#nav-scrolled")
	}

	else{
		nav.removeClass("#nav-scrolled")
	}; 
});
$(document).ready(function() {
   nav.mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   nav.mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 