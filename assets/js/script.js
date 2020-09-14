



//owl carousel for testimonials
$(document).ready(function() {
 
  $("#testimonial-carousel").owlCarousel({
      // Most important owl features
    items : 1,
    itemsCustom : false,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    startDragging : true,
    autoPlay: true,
    stopOnHover: true
  });
 
});

/*
$(document).ready(function() {	
	$('.bg-travel').eq(0).addClass('active').fadeIn(1000);
  setInterval('blockAnimate();', 5000);
});


function blockAnimate() {
  var length = $('.bg-travel').length - 1;
  $('.bg-travel').each(function(index) {
    if($(this).hasClass('active') && index != length) {
      $(this).removeClass('active').fadeOut(1000).next('.bg-travel').addClass('active').delay(500).fadeIn(1000);
      return false;
    } else if (index == length) {
      $(this).removeClass('active').fadeOut(1000);
      $('.bg-travel').eq(0).addClass('active').delay(500).fadeIn(1000);
      return false;
    }
  });
};

*/
