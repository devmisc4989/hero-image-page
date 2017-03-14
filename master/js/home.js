
pioneer.home = function() {

    $('.carousel.carousel-slider').carousel({fullWidth: true});
    pioneer.common.initialNav();
    pioneer.common.initialTileBlock();

    autoplay();
    adjustBlockLeftHeight();

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 5000);
    }

    $(window).resize(function() {
        adjustBlockLeftHeight();
    });

    function adjustBlockLeftHeight(){
        var leftWidth = $('.home-slide .block__two-column--left').outerWidth();
        var leftHeight = leftWidth * 1.2;
        var vpWidth = $(window).width();
        $('.home-slide .block__two-column--left').outerHeight(leftHeight);
        $('.home-slide .block__two-column--right').outerHeight(leftHeight);
    }
}