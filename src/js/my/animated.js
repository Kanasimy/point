var wow = new scroll.WOW(
    {
        boxClass:     'js-scroll',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         true,
        scrollContainer: null
    }
);
wow.init();

$('.c-footer__link,.c-footer-small__link').hover(
        function() {
            $(this).find('.animated').addClass('shake'); // Добавляем класс bounce
        },
        function() {
            $(this).find('.animated').removeClass('shake'); // Убираем класс
        }
    );

$('.js-proekt').hover(
    function() {
    $(this).parents('.c-portfolio__body').addClass('hover');
},
    function() {
        $(this).parents('.c-portfolio__body').removeClass('hover');
}
);

$('.c-projects__item').hover(
    function() {
        $(this).find('.c-projects__hover').addClass('animated fadeInDown');
    },
    function() {
        var self = $(this);
        self.find('.c-projects__hover').addClass('fadeOutUp');
        function deleted() {
            self.find('.c-projects__hover').removeClass('animated fadeInDown fadeOutUp');
        };
        setTimeout(deleted, 500);
    }
);




