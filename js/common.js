$(document).ready(function(){

  $('.burger').on('click', function() {
       $('.b-menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr();
            }
       });
       $('..b-menu_link').on('click', function() {
          $('.b-menu').slideUp();
       });
    });


  $('.slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow.png" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next.png" alt=""></button>',
  	responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: false,
        nextArrow: false,
        dots: true,
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true,
      }
    },
    ]
  });

  $(window).scroll(function() {
      if ($(this).scrollTop() > 1000) {
        $('.animate-br').addClass('brackets-w');
      } else {
        $('.animate-br').removeClass('brackets-w');
      }
    });

  $(window).scroll(function() {
      if ($(this).scrollTop() > 1000) {
        $('.animate-dv').addClass('division-w');
      } else {
        $('.animate-dv').removeClass('division-w');
      }
    });

  $(window).scroll(function() {
      if ($(this).scrollTop() > 1000) {
        $('.animate-sh').addClass('sharp-w');
      } else {
        $('.animate-sh').removeClass('sharp-w');
      }
    });

  $(window).scroll(function() {
      if ($(this).scrollTop() > 1000) {
        $('.animate-sl').addClass('slash-w');
      } else {
        $('.animate-sl').removeClass('slash-w');
      }
    });

  $(window).scroll(function() {
      if ($(this).scrollTop() > 1000) {
        $('.animate-bb').addClass('brackets-big-w');
      } else {
        $('.animate-bb').removeClass('brackets-big-w');
      }
    });
});