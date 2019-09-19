$(document).ready(function() {
    var bar = $(".hamburger");
    var links = $(".mobile_header");
    var logo = $("a.logo");

    $(".hamburger").click(function(e) {
        e.preventDefault();
        bar.toggleClass("active");
        links.toggleClass("active");
        logo.toggleClass("active");
    });
});
