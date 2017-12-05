$('.c-footer__link').hover(
        function() {
            $(this).find('.animated').addClass('shake'); // Добавляем класс bounce
        },
        function() {
            $(this).find('.animated').removeClass('shake'); // Убираем класс
        }
    )