/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

	#MUMM | The Splitted Coming Soon
	@Author		   Torros / Madeon08
	@Type          Javascript
	@Last Update   04:57 PM Monday, August 11th, 2014

	TABLE OF CONTENTS
	---------------------------
	 1. Loading
	 2. Countdown
	 3. Carousel
	 4. Multiscroll

=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* */

/* ================================= */
/* :::::::::: 1. Loading ::::::::::: */
/* ================================= */

// $(window).load(function() {
// 	"use strict";

// 	$('.globload').fadeOut("slow")

// 	setTimeout(function() {

// 		$("header").addClass("fadeIn").removeClass("opacity-0");

// 	}, 200);

// 	setTimeout(function() {

// 		$("#text-construction-2").addClass("fadeIn").removeClass("opacity-0");

// 	}, 400);

// 	setTimeout(function() {

// 		$("#days-animation").addClass("fadeIn").removeClass("opacity-0");

// 	}, 600);

// 	setTimeout(function() {

// 		$("#hours-animation").addClass("fadeIn").removeClass("opacity-0");

// 	}, 800);

// 	setTimeout(function() {

// 		$("#minutes-animation").addClass("fadeIn").removeClass("opacity-0");
// 		$(".control-video").addClass("slideInDown").removeClass("opacity-0");

// 	}, 1000);

// 	setTimeout(function() {

// 		$("#seconds-animation").addClass("fadeIn").removeClass("opacity-0");

// 	}, 1200);

// 	setTimeout(function() {

// 		$("#subscribe").addClass("fadeIn").removeClass("opacity-0");

// 	}, 1200);

// });

/* ================================= */
/* ::::::::: 2. Countdown :::::::::: */
/* ================================= */

// $('#countdown_dashboard').countDown({
// 		targetDate: {
// 			'day': 		30,
// 			'month': 	12,
// 			'year': 	2015,
// 			'hour': 	11,
// 			'min': 		13,
// 			'sec': 		0
// 		},
// 		omitWeeks: true
// });

/* ================================= */
/* :::::::::: 3. Carousel :::::::::: */
/* ================================= */

// $('.carousel').carousel({
// 	  interval: 5000,
// 	  pause: "hover"
// })

/* ================================= */
/* :::::::: 4. Multiscroll ::::::::: */
/* ================================= */

$(document).ready(function() {
	"use strict";
		$('#myContainer').multiscroll({
			sectionsColor: ['#2B2D35', '#F1E7C0', '#7BAABE'],
			anchors: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7'],
			menu: '#menu',
			navigation: true,
			navigationTooltips: ['01', '02', '03', '04', '05', '06', '07'],
			loopBottom: true,
			loopTop: true
		});
});
