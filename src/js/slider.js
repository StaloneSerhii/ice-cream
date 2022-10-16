$('.one-time').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('.autoplay').slick({
  slidesToShow: 1,
  // slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});
