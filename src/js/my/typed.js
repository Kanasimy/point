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
