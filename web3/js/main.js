$(document).ready(function(){
 
    $('.owl-carousel').owlCarousel({
      items:1,
      merge:true,
      loop:true,
      margin:10,
      video:true,
      lazyLoad:true,
      center:true,
      nav:true,
      responsive:{
        
        1000:{
            items:5
        },
          480:{
              items:2
          },
          600:{
              items:3
          }
          ,
          400:{
              items:2
          }
          ,
          300:{
              items:1
          }
      }
  
    
  })
  });
  
W