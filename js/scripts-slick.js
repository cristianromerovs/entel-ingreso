$(function() {
  $('.card-slick').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      infinite: true,
      responsive: [
          {
            breakpoint: 5000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
       e.target
       e.relatedTarget
       $('.card-slick').slick('setPosition');
   });
});