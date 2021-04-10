$(document).ready(function () {
    $('.menu li').mouseenter(function() {
        $(this).children('.dropdown').addClass('active');
    });

    $('.menu li').mouseleave(function() {
        $(this).children('.dropdown').removeClass('active');
    })
});