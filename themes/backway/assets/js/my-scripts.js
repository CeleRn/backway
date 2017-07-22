import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    navText : ["",""],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        576:{
            items:2,
            nav:false
        },
        768:{
            items:3,
            nav:false,
        },
        992:{
            items:4,
            nav:false
        },
        1200:{
            items:5,
            nav:false
        },
    }
  });
});