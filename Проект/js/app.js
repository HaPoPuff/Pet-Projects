$(function () {

    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();
    
    
    /* Fixed Header */
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function () {
    
    scrollOffset = $(this).scrollTop();
    
    checkScroll(scrollOffset);
    
    })
    
    function checkScroll() {
    
    if (scrollOffset >= introH) {
    header.addClass("fixed");
    }
    else {
    header.removeClass("fixed");
    }
    
    }
    
    /* Smooth Scroll */
    $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    
    var $this = $(this),
    elementID = $this.data('scroll'),
    elementOffset = $(elementID).offset().top;
    
    $("#nav a").removeClass("active");
    $this.addClass("active");
    
    $("html, body").animate({
    scrollTop: elementOffset
    }, 500)
    });
    
    /* Menu nav toggle*/
    $("#nav__toggle").on("click", function (event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    })
    
    /* Collapsse */
    $("[data-collapse]").on("click", function (event) {
    event.preventDefault();
    
    var $this = $(this),
    elementID = $this.data('collapse');
    
    $this.toggleClass("active");

    })

}); 