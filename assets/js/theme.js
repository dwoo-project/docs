(function ($) {
    /* ********* UItoTop ********* */
    $().UItoTop({easingType: 'easeOutQuart'});

    /* ********* smoothScroll ********* */
    $(document).on('click', 'a[href*="#"]', function () {
        if (this.hash && this.pathname === location.pathname) {
            $.bbq.pushState('#' + this.hash.slice(1));
            $(window).bind('hashchange', function (event) {
                var tgt = location.hash.replace(/^#\/?/, '');
                if (document.getElementById(tgt)) {
                    $.smoothScroll({scrollTarget: '#' + tgt});
                }
            });
            $(window).trigger('hashchange');

            return false;
        }
    });
})(jQuery);