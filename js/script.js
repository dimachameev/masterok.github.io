// Модальное окно 1
// открыть по кнопке
$('.js-button-register').click(function() { 
	$('.js-overlay-register').fadeIn();
	$('.js-overlay-register').addClass('disabled');
	$("body").css("overflow", "hidden");
	$('.js-overlay-entrance').fadeOut();
});
// закрыть на крестик
$('.js-close-register').click(function() { 
	$('.js-overlay-register').fadeOut();
	$("body").css("overflow", "auto");
});
// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-register');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-register').fadeOut();
		$("body").css("overflow", "auto");	
	}
});



// Модальное окно 2
// открыть по кнопке
$('.js-button-entrance').click(function() { 
	$('.js-overlay-register').fadeOut();
	$('.js-overlay-entrance').fadeIn();
	$('.js-overlay-entrance').addClass('disabled');
	$("body").css("overflow", "hidden");
});
// закрыть на крестик
$('.js-close-entrance').click(function() { 
	$('.js-overlay-entrance').fadeOut();
	$("body").css("overflow", "auto");
});
// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-entrance');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-entrance').fadeOut();
		$("body").css("overflow", "auto");	
	}
});



$(function() {
    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });



    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    });
});