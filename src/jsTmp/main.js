global.jQuery = require('jquery');
var jQuery = require('jquery'),
    scroll= require('wowjs'),
    Typed = require('typed.js'),
    Vivus = require('vivus');

require('jquery.easing');
require('fullpage.js');
require('owl.carousel');

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
                $('.js-proekt').removeClass('moving');
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
                $('[data-anchor="'+anchorLink+'"] .js-proekt').addClass('moving');
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
                strings: ["Привет,^500 Точка Росы!"],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedHello
            });
        }
        
        function typedHello() {
            clearCursor();
            var typedHello = new Typed('#hello', {
                strings: ["Меня зовут^400"],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedName
            });
        }
        
        
        function typedName() {
            clearCursor();
            var typedName = new Typed('#name', {
                strings: ["ваше имя^300"],
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
                strings: [", я из компании"],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedCompany
            });
        }
        
        function typedCompany() {
            clearCursor();
            var typedCompany = new Typed('#company', {
                strings: ["название компании^200"],
                typeSpeed: 47,
                loop: false,
                attr: 'value',
                bindInputFocusEvents: false,
                preStringTyped: eventInput,
                onStringTyped: typedDotone
            });
        }
        
        function typedDotone(arrayPos,self) {
            clearCursor();
            stopEventInput(arrayPos,self);
            var typedDotone = new Typed('#dotone', {
                strings: [".^500"],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedTarget
            });
        }
        
        function typedTarget() {
            clearCursor();
            var typedTarget = new Typed('#target', {
                strings: ["Мы хотим заказать у вас^200 "],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedTargetInput
            });
        }
        
        function typedTargetInput() {
            clearCursor();
            var typedTargetInput = new Typed('#targetInput', {
                strings: ["название услуги^100"],
                typeSpeed: 50,
                showCursor: false,
                loop: false,
                preStringTyped: eventInput,
                onStringTyped: typedDottwo
            });
        }
        
        function typedDottwo(arrayPos,self) {
            clearCursor();
            stopEventInput(arrayPos,self);
            var typedDottwo = new Typed('#dottwo', {
                strings: [".^500"],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedEmail
            });
        }
        
        function typedEmail(arrayPos,self) {
            clearCursor();
            stopEventInput(arrayPos,self);
            var typedEmail = new Typed('#email', {
                strings: ["Ваши мысли на этот счет отправляйте на почту^300"],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedEmailInput
            });
        }
        
        function typedEmailInput() {
            clearCursor();
            var typedEmailInput = new Typed('#emailInput', {
                strings: ["ваш e-mail"],
                typeSpeed: 50,
                loop: false,
                attr: 'value',
                bindInputFocusEvents: false,
                preStringTyped: eventInput,
                onStringTyped: typedDotthree
            });
        }
        
        function typedDotthree(arrayPos,self) {
            clearCursor();
            stopEventInput(arrayPos,self);
            var typedDotthree = new Typed('#dotthree', {
                strings: [".^500"],
                typeSpeed: 50,
                loop: false,
                onStringTyped: typedThanks
            });
        }
        
        function typedThanks() {
            clearCursor();
            var typedThanks = new Typed('#thanks', {
                strings: ["Спасибо!^500"],
                typeSpeed: 50,
                loop: false,
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
        if(document.documentElement.clientHeight+95<document.body.offsetHeight){
            $('#js-top').show();
        }
        $('#js-top').click(function() {
            $('html, body').animate({scrollTop: 0},500);
            return false;
        })
        
        $('.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            video:true,
            lazyLoad:true,
            responsiveClass:true,
            nav:true
        });
        //preloader page
        var mail = function mail() {
            debugger
            var formData = $('.js-form'),
                btnSubmit = $('.js-submit');
            thanks = $('.js-thanks')
            function thanksShow() {
                formData.hide();
                thanks.show().css('display','flex');
            }
            $.ajax({
                url: '/action_mail.php',
                type: 'post',
                data: formData.serialize(),
                dataType: 'text',
                success: function(data){
                    thanksShow();
                },
                error: function(req, text, error) {
                    console.log('Ошибка : ' + text + ' | ' + error);
                }
            });
            return false;
        };
        
        global.mail = mail;
        
        if(document.body.classList.contains('c-about')){
            var lamp = new Vivus('lamp', {type: 'scenario-sync', duration: 20}),
                pencil = new Vivus('pencil', {type: 'scenario-sync', duration: 20}),
                rupor = new Vivus('rupor', {type: 'scenario-sync', duration: 20}),
                no = new Vivus('no', {type: 'scenario-sync', duration: 20}),
                binocl = new Vivus('binocl', {type: 'scenario-sync', duration: 20}),
                notebook = new Vivus('notebook', {type: 'scenario-sync', duration: 20}),
                line = new Vivus('line', {type: 'oneByOne', duration: 15}),
                line1 = new Vivus('line1', {type: 'oneByOne', duration: 20});
        }
        var videoEl = document.getElementsByTagName('video')[0];
        if(videoEl){
        // если браузер может воспроизводить видео удаляем класс
        videoEl.addEventListener('canplaythrough', function () {
        
        }, false);
        // запускам или останавливаем воспроизведение
        videoEl.addEventListener('click', function () {
            if (videoEl.paused) {
                videoEl.play();
                videoEl.classList.remove('play');
                videoEl.classList.add('pause');
            } else {
                videoEl.pause();
                videoEl.classList.remove('pause');
                videoEl.classList.add('play');
            }
        }, false);
        
        videoEl.addEventListener('ended', function () {
            videoEl.currentTime = 0;
            videoEl.classList.remove('pause');
            videoEl.classList.add('play');
        }, false);
        }
    });
});