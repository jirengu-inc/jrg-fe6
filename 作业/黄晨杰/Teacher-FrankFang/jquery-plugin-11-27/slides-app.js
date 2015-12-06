(function($){
	$.fn.slides = function(options){
		// options:
		// 
		// container: 容器 这里例子上面是 .wrap
		// imageArr：轮播图片url数组集
		// directions: 轮播方向 默认从左向右
		// interval: 轮播变化间隔
		// animateTime: 轮播动画时间
		// nav: 是否具有跳转按钮
		
		var defaultConfig = {
			'container' : $(this),
			'directions' : "btt",
			'interval' : 3000,
			'animateTime' : 300,
			'nav' : false
		};

		var config = $.extend({}, defaultConfig, options || {});
		// If only one argument is supplied to $.extend(), 
		// this means the target argument was omitted. 
		// In this case, the jQuery object itself is assumed to be the target. 
		// By doing this, you can add new functions to the jQuery namespace. 
		// **This can be useful for plugin authors wishing to add new methods to JQuery.**
		// 
		// if you set first property - true, extend can recursive merge the arguments like deep merge the Object / Array
		
		var $ul = config.container.find("ul");

		// 判断是否可以生成轮播
		if($ul.children('li').length <= 1){
			console.log("Only one child of the slides, it can't begin the animate.");
			return false;
		}

		var timerId = setSlides();

		function setSlides(){
			if(config.directions === "ltr" || config.directions === "rtl"){
				$ul.css("width", "auto");
			}else{
				$ul.css("width", config.container.find("li").width());
			}
			return setInterval(function(){
				animateStep($ul, config.directions);
			}, config.interval);
		}

		function animateStep($ele, direction){
			// animate-step function
			if(direction === "rtl"){
				$ele.animate({ "left": "-=" + config.container.width()}, config.animateTime, function(){
					if(Math.abs($(this).css("left").substring(0, $(this).css("left").indexOf("px"))) > config.container.width()){
						$(this).children('li').first().appendTo($(this));
						$(this).css("left", "-" + config.container.width() + "px");
					}else if(Math.abs($(this).css("left").substring(0, $(this).css("left").indexOf("px"))) == 0){
						$(this).children('li').last().prependTo($(this));
						$(this).css("left", "-" + config.container.width() + "px");
					}
				});
			}else if(direction === "ltr"){
				$ele.animate({ "left": "+=" + config.container.width()}, config.animateTime, function(){
					if(Math.abs($(this).css("left").substring(0, $(this).css("left").indexOf("px"))) > config.container.width()){
						$(this).children('li').first().appendTo($(this));
						$(this).css("left", "-" + config.container.width() + "px");
					}else if(Math.abs($(this).css("left").substring(0, $(this).css("left").indexOf("px"))) == 0){
						$(this).children('li').last().prependTo($(this));
						$(this).css("left", "-" + config.container.width() + "px");
					}
				});
			}else if(direction === "btt"){
				$ele.animate({ "top": "-=" + config.container.height()}, config.animateTime, function(){
					if(Math.abs($(this).css("top").substring(0, $(this).css("top").indexOf("px"))) > config.container.height()){
						$(this).children('li').first().appendTo($(this));
						$(this).css("top", "-" + config.container.height() + "px");
					}else if(Math.abs($(this).css("top").substring(0, $(this).css("top").indexOf("px"))) == 0){
						$(this).children('li').last().prependTo($(this));
						$(this).css("top", "-" + config.container.height() + "px");
					}
				});
			}else{
				$ele.animate({ "top": "+=" + config.container.height()}, config.animateTime, function(){
					if(Math.abs($(this).css("top").substring(0, $(this).css("top").indexOf("px"))) > config.container.height()){
						$(this).children('li').first().appendTo($(this));
						$(this).css("top", "-" + config.container.height() + "px");
					}else if(Math.abs($(this).css("top").substring(0, $(this).css("top").indexOf("px"))) == 0){
						$(this).children('li').last().prependTo($(this));
						$(this).css("top", "-" + config.container.height() + "px");
					}
				});
			}
		}

		if(config.nav === true){
			// 有导航按钮
		}

		var $li = config.container.find("ul").children();

		$li.on("mouseover", function(event){
			clearInterval(timerId);
		}).on("mouseleave", function(event){
			timerId = setSlides();
		})
	};
})(jQuery);


$(".wrap").slides();