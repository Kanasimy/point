var jQuery = require('jquery');
require('jquery.easing');
require('fullpage.js');
jQuery(function(){
    var $ = jQuery;
    $(document).ready(function() {
        $('#fullpage').fullpage();
    });
    require('./my/fullPageInit.js');
});
