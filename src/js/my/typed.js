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
