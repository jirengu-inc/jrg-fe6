$.fn.tab=function(className){
	this.each(function(index,dom){
		$(dom).find('.tab-button').children('li').on('mouseover',function(e){
			var currentIndex=$(e.currentTarget).index();
			$(e.currentTarget).addClass(className).siblings().removeClass(className);
			$(dom).find('.tab-container').children('li').eq(currentIndex).show().siblings().hide();

		});
	});
}