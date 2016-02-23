!(function($){
	var sectionToplist = getSectionTopList();
	checkNav();
	addAnimate();
	$(window).scroll(function(){
		checkNav();
		addAnimate();
	});
	$('.page nav a').on('click',function(e){
		e.preventDefault();
		var $target = $($(this).attr('href'));
		scrollTo($target);
	});


	//获取当前应该显示的序号
	function getCurrentIndex(){
		var currentIndex;
		var scrollTop = $('body').scrollTop();
		var eyePosition = scrollTop + $(window).height() / 2
		for (var i = 0; i < sectionToplist.length; i++) {
			if (sectionToplist[i+1] === undefined) {
				currentIndex = i;
				break;
			}
			if(eyePosition >= sectionToplist[i] && eyePosition <sectionToplist[i+1]){
				currentIndex = i;
				break;
			}
		}
		return currentIndex;
	}
	
	//取得每一个section距离顶部的高度
	function getSectionTopList(){
		var list = [];
		$('section').each(function(index,el){
			var top = $(el).offset().top;
			list[index] = top;
		});
		return list;
	}

	//显示实时导航
	function checkNav(){
		var currentIndex = getCurrentIndex();
		$('nav>ol>li').eq(currentIndex).addClass('selected').siblings().removeClass('selected');;
	}
	//缓慢滚动到点击位置
	function scrollTo(target){
		var $target = $(target);
		$('body').animate({
			scrollTop:$target.offset().top
		},500);
	}
	//第二屏第三屏添加动画
	function addAnimate(){
		var currentIndex = getCurrentIndex();
		$('section').eq(currentIndex).addClass('current').removeClass('leave')
			.siblings().removeClass('current').addClass('leave');
	}
})(jQuery)