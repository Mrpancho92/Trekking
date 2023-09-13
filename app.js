$(function () {

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffset = $(window).scrollTop();
    
/* Slider */

    $("[data-slider1]").slick({
        infinity: true,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.span__toggle-prev1'),
        nextArrow: $('.span__toggle-next1')
    });
    $("[data-slider2]").slick({
        infinity: true,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.span__toggle-prev2'),
        nextArrow: $('.span__toggle-next2')
    });
        
    if ($('#happy').is(':checked')) {
        $("#mens").addClass("active");
    } else {
        $("#mens").removeClass("active");
    }

    if ($('#happy2').is(':checked')) {
        $("#womens").addClass("active");
    } else {
        $("#womens").removeClass("active");
        
    }
    
/* Fixed Header */
    checkScroll(scrolloffset);

    $(window).on("scroll", function () {

        scrolloffset = $(this).scrollTop();
        checkScroll(scrolloffset);

    });

    function checkScroll(scrolloffset) {
        if (scrolloffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");


        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    $("#btn").on("click", function (event) {
        event.preventDefault();
        if (!$('#mens').hasClass('active')) {
            $("#mens").addClass("active");
            $('#happy').prop('checked', true);
        }
        if (!$('#womens').hasClass('active')) {
            $("#womens").addClass("active");
            $('#happy2').prop('checked', true);
        }
        if ($('#womens').hasClass('active')) {
            $('#happy3').prop('checked', true);
        }
    });

    $('#happy').click(function () {
        if ($(this).is(':checked')) {
            $("#mens").addClass("active");
        } else {
            $("#mens").removeClass("active");
        }
    });

    $('#happy2').click(function () {
        if ($(this).is(':checked')) {
            $("#womens").addClass("active");
        } else {
            $("#womens").removeClass("active");
        }
    });


    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');
        $this.toggleClass("active");
    });

});