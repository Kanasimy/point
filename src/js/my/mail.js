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
