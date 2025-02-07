/**
* This file will content initialization of all materialize widgets
* Such as sidenav, slider, modals
* @author: @Kengza
*/

// initialization of sidenav

$(document).ready(function(){
    $('.sidenav').sidenav();
});

// Initialization of modals
$(document).ready(function() {
    $('.modal').modal({
        opacity: 0.17,
        dismissible: false
    });
});

// initialization of testimonials-slider using slick 
$(document).ready(function() {
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        dots: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1, 
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});
});