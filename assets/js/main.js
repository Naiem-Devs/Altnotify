(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  AOS.init();
  const circle = new CircularProgressBar("pie");
    circle.initial();
 
})(jQuery);
