
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