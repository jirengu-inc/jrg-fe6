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
			'directions' : "vertical",
            'plusOrminus' : "+",
            'animateWay' : "move",
			'interval' : 3000,
			'animateTime' : 300,
			'nav' : true,
			'navClassName' : "slides-nav"
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
		var lengthLi = $ul.children('li').length;

        var presentIndex = 0;

		// 判断是否可以生成轮播
		if(lengthLi <= 1){
			console.log("Only one child of the slides, it can't begin the animate.");
			return false;
		}

        function init(animateWay){
            if(animateWay == "move"){
                // 翻倍轮播 方便跳转
                $ul.children("li").clone().appendTo($ul);
            }else if(animateWay == "fade"){

            }
            var _styles = null;
            if(config.directions === "horizontal"){
                _styles = {
                    "width": "auto",
                    "left": config.container.width() * (-4)
                };
                $ul.css(_styles);
            }else if(config.directions === "vertical"){
                _styles = {
                    "width": config.container.width(),
                    "top": config.container.height() * (-4)
                };
                $ul.css(_styles);
            }
        }

        init(config.animateWay);

        var timerId = setSlides();

		function setSlides(){
			return setInterval(function(){
				animateStep(1, config.directions, config.plusOrminus);
			}, config.interval);
		}

        function animateStep(step, direction, plusOrminus){
            if(direction == "horizontal"){
                if(plusOrminus == "+"){
                    $ul.animate({"left": "-=" + config.container.width() * step}, config.animateTime, function(){
                        for(var i = 0; i < step; i++){
                            $ul.children("li").first().appendTo($ul);
                        }
                        $ul.css("left", config.container.width() * (-4));
                        if(changeNav) presentIndex = changeNav(step + presentIndex);
                    });
                }else if(plusOrminus == "-"){
                    $ul.animate({"left": "+=" + config.container.width() * step}, config.animateTime, function(){
                        for(var i = 0; i < step; i++){
                            $ul.children("li").last().prependTo($ul);
                        }
                        $ul.css("left", config.container.width() * (-4));
                        if(changeNav) presentIndex = changeNav(step + presentIndex);
                    });
                }
            }else if(direction == "vertical"){
                if(plusOrminus == "+"){
                    $ul.animate({"top": "-=" + config.container.height() * step}, config.animateTime, function(){
                        for(var i = 0; i < step; i++){
                            $ul.children("li").first().appendTo($ul);
                        }
                        $ul.css("top", config.container.height() * (-4));
                        if(changeNav) presentIndex = changeNav(step + presentIndex);
                    });
                }else if(plusOrminus == "-"){
                    $ul.animate({"top": "+=" + config.container.height() * step}, config.animateTime, function(){
                        for(var i = 0; i < step; i++){
                            $ul.children("li").last().prependTo($ul);
                        }
                        $ul.css("top", config.container.height() * (-4));
                        if(changeNav) presentIndex = changeNav(step + presentIndex);
                    });
                }
            }
        }

		if(config.nav === true){
			// 有导航按钮
			var $nav = $("<ul>");
			$nav.addClass(config.navClassName);
			for(var i = 0, length = lengthLi; i < lengthLi; i++){
				var _$li = $("<li>");
				_$li.val(i).text(i+1);
                $nav.append(_$li);

                if(i == presentIndex){
                    _$li.addClass("chosen");
                }
			}

            $nav.on("click", "li", function(event){
                var _index = $(this).index();
                if(_index != presentIndex){
                    clearInterval(timerId);
                    var _plusOrminus = _index > presentIndex ? "+" : "-";
                    var _diff = Math.abs(_index - presentIndex);
                    animateStep(_diff, config.directions, _plusOrminus);
                }
            });

            config.container.css("position", "relative").append($nav);

            var changeNav = function(index){
                var _index = index % lengthLi;
                $nav.children("li").removeClass("chosen").get(_index).className = "chosen";
                return _index;
            }
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