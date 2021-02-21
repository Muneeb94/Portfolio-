$(document).ready(function(){

// bootstrap carousel plugin
$('.carousel').carousel({
	interval: 5000,
	pause : ""
});


$('.carousel2').carousel({
	interval: 5000,
	pause : ""
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


//navbar cross plugin
$(".navbar-toggle").on("click", function () {
	$(this).toggleClass("active");
});

//header color change page scroller plugin
$(window).bind('scroll', function() {
if ($(window).scrollTop() > 1) {
$('.navbar').addClass('header-scroller');
}
else {
$('.navbar').removeClass('header-scroller');
}
});
// jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function() {*/
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
/*});*/

// jQuery for page scrolling active - position jQuery Easing plugin
$('body').scrollspy({
     target: '.navbar-fixed-top',
     offset: 51
});

//collapse active
$('.panel-heading').click(function(){
$('.panel-heading').each(function(index, element) {
$(this).removeClass("active");
$(this).children("img").attr("src","images/acc-plus.png");
});
$(this).addClass("active");
$(this).children("img").attr("src","images/acc-minius.png");
});



// jQuery for parallax scrolling plugin
$('.center-bg').parallax({imageSrc: 'images/bg1.jpg'});
$('.bottom-bg').parallax({imageSrc: 'images/bottom-bg.jpg'});

// page scroll logo small plugin 
$(window).scroll(function () {
if ($(document).scrollTop() == 0) {
$('.navbar').removeClass('tiny');
} else {
$('.navbar').addClass('tiny');
}
});

$(window).load(function() { 
$('#status').fadeOut(); 
$('#preloader').delay(500).fadeOut('slow'); 
$('body').delay(500).css({'overflow':'visible'});
});
});


