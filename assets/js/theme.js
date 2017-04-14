(function ($) {
    $(document).ready(function () {
        //UI to Top
        $().UItoTop({easingType: 'easeOutQuart'});
    });


    /* ********* smoothScroll ********* */
    $(document).on('click', 'a[href*="#"]', function() {
        if ( this.hash && this.pathname === location.pathname ) {
            $.bbq.pushState( '#' + this.hash.slice(1) );
            return false;
        }
    }).ready(function() {
        $(window).bind('hashchange', function(event) {
            var tgt = location.hash.replace(/^#\/?/,'');
            if ( document.getElementById(tgt) ) {
                if ($('body').hasClass('node-type-products') || $('body').hasClass('node-type-product') || $('body').hasClass('node-type-use-cases') || $('body').hasClass('node-type-use-case') || $('body').hasClass('node-type-enterprise') || $('body').hasClass('node-type-government') || $('body').hasClass('node-type-partners') || $('body').hasClass('node-type-partner-programs') || $('body').hasClass('node-type-support-services') || $('body').hasClass('node-type-careers') || $('body').hasClass('node-type-careers-department') || $('body').hasClass('node-type-what-is-docker') || $('body').hasClass('node-type-product-editions') || $('body').hasClass('node-type-projects')) {
                    if ($(window).width() > 991 ) {
                        $('html,body').animate({ scrollTop: $('#' + tgt).offset().top - 51}, 'slow');
                    } else if($(window).width() > 768 && $(window).width() < 991 ) {
                        $('html,body').animate({ scrollTop: $('#' + tgt).offset().top - 51}, 'slow');
                    } else {
                        $('html,body').animate({ scrollTop: $('#' + tgt).offset().top - 51}, 'slow');
                    }
                } else {
                    $.smoothScroll({scrollTarget: '#' + tgt});
                }
            }
        });
        $(window).trigger('hashchange');
    });
})(jQuery);