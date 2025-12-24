/*----------------------------------- accordian -----------------------------------*/


// $(document).ready(function(){
//     $('.faq-item').click(function(){
//         $(this).slideToggle(500);
//     });
// });
$('.faq-item-title').on('click', function (e) {
    var element = $(this).parent('.faq-item');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('.faq-item-content').removeClass('open');
        element.find('.faq-item-content').slideUp(300, "swing");
    } else {
        element.addClass('open');
        element.children('.faq-item-content').slideDown(300, "swing");
        element.siblings('.faq-item').children('.faq-item-content').slideUp(300, "swing");
        element.siblings('.faq-item').removeClass('open');
        element.siblings('.faq-item').find('.faq-item-content').slideUp(300, "swing");
    }
});

/*----------------------------------- accordian -----------------------------------*/



$(document).ready(function(){
  $(window).scroll(function(){
      if(scrollY>100){
          $("header").addClass("sticky");
      } else {
          $("header").removeClass("sticky");
      }
  });

  // Mobile Menu Toggle
  $('.mobile-menu-toggle').on('click', function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
    $('body').toggleClass('menu-open');
  });

  // Close menu when clicking on a link
  $('.menu li a').on('click', function(){
    $('.mobile-menu-toggle').removeClass('active');
    $('.menu').removeClass('active');
    $('body').removeClass('menu-open');
  });

  // Close menu when clicking outside
  $(document).on('click', function(e){
    if(!$(e.target).closest('header').length) {
      $('.mobile-menu-toggle').removeClass('active');
      $('.menu').removeClass('active');
      $('body').removeClass('menu-open');
    }
  });
});



/*----------------------------------- testimonial -----------------------------------*/



$('.testimonial-slider').slick({
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerMode: false,
    dots: true,
    arrows: false,
    nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
    prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      },
  
    ]
  });

/*----------------------------------- testimonial -----------------------------------*/