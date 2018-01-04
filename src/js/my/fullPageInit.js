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

                $('.c-footer__link').addClass('animated slideInLeft slideInUp');
                $('.c-footer__head').addClass('animated slideInRight slideInDown');


        }
        else {
            $('.js-menu').show();
            $('.c-footer__head, .c-footer__link').removeClass('animated');
        }
    }
});
    $('html').addClass('ENABLED');
    windowsHeight = $(window).height();