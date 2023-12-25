$(document).ready(function(){

  $(".header__top-burger").click(function(e){
    e.preventDefault()
    $("#menu").css("display", "block")
  })

  $(".header__menu-close").click(function(e){
    e.preventDefault()
    $("#menu").css("display", "none")
  })

  $('.comment__slider').slick({
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    draggable: false,
    adaptiveHeight: true
  });

  $('.comment__prev').on('click', function(e){
    e.preventDefault()
    $('.comment__slider').slick('slickPrev')
  })
  $('.comment__next').on('click', function(e){
    e.preventDefault()
    $('.comment__slider').slick('slickNext')
  })

  $("a.header__scroll-link , .footer__gotop , .header__top-btn , .scroll__small-link").on("click", function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $('html, body').stop().animate({scrollTop: $(id).offset().top - 60}, 800);
});

  var mixer = mixitup('.gallery__body');
    $('.gallery__filter-btn').on('click', function(e) {
      $('.gallery__filter-btn').removeClass('gallery__filter-btn--active')
      $(this).addClass('gallery__filter-btn--active')
    })

})