$(document).ready(function(){
    $('.multiple-items').slick({
        
        infinite: true, // бесконечная прокрутка слайдов
        slidesToShow: 1, // показывать по 1 слайда
         slidesToScroll: 1, // прокручивать по 1 слайда за раз
         arrows: false, // не показывать стрелки
dots: true, // показывать точки индикаторы
dotsClass: 'slick-dots', // название класса для точек
swipe: true,
focusOnSelect:true,
mobileFirst: true,
speed: 500,
    });
}); 

