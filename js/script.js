// slider **************************************
var mySwiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.slider-pagination',
		bulletClass: 'slider-bullet',
		bulletActiveClass: 'slider-bullet__active',
		clickable: 'true'
	},

	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},

	autoplay: {
		delay: 5000,
		loop: 'true'
	},
});

// button scrollUp **************************************
$(document).ready(function () {

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	// modal (popup) **************************************

	//closed all modals
	$('.modal-bg, .modal-close').click(function (event) {
		event.preventDefault()
		$('.modal-bg').fadeOut()
		$('.modal-item').fadeOut()
		$('.modal-call').fadeOut()
		$('.modal-sended').fadeOut()
	})

	//listen 'item' modal and open on click
	$('.modal-btn__item').click(function (event) {
		event.preventDefault()
		$('.modal-bg').fadeIn()
		$('.modal-item').fadeIn()
	})

	//listen 'call' modal and open on click
	$('.modal-btn__call').click(function (event) {
		event.preventDefault()
		$('.modal-bg').fadeIn()
		$('.modal-call').fadeIn()
	})

	//listen 'sended' modal and open on click
	$('.modal-btn__sended').click(function (event) {
		event.preventDefault()
		$('.modal-bg').fadeIn()
		$('.modal-sended').fadeIn()
	})


	// modal-image (magnific-popup) **************************************
	$('.image-link').magnificPopup({ type: 'image' });
});
// categories-nav (vertical-nav) **************************************
$(document).ready(function () {
	$('.categories-nav span').click(function (e) {
		e.preventDefault();
		$(this).parent().parent().find('ul').slideToggle();
		$(this).parent().parent().toggleClass('active');
	});
});




