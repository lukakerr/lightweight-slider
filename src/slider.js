var height = $('.banner').attr("data-height")
var width = $('.banner').attr("data-width")
var autoSlide = $('.banner').attr("data-autoslide")
var nextCursor = $('.next').attr("data-next-cursor")
var previousCursor = $('.previous').attr("data-previous-cursor")

$('body, html').css({
	'margin': '0'
})

$('.banner, .slider').css({
  'width': width,
  'height': height + 'px',
  'margin': '0 auto'
});

$('.slider').css({
  'position': 'absolute',
  'opacity': '0',
  'object-fit': 'cover'
});

$('.previous, .next').css({
  'margin': '0 auto',
	'position': 'relative',
	'width': '50%',
	'height': height + 'px'
});

$('.previous').css({
  'cursor': previousCursor? 'url(' + previousCursor + '), auto': 'w-resize',
  'float': 'left',
  'margin': '0 auto',
	'position': 'relative',
	'width': '50%'
});

$('.next').css({
  'cursor': nextCursor? 'url(' + nextCursor + '), auto' : 'e-resize',
  'float': 'right'
});

$('.links').css({
  'text-align': 'center',
  'position': 'absolute',
  'top': height - 50 + 'px',
	'left': '0',
	'right': '0',
	'margin': 'auto',
	'cursor': 'default'
});

$('.links a').css({
  'color': '#000',
  'display': 'inline-block',
  'text-decoration': 'none',
  'background': '#FFF',
  'border-radius': '50%',
  'height': '15px',
  'width': '15px',
  'margin': '10px 5px',
  'transition': 'all 0.5s'
});

$(document).ready(function() {

 	var totalImgs = $(".links > a").length;
	var currentImgNumber = 1;
	var nextImgNumber = currentImgNumber + 1;
	var previousImgNumber = totalImgs;
	var randomImgNumber = 3;
	var currentImg = $('.banner img:nth-of-type(' + currentImgNumber + ')'); 
	var nextImg = $('.banner img:nth-of-type(' + nextImgNumber + ')'); 
	var previousImg = $('.banner img:nth-of-type(' + previousImgNumber + ')');
	var randomImg = $('.banner img:nth-of-type(' + randomImgNumber + ')');
   
	function loadImg() {
		currentImg.stop().fadeTo("slow", 1);
	}
   
	function nextImgFade() {
		currentImg.stop().fadeTo("slow", 0);
		nextImg.stop().fadeTo("slow", 1);
	}
   
	function previousImgFade() {
		currentImg.stop().fadeTo("slow", 0);
		previousImg.stop().fadeTo("slow", 1);
	}
   
	function randomImgFade() {
		currentImg.stop().fadeTo("slow", 0);
		randomImg.stop().fadeTo("slow", 1);
	}
   
	function boldText() {
		$('.links a').each(function() {
			var currentHref = $(this).attr('href');
			if (currentImgNumber == currentHref) {
				$(this).css("opacity", "0.8");
			} else {
				$(this).css("opacity", "0.4");
			}
		});
	}
   
	function imgLoop() {
		if (currentImgNumber == 1) {
			nextImgNumber = currentImgNumber + 1;
			previousImgNumber = totalImgs;
		} else if (currentImgNumber == totalImgs) {
			nextImgNumber = 1;
			previousImgNumber = currentImgNumber - 1;
		} else {
			nextImgNumber = currentImgNumber + 1;
			previousImgNumber = currentImgNumber - 1;
		}
	}
   
	function refreshImgs() {
		currentImg = $('.banner img:nth-of-type(' + currentImgNumber + ')'); 
		nextImg = $('.banner img:nth-of-type(' + nextImgNumber + ')'); 
		previousImg = $('.banner img:nth-of-type(' + previousImgNumber + ')');
		randomImg = $('.banner img:nth-of-type(' + randomImgNumber + ')');
	}
   
	function callFunctions() {
		boldText();
		imgLoop();
		refreshImgs();
	}

	function restartInterval() {
		clearInterval(interval);
		interval = setInterval(loopImages, autoSlide);
	}

	function loopImages() {
		$(".next").trigger("click");
	}
   
	$('.links a').click(function() {
		restartInterval();
		randomImgNumber = parseInt($(this).attr('href'));
		randomImg = $('.banner img:nth-of-type(' + randomImgNumber + ')');
		randomImgFade();
		currentImgNumber = randomImgNumber;
		callFunctions();
		return false;
	});
   
	$('.previous, .next').click(function(e) {
		var direction = $(e.target).attr('class');
		if (direction == "next") {
			nextImgFade();
			currentImgNumber = nextImgNumber;
		} else {
			previousImgFade();
			currentImgNumber = previousImgNumber;
		}
		restartInterval();
		callFunctions();
	});

	boldText();
	loadImg();

	$(window).on('resize load', function() {
		$(".previous, .next").height($(".slider").height());
	});

	if (!(totalImgs == 1)) {
		var interval = setInterval(loopImages, autoSlide);
	}

	$(".links").width(parseInt(totalImgs)*34);
	
});