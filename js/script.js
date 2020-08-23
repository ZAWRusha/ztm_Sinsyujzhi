// topmenu fixed
var h_hght = 162; // distance from the menu to the top of the screen (px)
var h_mrg = 0; // distance to fix the menu from the top of the screen (px)

$(function() {

	var elem = $('.nav'); // class of the topmenu
	var top = $(this).scrollTop();

	if (top > h_hght) {
		elem.css('top', h_mrg);
	}

	$(window).scroll(function() {
		top = $(this).scrollTop();

		if (top + h_mrg < h_hght) {
			elem.css('top', (h_hght - top));
		} else {
			elem.css('top', h_mrg);
		}
	});
});


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
// slider light box **************************************
var mySwiperLB = new Swiper('.swiper-containerLB', {
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
$(document).ready(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	// modal (popup) **************************************

	//closed all modals
	$('.modal-bg, .modal-close, .burger_b-close, .burger_b-bg').click(function(event) {
		event.preventDefault()
		$('.modal-bg').fadeOut()
		$('.burger_b-bg').fadeOut()
		$('.modal-item').fadeOut()
		$('.modal-call').fadeOut()
		$('.modal-sended').fadeOut()
		$('.burger_b-modal').fadeOut()
		$('.wrapper-news-detail').fadeIn()
		mySwiper.update()
	})

	//listen 'item' modal and open on click
	$('.modal-btn__item').click(function(event) {
		event.preventDefault()
		$('.modal-bg').fadeIn()
		$('.modal-item').fadeIn()
	})

	//listen 'call' modal and open on click
	$('.modal-btn__call').click(function(event) {
		event.preventDefault()
		$('.modal-bg').fadeIn()
		$('.modal-call').fadeIn()
	})

	//listen 'sended' modal and open on click
	$('.modal-btn__sended').click(function(event) {
		event.preventDefault()
		$('.modal-bg').fadeIn()
		$('.modal-sended').fadeIn()
	})

	//listen 'menu-burger_b' modal and open on click
	$('.menu-burger_b').click(function(event) {
		event.preventDefault()
		$('.burger_b-bg').fadeIn()
		$('.burger_b-modal').fadeIn()
	})

	// modal-image (magnific-popup) **************************************
	$('.image-link').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			tCounter: ''
		}
	})
});
// categories-nav (vertical-nav) **************************************
$(document).ready(function() {
	$('.categories-nav span').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find('ul').slideToggle();
		$(this).parent().parent().toggleClass('active');
	});
});