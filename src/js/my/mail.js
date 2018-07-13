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