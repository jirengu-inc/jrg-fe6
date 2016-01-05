define(['jquery'],function($){
	var carousel = {
		init:function(param){
			this.id = 'carousel';
			this.$list = $("#"+this.id+" .img-list");
			this.imgWidth = this.$list.find('img').width();
			this.imgCount = this.$list.find('img').length;
			this.$list.css({'width':this.width*this.count});
			this.playAuto();
		},
		playAuto:function(){
			var _this = this;
			setInterval(function(){
				_this.playNext();
			},2000);
		},
		playNext:function(){
			$list = this.$list;
			$list.animate({'left':-this.imgWidth},function(){
				$list.append($list.children().first());
				$list.css({'left':0});	
			});
		}
	}
	return carousel;
});