var wow = new scroll.WOW(
    {
        boxClass:     'js-scroll',
        animateClass: 'js-animated',
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

$('svg').hover(
    function() {
    $(this).parents('.c-portfolio__body').addClass('hover');
},
    function() {
        $(this).parents('.c-portfolio__body').removeClass('hover');
}
);
//animated page project
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


function T(element, e, H) {
    var i = Math.pow(2 * e - 1, 3) * H * .125,
        n = (1 - Math.abs(Math.pow(2 * e - 1, 4))).toFixed(3);
    element.style.transform="translate3d(0, " + i.toFixed(3) + "px, 0)";
    element.style.opacity=n;
}
var Visible = function (target) {
    var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        },
        H = windowPosition.bottom-windowPosition.top,
        eH = targetPosition.bottom-targetPosition.top,
        eM = targetPosition.top + eH/2,
        e = 1-(eH/2+windowPosition.bottom-eM)/(H+eH/2);

    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom
       ) {
        T(target,e,H);
    }
};

var elements = document.querySelectorAll('.js-animated-head');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    Visible (element);
}
window.addEventListener('scroll', function() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        Visible (element);
    }
});










