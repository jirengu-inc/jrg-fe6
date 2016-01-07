$('.btn').on('click',function(e){
	var num=0;
	setInterval(function(){
		$('.box').css({
			'background-positionX': '+=67'
		});
		num++;
		if(num==7){
			num=0;
			$('.box').css({
				'background-positionX': 0
			});
		}
	},60);
	$('.box').animate({
		'background-positionX':1876
	},2000,'easeInQuad').css('background-positionX',0);
})
