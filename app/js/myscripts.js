jQuery(document).ready(function($){

// top menu

  $(".sf-menu").superfish();
  $(".sf-menu").after("<div id='my-menu'>");
  $(".sf-menu").clone().appendTo("#my-menu");
  $("#my-menu").find("*").attr('style', '');
  $("#my-menu").find("ul").removeClass("sf-menu");
  $("#my-menu").mmenu({
    extensions : [ 'widescreen', 'theme-light', 'pageshadow', 'effect-menu-slide', 'effect-listitems-slide' ],
    navbar: {
      title: "Anton Krasov"
    }
  });
  var api = $("#my-menu").data("mmenu");
  api.bind("closed", function(){
    $(".toggle-mnu").removeClass("on");
  });

  $(".mobile-mnu").click(function(){
   var mmAPI = $("#my-menu").data("mmenu");
   mmAPI.open();
   var thiss = $(this).find(".toggle-mnu");
   thiss.toggleClass("on");
   $(".main-mnu").slideToggle();
        return false;
   });
// end top menu
// main big slider
var owls = $('.owlslider');
owls.owlCarousel({
  //animateIn: 'bounceIn',
  loop:true,
  autoplay: false,
  //autoplaySpeed: 5000,
  margin: 0,
  responsiveClass:true,
  items: 1,
  autoHeight: false,
  lazyLoad:true,
  center: true,
  dots: true,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      768:{
          items:1,
          nav:false,
      },
      1366:{
          items:1,
          nav:true,
          dots: true,
          //autoHeight: true,
      }
  },
  navText: '',
});
$('.owlC').owlCarousel({
    loop:true,
    margin: 25,
    responsiveClass:true,
    lazyLoad:true,
    autoplay: true,
    //center: true,
    nav:false,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
            center: true,
            //margin: 10,
        },
        768:{
            items:3,
            margin: 10,
        },
        1024:{
            items:3,
            margin: 15,
        },
        1366:{
            items:3,
            nav:false,        }
    }
  });
  // related post
  $('.owlRp').owlCarousel({
      loop:true,
      margin: 10,
      responsiveClass:true,
      lazyLoad:true,
      autoplay: true,
      center: true,
      nav:false,
      responsive:{
          0:{
              items:2,
          },
          480:{
              items:3,
              center: true,
              //margin: 10,
          },
          768:{
              items:3,
              margin: 10,
          },
          1024:{
              items:3,
              margin: 15,
          },
          1366:{
              items:3,
              nav:false,        }
      }
    });
  new WOW().init();
  // masonry
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    gutter: 15,
    percentPosition: true,
  });
});// end ready
