$(function () {
	$('.list').click(function () {
		$('.nav').show();
		$('.nav').animate({left:'0'})
	});
	$('.shut').click(function(){
		$('.nav').animate({left:'-195px'});
	});
    
	$(document).scroll(function(){
		$('.header').addClass('vary');
		if($(document).scrollTop() == 0){
			$('.header').removeClass('vary');
		}
	});
});