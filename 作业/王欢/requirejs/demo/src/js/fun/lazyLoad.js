define(['jquery'],function($){
	var lazyLoad = {
		init:function(){
			this.$imglist = $('#lazyLoad .img-list img');
			this.bind();
		},
		bind:function(){
			var _this = this;
			_this.checkImg();
			var timer = null;
			$(window).on('scroll',function(){
				timer && clearTimeout(timer);
				timer = setTimeout(function(){
					_this.checkImg();	
				},100);
			});
		},
		checkImg:function(){
			var _this = this;
			this.$imglist.each(function(){
				var $cur = $(this);
				if(_this.isSee($cur) && !_this.isLoad($cur)){
					_this.showImg($cur);
				}
			});
		},
		isSee:function($el){
			var scrollTop = $(window).scrollTop();
			var winH = $(window).height();
			var imgH = $el.offset().top;
			return scrollTop+winH>imgH;
		},
		showImg:function($el){
			setTimeout(function(){
				$el.attr('src',$el.attr('data-src'));	
				$el.attr('data-load',true);
			},1000);
		},
		isLoad:function($el){
			if ($el.attr('data-load')) {
				return true
			}else{
				return false;
			}
		}
	}
	return lazyLoad;
});