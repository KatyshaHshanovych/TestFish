$(document).ready(function () {
   $('.single-item').slick({
       dots: true,
       arrows: true,
       adaptiveHeight: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       speed: 500,
       easing:'ease',
       infinite: false,
       swipe: true,
       //быстрое переключение по стрелочке
       waitForAnimate: false,
   });

   $('#copyright_year').text(new Date().getFullYear());
});



