function countdown() {
    let nowDate = new Date();
    nowHours = nowDate.getHours();
    nowMin = nowDate.getMinutes();
    nowSec = nowDate.getSeconds();
    $('.hours').html(23 - nowHours);
    $('.min').html(59 - nowMin);
    $('.sec').html(59 - nowSec);
};

$(document).ready(() => {
    setInterval(() => {
        countdown();
    }, 1000);

    $('.owl-carousel').owlCarousel({
        dots: true,
        loop: true,
        margin: 32,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
                loop: false
            },
        },

    });

});