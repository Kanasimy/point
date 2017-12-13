var jQuery = require('jquery');
require('jquery.easing');
require('fullpage.js');
jQuery(function(){
    var $ = jQuery;
    $(document).ready(function() {
        $('.js-menu').hide();
        $('#fullpage').fullpage({
            anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection','fifthSection', 'sixSection'],
            menu: '.js-menu',
            dragAndMove: true,
            onLeave: function(anchorLink, index){
                var loadedSection = $(this);
        
                //using index
                if(index == 1){
                    $('.js-menu').hide();
                    // animated
                    $('.c-footer__head, .c-footer__link').removeClass('animated');
                }
                else if(index == 6){
                    $('.js-menu').hide();
                    // animated
                    $('.c-footer__head, .c-footer__link').addClass('animated');
                }
                else {
                    $('.js-menu').show();
                    $('.c-footer__head, .c-footer__link').removeClass('animated');
                }
            }
        });
            $('html').addClass('ENABLED');
            windowsHeight = $(window).height();
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
    });

});