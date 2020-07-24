$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    rows: 2,
    dots: true,
    nextArrow: $("#next"),
    prevArrow: $("#previous"),
    // autoplay: true,

    responsive: [
      {
        breakpoint: 1754,
        settings: {
          arrows: false,

          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1253,
        settings: {
          arrows: false,

          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,

          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
