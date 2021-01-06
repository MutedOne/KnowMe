$( document ).ready(function() {
	 AOS.init();
	let status= false;
	
	$('.learns').mouseenter(function(){
		
		$(this).children().last().css({
			"background-color": "#f8f9fa"
		})
	});
	$('.learns').mouseleave(function(){
		
		$(this).children().last().css({
			"background-color": "#0275d8"
		})
	});

	
	$('.navbar-toggler').click(function(){
		let outerheight = $('.break').innerHeight();
		if(status== false){
			status = true;
			$('.left').animate({
  				'height':`${outerheight + 5}vh`
  			},1000);
  			
  			
		}else {
			status = false;
			$('.left').animate({
  				'height':`35vh`
  			},1000);
  			
  			
		}
	
 	});
});