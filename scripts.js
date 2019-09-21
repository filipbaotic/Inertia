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


$(document).ready(function() {
    var scrolled = $(window).scrollTop()
    $('.prx').each(function(index) {
        var initY = $(this).offset().top
        var height = $(this).height()
        var diff = scrolled - initY
        var ratio = Math.round((diff / height) * 100.0)
        $(this).css('background-position', 'center calc(65% + ' + parseFloat(-(ratio * .1)) + 'px)')
    })
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop()
        $('.prx').each(function(index, element) {
            var initY = $(this).offset().top
            var height = $(this).height()
            var endY = initY + $(this).height()

            var visible = isInViewport(this)
            if (visible) {
                var diff = scrolled - initY
                var ratio = Math.round((diff / height) * 100)
                $(this).css('background-position', 'center calc(65% + ' + parseFloat(-(ratio * .1)) + 'px)')
            }
        })
    })
})

function isInViewport(node) {
    var rect = node.getBoundingClientRect()
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
}
