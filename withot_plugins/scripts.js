$(function () {
    $(window).scroll(function(){

        var section1 = $('.section-1').offset(),/* получаем текущее положение элемента относительно документа в виде объекта*/
            section2 = $('.section-2').offset(),
            section3 = $('.section-3').offset(),
            wScroll = $(this).scrollTop();/* положение полосы прокрутки */


        /* анимируем элементы */
        $('.section-1 h2').css({
            'transform': 'translate(0, ' + (wScroll - section1.top) / 1.1 + '%)'
        });
        $('.section-2 h2').css({
            'transform': 'rotate(' + (wScroll - section2.top) / 1.1 + 'deg)'
        });
        $('.section-3 h2').css({
            'transform': 'translate(0, ' + (wScroll - section3.top) / .9 + '%)'
        });


    })
})