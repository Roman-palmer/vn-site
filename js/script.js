// фиксы для ie9
if (!window.console) {
    console = {};
    console.log = function () {};
}

$(document).ready(function () {

    // оборачивание всех таблиц в блок
    $("table").wrap("<div class='tableWrap'></div>");

       $.firefly({  
         total : 50, // You can edit the number of flies
         on: '#wrapper' // id of div
      });

    $(".btn-pink").each(function () {
        var textBtn = $(this).text();
        $(this).attr("data-content-btn", textBtn);
    });

    $(window).scroll(function () {
        if (($(document).scrollTop() > 100)) {
            $('header').addClass('scroll-style');
        } else if ($('header').hasClass('scroll-style')) {
            $('header').removeClass('scroll-style');
        };
    });

    $('.to-top-button').bind('click.smoothscroll', function (e) {
        $('html, body').stop().animate({
            'scrollTop': (0)
        }, 700, 'swing');
    });

    $('#slider-tape').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-right"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-left"></i></button>'
    });


    //    $('#calendar').fullCalendar({
    //        googleCalendarApiKey: 'AIzaSyAaQHb6PAFWVB-2qlSn2YgSE_4IuWm_84M',
    //        events: {
    //            googleCalendarId: 'romapaskuda@gmail.com'
    //        }
    //    });
});