(function () {
    var menu = document.getElementById('menu'),
        slideMenu = document.getElementById('slide-menu'),
        close = document.getElementById('close');
    function OffScroll () {
            var winScrollTop = $(window).scrollTop();
            $(window).bind('scroll',function () {
                $(window).scrollTop(winScrollTop);
            });}


if(menu){
    menu.onclick = function () {
        $(slideMenu).addClass('animated fadeIn')
            .css('display','block');
        OffScroll ();
    }
    close.onclick = function () {
        $(close).parent().addClass('fadeOut')
            .css('display','none')
            .removeClass('animated fadeIn fadeOut');
        $(window).unbind('scroll');
    }
}
})();