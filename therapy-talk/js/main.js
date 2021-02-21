$(document).ready(function(){

	$(".left1").boxLoader({
	    direction:"x",
	    position: "-50%",
	    effect: "fadeIn",
	    duration: "2s",
	    windowarea: "60%"
});

	$(".right1").boxLoader({
	    direction:"x",
	    position: "50%",
	    effect: "fadeIn",
	    duration: "2s",
	    windowarea: "60%"
});



	$(".inn").boxLoader({
	    direction:"none",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "2s",
	    windowarea: "30%"
});




$(".botTop").boxLoader({
	    direction:"y",
	    position: "100%",
	    effect: "none",
	    duration: "2s",
	    windowarea: "10%"
});
 
	$(".up i").click(scroll);

});


function scroll(){

	$("html, body").animate({
        scrollTop: $(".boxes").offset().top
    }, {
    	queue: false,
    	duration: 1000});

}