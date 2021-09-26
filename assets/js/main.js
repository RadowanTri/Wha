$(document).ready(function ($) {
  "use strict";
  $("[data-background").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });

  $(".banner-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    // navText:["<i class='fas fa-arrow-left'></i>",
    // "<i class='fas fa-arrow-right'></i>"],
    dots: true,

    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  
  $(".blog-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    items:1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  
  $(".find-nearest-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoHeight: true,
    items:1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  // $(".update-carousel").owlCarousel({
  //   loop: true,
  //   margin: 15,
  //   nav: true,
  //   navText:["<img src='assets/img/arrow-dropleft.png'>",
  //   "<img src='assets/img/arrow-dropright.png'>"],
  //   dots: false,

  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     1000: {
  //       items: 1
  //     }
  //   }
  // });
  

  if (window.innerWidth <= 575) {
    $(".service-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 3
        }
      }
    });
  }

  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-item'
      
    }
  });
  
  
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // $('.filter-button-group').on( 'click', 'button', function() {

  //   $('.filter-button-group button').removeClass('is-checked');
  //   $(this).addClass('is-checked');
  // });
    
    $('.popup-btn').magnificPopup({
      type : 'image',
    });

  
    // Magnific popup
  $('.videos-icon').magnificPopup({
    
    type:'iframe',
    iframe: {
    patterns: {
      youtube: {
        index: 'youtube.com/', 
    
        id: 'v=', 
        src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
      }
    
    },
    srcAction: 'iframe_src',
    }
    });
  
  
// $(".dots").click(function () {
//   $(".dots").removeClass("active");
 
//   $(this).addClass("active");   

// });


}(jQuery));
