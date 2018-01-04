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
