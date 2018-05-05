$('.js-menu').hide();
$('#fullpage').fullpage({
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection','fifthSection', 'sixSection'],
    menu: '.js-menu',
    dragAndMove: true,
    onLeave: function(index, nextIndex){
        $('.img-responsive.fadeIn').removeClass('animated');
        $('.rotateIn').removeClass('animated');
        if(nextIndex == 1){
            $('.js-menu').hide();
            // animated
            $('.c-footer__head, .c-footer__link').removeClass('animated');
        }
        else if(nextIndex == 6){
            $('.js-menu').hide();
            // animated
                $('.c-footer__link').addClass('animated slideInLeft');
                $('.c-footer__head').addClass('animated slideInRight');
        }
        else {
            $('.js-menu').show();
            $('.c-footer__head, .c-footer__link').removeClass('animated');
        }
    },
    afterLoad: function(anchorLink){
        //использование ссылки с привязкой
        console.log(anchorLink);
        $('[data-anchor="'+anchorLink+'"] .img-responsive.fadeIn').addClass('animated');
        $('[data-anchor="'+anchorLink+'"] .rotateIn').addClass('animated');
    }
});
    $('html').addClass('ENABLED');
    windowsHeight = $(window).height();