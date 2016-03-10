(function($){
	var floor_array=['clothes','cosmetic','mobiles','electronics']
	$(window).scroll(function(){
		for (var i = 0; i < floor_array.length; i++) {
			if(isSee(floor_array[i])){
				$('#side-bar-left').css({'display':'block'});
				var $sideCurrent = $('#side-bar-left').children().eq(i);
				var $sideSiblings = $sideCurrent.siblings();
				$sideCurrent.children().eq(0).css({'display':'none'});
				$sideCurrent.children().eq(1).css({'display':'block'});
				$sideSiblings.each(function(index,el){
					$(el).children().eq(0).css({'display':'block'});
					$(el).children().eq(1).css({'display':'none'});
				});
				break;		
			}
			else{
				$('#side-bar-left').css({'display':'none'});
			}
		}
		
	});
	function isSee(el){
		var scrollH = $(window).scrollTop();
		var windowH = $(window).height();
		var elTopH = $('.'+el).offset().top;
		var elH = $('.'+el).height();
		if ((scrollH+ windowH > elTopH) && (scrollH<elTopH+elH)) {
			return true;
		}else{
			return false;
		}
	}
	$('.side-bar a').on('mouseover',function(){
		// $(this).children('p').css({'display':'block'});
		$(this).children('p').addClass('selected');;
	}).on('mouseout',function(){
		$(this).children('p').removeClass('selected');
	});
})(jQuery)