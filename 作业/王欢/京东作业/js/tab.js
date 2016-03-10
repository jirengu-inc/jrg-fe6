!(function(){
	$('.tab-item').on('mouseover',function(){
		$(this).addClass('tab-item-selected').siblings().removeClass('tab-item-selected');
		var index = $(this).index();
		var $current_el = $(this).parent().parent().parent().parent();
		$current_el.find('.main').eq(index).addClass('main-selected').siblings().removeClass('main-selected');
	})
})()