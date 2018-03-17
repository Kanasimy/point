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




