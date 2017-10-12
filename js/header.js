define(function() {
    $("body").on('click', '.top-nav .hamburger', function() {
        $(this).closest('#navi').toggleClass("openburger");
    });
    
    $(window).on("resize", function() {
        if ($(window).width() > 600) {
            $(".top-nav").removeClass('openburger');
        }
    });
});
