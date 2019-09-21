$(document).ready(function() {
    var bar = $(".hamburger");
    var links = $(".mobile_header");
    var logo = $("a.logo");
    var current = $(".current");

    $(".hamburger").click(function(e) {
        e.preventDefault();
        bar.toggleClass("active");
        links.toggleClass("active");
        logo.toggleClass("active");
        current.toggleClass("active");
    });
});

(function($) {
    $.fn.parlx = function(options) {
        var options = $.extend({
            speed: 0.08
        }, options);
        return this.each(function() {
            const backImage = $(this);
            let speed = options.speed;
            if (speed > 0.5 || speed < 0.1) {
                speed = 0.08;
            }
            const scrolled = $(window).scrollTop() - backImage.parent().offset().top;
            backImage.css({ "background-position": "center calc(60% - " + speed * scrolled + "px)" });
        });
    }
    $(window).on("load resize scroll", function() {
        $('.prx').parlx();
    });
})(jQuery);
