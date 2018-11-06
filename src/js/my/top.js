if(document.documentElement.clientHeight+95<document.body.offsetHeight){
    $('#js-top').show();
}
$('#js-top').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
})
