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

    /* ********* heronav section ********* */
    var $mastheadNav = $('.masthead-nav.affix');
    if ($(window).width() > 991 ) {
        if ($mastheadNav.length > 0) {
            $mastheadNav.affix({
                offset: {
                    top:$mastheadNav.offset().top
                }
            });
        }
    } else {
        if ($mastheadNav.length > 0) {
            $mastheadNav.affix({
                offset: {
                    top:$mastheadNav.offset().top - 50
                }
            });
        }
    }
    if ($(window).width() < 767 ) {
        $mastheadNav.append('<a class="arrow-left arrow">L</a><a class="arrow-right arrow">R</a>');
        var box = $(".masthead-nav ul"), x;
        $(".arrow").click(function() {
            if ($(this).hasClass("arrow-right")) {
                x = ((box.width() / 2)) + box.scrollLeft();
                box.animate({
                    scrollLeft: x,
                })
            } else {
                x = ((box.width() / 2)) - box.scrollLeft();
                box.animate({
                    scrollLeft: -x,
                })
            }
        })
    }
    $('.masthead-nav ul').scroll(function() {
        var widthtotal = 0;
        $('.masthead-nav ul li').each(function() {
            var $this = $(this);
            widthtotal += $this.outerWidth(true);
        });
        if($(this).scrollLeft() == 0) {
            $('.masthead-nav .arrow-left').hide();
        }
        else if($('.masthead-nav .arrow-left').css('display') != 'block') {
            $('.masthead-nav .arrow-left').show();
        }
        if(widthtotal >= $(this).scrollLeft() + $(this).outerWidth(true)) {
            $('.masthead-nav .arrow-right').show();
        }
        else if($('.masthead-nav .arrow-right').css('display') != 'none') {
            $('.masthead-nav .arrow-right').hide();
        }
    }).scroll();
})(jQuery);