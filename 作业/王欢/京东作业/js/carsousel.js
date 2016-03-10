var carousel = (function(){
	var $carousel,$list,count,clock,width,$orderList,$carouselClassName;
	var nparam = {
		'isShowOrder':true,
		'isAutoPlay':true,
		'animateTime':1000,
		'intervalTime':3000,
		'orderCssName':'order-num',
		'isPrevAndNext':true,
		'prevCssName':'prev',
		'nextCssName':'next'
	};
  	function init($container,param){
  		$.extend(nparam,param);
  		$carousel = $container;
  		$carouselClassName = $carousel.attr('class');
  		$list = $carousel.children('ul');
  		count = $list.children('li').size();
  		width = $list.children('li').width();
  		$list.css({'width':count*width});	
  		bind();
  	}
	function bind(){
		if(nparam.isShowOrder){
			setNumber();
			setOrderByImg();
		}
		nparam.isAutoPlay && autoPlay();
		if (nparam.isPrevAndNext) {
			$('.'+$carouselClassName+' .'+nparam.nextCssName).on('click',function(){
				stopPlay();
				next();
				nparam.isAutoPlay && autoPlay();
			});
			$('.'+$carouselClassName+' .'+nparam.prevCssName).on('click',function(){
				stopPlay();
				prev();
				nparam.isAutoPlay && autoPlay();
			});
		};

	}
	function autoPlay(){
		clock = setInterval(function(){
			next();		
		},nparam.intervalTime);
	}
	function stopPlay(){
		clock && clearInterval(clock);
	}
	function next(){
		$list.animate({'left':-width},nparam.animateTime,function(){
			$list.append($list.children('li').first());
			$list.css({'left':0});
			setOrderByImg();
		});
	}
	function prev(){
		$list.prepend($list.children('li').last());
		$list.css({'left':-width});
		$list.animate({'left':0},nparam.animateTime);
		setOrderByImg();
	}

	function setNumber(){	
		$list.children().each(function(index,el){
			$(el).attr('data-num',index+1);
		});		
		$carousel.append('<div class="'+nparam.orderCssName+'"><ul></ul></div>');
		$orderList = $carousel.find('.'+nparam.orderCssName+' ul');
		for (var i = 0; i < count; i++) {
			$orderList.append('<li>'+(i+1)+'</li>');		
		};	
		var orderNumWidth = $('.'+nparam.orderCssName).width();
		$('.'+nparam.orderCssName).css({'margin-left':-orderNumWidth/2})
		$('.'+nparam.orderCssName+' li').on('click',function(){
			stopPlay();
			$(this).css({'background':'#c81623'});
			$(this).siblings().css({'background':'#3e3e3e'});
			var num = $(this).text();
			goToImg(num);
			nparam.isAutoPlay && autoPlay();
		});			
	}
	function goToImg(num){
		var $el = $list.find('li[data-num='+num+']');
		var length = $el.index();
		var $prevlist=[];
		for (var i = 0; i < length; i++) {
			$prevlist.push($list.children().eq(i));			
		};
		$list.append($prevlist);
	}
	//判断当滑动到第几个滑块  列表数字高亮
	function setOrderByImg(){
		var orderNum = $list.children().first().attr('data-num');
		var $el = $orderList.children().eq(orderNum-1);
		$el.siblings().css({'background':'#3e3e3e'});
		$el.css({'background':'#c81623'});
	}
	
	return {
		init:init
	}
})()