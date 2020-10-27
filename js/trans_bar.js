$(document).ready(function() {
	
        $(window).scroll(function() {
			
		if ($(window).width() > 767){
			if($(this).scrollTop() > 950) { 
				$('.navbar').addClass('bg-yellow');
			} else {
				$('.navbar').removeClass('bg-yellow');
			}
		}
			
		else{
			if($(this).scrollTop() > 799) {
				$('.navbar').addClass('bg-yellow');
			} else {
				$('.navbar').removeClass('bg-yellow');
			}
		}
        });
	
});