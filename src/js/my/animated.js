$('.c-footer__link').hover(
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

