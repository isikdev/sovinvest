$('.info__content-slider').slick({
    Infinity: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear'
});
$(document).ready(function() {
    $("#navbar").sticky({ topSpacing: 0 });
});
let menu = $('.menu');
$('.btn').on("click", function() {
    menu.toggleClass('menu-active');
});