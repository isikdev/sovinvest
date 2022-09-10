$('.info__content-slider').slick({
    Infinity: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    cssEase: 'linear'
});
$(document).ready(function() {
    $("#navbar").sticky({ topSpacing: 0 });
});