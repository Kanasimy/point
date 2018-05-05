var jQuery = require('jquery'),
    scroll= require('wowjs'),
    Typed = require('typed.js'),
    Jelly = require('jelly.js');

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
        
        $('.js-proekt').hover(
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
         //animated page about
        if (typeof TimelineMax == 'function') {
            var paths = $('path:not(defs path)');
            paths.each(function (i, e) {
                e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
            });
            var tl = new TimelineMax();
            tl.add([
                TweenLite.to(paths.eq(0), 1, {strokeDashoffset: 0, delay: 1}),
                TweenLite.to(paths.eq(1), 1, {strokeDashoffset: 0, delay: 0.5}),
                TweenLite.to(paths.eq(2), 1, {strokeDashoffset: 0, delay: 1})
            ]);
        }
        
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
        // А также запустим функцию сразу. А то вдруг, элемент изначально видно
            Visible (element);
        }
        window.addEventListener('scroll', function() {
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                Visible (element);
            }
        });
        function typedForm(){
        var input = document.querySelectorAll('.c-brif__input'),
            buffer = [],
            max = document.querySelectorAll('.c-brif__form')[0].clientWidth;
        
        for (var i = 0; input.length > i; i++) {
            buffer[i] = document.createElement('div');
            buffer[i].className = "c-brif__buffer";
            buffer[i].style.maxWidth = max+'px';
            //вставляем скрытый div.c-brif__buffer
            input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);
        
            input[i].oninput = function(event) {
                hundlerInput(event);
            }
        };
        };
        function hundlerInput(event){
        
            var self = event.target,
                bufferItem = self.nextElementSibling;
        
            if(event.target.id=='targetInput'){
               //debugger;
            }
        
            bufferItem.innerHTML = self.value;
            var width = bufferItem.clientWidth;
        
        
            if(width>5&&(event.target.id!='targetInput')){
                self.style.width = width+'px';
                $(self).addClass('c-brif__input-decor');
            }
            else if(width>5&&(event.target.id=='targetInput')){
                //debugger;
                self.style.width = (width+5)+'px';
                self.style.height = bufferItem.clientHeight+'px';
                $(self).addClass('c-brif__input-decor');
        
            } else{ self.style.width = ''}
        }
        //по-хорошему текст  надо брать из js-typed
        //сделать заглушку если нет js
        if(document.getElementById('c-brif')) {
            typedForm();
            var timerEvent;
            var typedDear = new Typed('#dear', {
                strings: ["Дорогая^500 «Точка росы»,"],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedHello
            });
        }
        function typedHello() {
            clearCursor();
            var typedHello = new Typed('#hello', {
                strings: ["Привет, я"],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedName
            });
        }
        
         function typedName() {
             clearCursor();
             var typedName = new Typed('#name', {
                 strings: ["напиши свое имя"],
                 typeSpeed: 50,
                 loop: false,
                 attr: 'value',
                 bindInputFocusEvents: false,
                 preStringTyped: eventInput,
                 onStringTyped: typedIz
             });
         }
        
        function typedIz(arrayPos,self) {
            clearCursor();
            stopEventInput(arrayPos,self);
            var typedIz = new Typed('#iz', {
                strings: [" из "],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedCompany
            });
        }
        
        function typedCompany() {
            clearCursor();
            var typedName = new Typed('#company', {
                strings: ["ваша компания"],
                typeSpeed: 50,
                loop: false,
                attr: 'value',
                bindInputFocusEvents: false,
                preStringTyped: eventInput,
                onStringTyped: typedTarget
            });
        }
        
        function typedTarget(arrayPos,self) {
            clearCursor();
            stopEventInput(arrayPos,self);
            var typedIz = new Typed('#target', {
                strings: ["Меня интересует "],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedTargetInput
            });
        }
        
        function typedTargetInput() {
            clearCursor();
            var typedName = new Typed('#targetInput', {
                strings: ["ваше сообщение"],
                typeSpeed: 50,
                showCursor: false,
                loop: false,
                preStringTyped: eventInput,
                onStringTyped: typedEmail
            });
        }
        
        function typedEmail(arrayPos,self) {
            clearCursor();
            stopEventInput(arrayPos,self);
            var typedIz = new Typed('#email', {
                strings: ["Здесь мой e-mail"],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedEmailInput
            });
        }
        
        function typedEmailInput() {
            clearCursor();
            var typedName = new Typed('#emailInput', {
                strings: ["мой e-mail"],
                typeSpeed: 50,
                loop: false,
                attr: 'value',
                bindInputFocusEvents: false,
                preStringTyped: eventInput,
                onStringTyped: endAnimation
            });
        }
        
        
         function eventInput(pos, self) {
             if($(self.el)[0]){
              timerEvent = setInterval(function() {
                  $(self.el).triggerHandler('input', hundlerInput);
              }, 25);}
         }
         
         function stopEventInput(arrayPos,self) {
             clearInterval(timerEvent);
              self.el.value='';
              self.el.placeholder=self.el.defaultValue;
         }
        
         function clearCursor(arrayPos,self) {
            $('.typed-cursor').remove();
         }
        
         function endAnimation(arrayPos,self) {
             clearCursor();
             stopEventInput(arrayPos,self);
             $('.c-brif__submit').show();
         }
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
        if(typeof google != 'undefined'){
        //Новосиб
            var mapOptions = {
                /*Координаты центра карты*/
                center: new google.maps.LatLng(55.065829, 82.9130000),
                marker: new google.maps.LatLng(55.065829, 82.9076429),
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#b02424"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#f37121"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"lightness":"70"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.man_made","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#f37121"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f37121"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"},{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#fcaf17"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"saturation":"100"},{"lightness":"-8"},{"color":"#1099ce"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
            };
            var marker = new google.maps.Marker({
                position: mapOptions.marker,
                animation: google.maps.Animation.BOUNCE,
                title: "Студия «Точка росы»",
                icon: 'images/marker.png'
            });
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);
            marker.setMap(map);
        //Москва
            var mapOptions = {
                center: new google.maps.LatLng(55.759235, 37.6712000),
                marker: new google.maps.LatLng(55.759235, 37.6660459),
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#b02424"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#f37121"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"lightness":"70"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.man_made","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#f37121"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f37121"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"},{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#fcaf17"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"saturation":"100"},{"lightness":"-8"},{"color":"#1099ce"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
            }
            var marker = new google.maps.Marker({
                position: mapOptions.marker,
                animation: google.maps.Animation.BOUNCE,
                title: "Студия «Точка росы»",
                icon: 'images/marker.png'
            });
            var map = new google.maps.Map(document.getElementById("map2"),
                mapOptions);
            marker.setMap(map);
        //екб
            var mapOptions = {
                /*Координаты центра карты*/
                center: new google.maps.LatLng(56.8271479, 60.599345),
                /*Координаты нашего маркера*/
                marker: new google.maps.LatLng(56.8271479, 60.594145),
                /*Увеличение карты, чем больше чило - тем больше маштаб*/
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#b02424"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#f37121"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"lightness":"70"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.man_made","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#f37121"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f37121"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"},{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#fcaf17"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"saturation":"100"},{"lightness":"-8"},{"color":"#1099ce"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
            };
            var marker = new google.maps.Marker({
                position: mapOptions.marker,
                animation: google.maps.Animation.BOUNCE,
                title: "Студия «Точка росы»",
                icon: 'images/marker.png'
            });
        
            var map = new google.maps.Map(document.getElementById("map3"),
                mapOptions);
            marker.setMap(map);
        }
        $('.js-tabgroup > div').hide();
        $('.js-tabgroup > div:first-of-type').show();
        $('.js-tabs a').click(function(e){
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#'+$this.parents('.js-tabs').data('tabgroup'),
                others = $this.siblings('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').hide();
            $(target).show();
        });
        (function () {
            var i=0,y=0,
                jellyOption = [];
                options = [],
                jelly = [],
                selector = '.jelly-center',
                init = true;
        
            if (!document.querySelectorAll(selector).length > 0) return false;
        
            var baseOption = [
                 {
                    option: {
                        svg: 'images/svg/jelly-center.svg',
                        pointsNumber: 15,
                        maxDistance: 70,
                        intensity: .85,
                        mouseIncidence: 50,
                        x: 40,
                        y: 10,
                        debug: 0
                    },
                    path: [
                        '#animated-path-0',
                        '#animated-path-1',
                        '#animated-path-2'
                    ],
                     selector: '.jelly-center',
                     color: '#00c2e1'
                },
                {
                    option: {
                        svg: 'images/svg/jelly-arrow.svg',
                        pointsNumber: 15,
                        maxDistance: 70,
                        intensity: .85,
                        mouseIncidence: 50,
                        x: 40,
                        y: 10,
                        debug: 0//,
                        //fixme ошибка при включении параметра
                        //centroid: '.centroid-arrow'
                    },
                    path: [
                        '#arrow',
                        '#arrow_1',
                        '#arrow_2'
                    ],
                    selector: '.jelly-arrow',
                    color: '#f6e527'
                },
                {
                    option: {
                        svg: 'images/svg/jelly-babl.svg',
                        pointsNumber: 10,
                        maxDistance: 70,
                        intensity: .5,
                        mouseIncidence: 50,
                        x: 40,
                        y: 10,
                        debug: 0
                    },
                    path: [
                        '#babl1',
                        '#babl2',
                        '#babl3'
                    ],
                    selector: '.jelly-babl',
                    color: '#f5e000'
                },
                {
                    option: {
                        svg: 'images/svg/jelly-percent.svg',
                        pointsNumber: 15,
                        maxDistance: 70,
                        intensity: .85,
                        mouseIncidence: 50,
                        x: 40,
                        y: 10,
                        debug: 0
                    },
                    path: [
                        '#percent1',
                        '#percent2',
                        '#percent3'
                    ],
                    selector: '.jelly-percent',
                    color: '#2ddfff'
                },
                {
                    option: {
                        svg: 'images/svg/jelly-percent_.svg',
                        pointsNumber: 10,
                        maxDistance: 40,
                        intensity: .5,
                        mouseIncidence: 50,
                        x: 40,
                        y: 10,
                        debug: 0
                    },
                    path: [
                        '#percent_1',
                        '#percent_2',
                        '#percent_3'
                    ],
                    selector: '.jelly-percent_',
                    color: '#fff140'
                }
            ];
        
        
            /* Initializing jelly */
        
            function extendSingle(target, source) {
                for (var key in source)
                    target[key] = Array.isArray(source[key]) ? source[key].slice(0) : source[key];
                return target;
            }
        
            function extend(target, source) {
                if (!target) target = {};
                for (var i = 1; i < arguments.length; i++)
                    extendSingle(target, arguments[i]);
                return target;
            }
        
            function jellyBorn(baseOption) {
                for(i; baseOption.length > i; i++){
                    jellyOption[i]=[];
                    jelly[i]=[];
                    y=0;
                    for(y; baseOption[i].path.length > y; y++ ){
                        jellyOption[i].push(extend({}, baseOption[i].option, {paths: baseOption[i].path[y], color: baseOption[i].color}));
                    }
                    jelly[i] = new Jelly(baseOption[i].selector, jellyOption[i]);
        
                }
        
        
                for(var j=0;jelly.length> j;j++){
                    var countOptions = jellyOption[j].length;
                    for(var y=0;countOptions > y;y++){
                        if(y){
                            jelly[j].hide({i: y, maxDelay: 0, animate: false});
                        }
                    }
                }
        
                setInterval(
                    function () {
                        for(var j=0;jelly.length> j;j++){
        
                            for(var y=0;countOptions > y;y++){
                                if(jelly[j]!==undefined){
                                    jelly[j].morph(extend({i: 0, maxDelay: 200, animate: true}, jellyOption[j][countOptions-y]))}
                            }
                        }
        
                    }, 600);
        
        
            }
           jellyBorn(baseOption);
        })();
        /**интенсивность от 1 до 10**/
        function paralax(selector, intensive) {
            if(typeof paralaxcontainer === "undefined") return false;
            var paralax = paralaxcontainer.querySelectorAll(selector),
                fluidparalax = window.matchMedia("(min-width: 726px)"),
                x = intensive;
        
            function getMousePos(xRef, yRef) {
                var panelRect = paralaxcontainer.getBoundingClientRect();
                return {
                    x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)*paralaxcontainer.offsetWidth,
                    y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * paralaxcontainer.offsetHeight
                };
            }
        
            document.body.addEventListener("mousemove", function(e) {
                var mousePos = getMousePos(e.clientX, e.clientY);
                var lParalax=paralax.length;
                var paralaxCenterX=[],paralaxCenterY=[];
        
                for(var i=0;i<lParalax;i++){
                    paralaxCenterX[i] = paralax[i].offsetLeft + (paralax[i].offsetWidth / 2);
                    paralaxCenterY[i] = paralax[i].offsetTop + (paralax[i].offsetHeight / 2);
                    if(!paralaxCenterX[i]&&!paralaxCenterY[i]){
                        paralaxCenterX[i] = paralax[i].getBoundingClientRect().x + (paralax[i].getBoundingClientRect().width / 2);
                        paralaxCenterY[i] = paralax[i].getBoundingClientRect().y + (paralax[i].getBoundingClientRect().height  / 2);
                    }
                    var distX = mousePos.x - paralaxCenterX[i];
                    var distY = mousePos.y - paralaxCenterY[i];
                    if (fluidparalax.matches) {
                        paralax[i].style.transform = "translate("+(-1*distX)*x/40+"px,"+(-1*distY)*x/40+"px)";
                    }
        
                }
            })
        
        }
        
        paralax('.js-paralax',3);
        paralax('.js-paralax-low',1);
        function mail() {
            var formData = $('.js-form'),
                btnSubmit = $('.js-submit');
                thanks = $('.js-thanks')
            function thanksShow() {
                formData.hide();
                thanks.show().css('display','flex');
            }
            btnSubmit.click(function () {
                console.log(this);
                thanksShow();
                // $.ajax({
                //     url: '/action_mail.php',
                //     type: 'post',
                //     data: formData.serialize(),
                //     dataType: 'text',
                //     success: function(data){
                //         //merci page
                //
                //     },
                //     error: function(req, text, error) {
                //         alert('Ошибка : ' + text + ' | ' + error);
                //     }
                // });
                return false;
            });
        
        };
        mail();
    });

});