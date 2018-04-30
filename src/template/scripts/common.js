$(document).ready(function($) {

	$('.input_tel input').mask('+7 (999) 999-99-99');

	$('.types__list').slick({
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>',
	})


	var worksImg = $('.works__main'),
        worksImgs = $('.works__list');
	worksImg.slick({
		arrows: false,
		asNavFor: worksImgs
	})
    worksImgs.slick({
		slidesToShow: 5,
        asNavFor: worksImg,
		vertical: true,
        responsive: [{
			breakpoint: 1200,
			settings: {
                vertical: false
            }}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
                vertical: false,
				arrows: false
            }}, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                vertical: false,
                arrows: false
            }
        }]
    })

	$('.reviews__list').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		dots: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }]
 	})

	$('.mobile-btn').click(function () {
		$('.panel__nav').toggleClass('panel__nav_toggle');
		$(this).toggleClass('mobile-btn_toggle');
    })

    $(".panel__nav a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $('.panel__nav').removeClass('panel__nav_toggle');
        $("html, body").animate({scrollTop: $(_href).offset().top - 50 +"px"}, 1500);
        return false;
    });

		new WOW().init();
});
