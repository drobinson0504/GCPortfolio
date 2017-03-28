
function main(){
	$('.header').hide();
	$('.header').fadeIn(1000);
	$('.navigation').hide();
	$('.navigation').fadeIn(1000);
	$('body').hide();
	$('body').fadeIn(1000);
	$('.image').hide();
	$('.image').fadeIn(1000);
	$('.imagedon').hide();
	$('.imagedon').fadeIn(1000);
	$('.contactMe').hide();
	$('.contactMe').fadeIn(1000);
	$('.floating-box').hide();
	$('.floating-box').fadeIn(2000);
}


$(document).ready(main);

$(document).ready(function() {

	$("ol").mouseover(function(){
		$(this).fadeTo("slow", 0.25);
	});
	 $("ol").mouseleave(function(){
	 	$(this).fadeTo("slow", 1);
	 });

	$("ol").click(function(){
		$(this).css({'color':  'red'});
		$(this).text("You Clicked It!!");
	});

	
})