$.fn.stickup=function(hander,className){
	$cur=this;
	var scrollTop;
	var targetTop=$cur.offset().top;
	var tarHeight=$cur.height();
	var tarWidth=$cur.width();
	var $div=$cur.clone().css('opacity',0);
	$div.insertBefore($cur)
		.hide()
		.height(tarHeight);
	$(window).on('scroll',function(e){
		scrollTop=$(window).scrollTop();
		if(isNeedFixed()){
			if(!isFixed()){
				setFixed();
			}
		}
		else{
			if(isFixed()){
				unSetFixed();
			}
		}
	});
	function isNeedFixed(){
		if(scrollTop>=targetTop){
			return true;
		}
		else{
			return false;
		}
	}
	function isFixed(){
		return $cur.attr('data-fixed');
	}
	function setFixed(){
		$cur.addClass('fixed')
			.attr('data-fixed',true)
			.width(tarWidth);
		$div.show();
		hander && hander.call($cur,className);
	}
	function unSetFixed(){
		$cur.removeClass('fixed')
			.removeAttr('data-fixed');
		$div.hide();
		if(!!className){
			$cur.removeClass(className);
		}
	}
}