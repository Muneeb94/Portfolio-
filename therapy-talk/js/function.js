$(document).ready(function(){ let windowWidth = $( window ).width(); if (windowWidth <= 1150) { console.log('working'); jQuery('.wow').removeClass('fadeIn'); jQuery('.wow').removeClass('fadeInDown'); jQuery('.wow').removeClass('fadeInRight'); jQuery('.wow').removeClass('fadeInLeft'); jQuery('.wow').removeClass('wow'); } });  