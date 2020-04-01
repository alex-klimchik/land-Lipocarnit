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
});