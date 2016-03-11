function Carousel($carousel,param){
	var nparam = {
		isShowOrder:false,
		isAutoPlay:false
	}
	this.$carousel = $carousel;
	this.param = $.extend(nparam,param);
	this.$list = $carousel.find('ul');
	this.imgWidth = this.$list.find('li').width();
	this.imgCount = this.$list.find('li').size();
	this.$btnNext = this.$carousel.find('.next');
	this.$btnPrev = this.$carousel.find('.prev');
	var clock;
	this.$list.css('width',this.imgWidth * this.imgCount);
	this.bind();
}
Carousel.prototype = {
	bind:function(){
		var _this = this;
		this.param.isAutoPlay && this.playAuto();
		this.param.isShowOrder && this.setOrder();
		this.$btnNext.on('click',function(e){
			_this.param.isAutoPlay && _this.playAutoStop();
		 	_this.playNext();
		 	_this.param.isAutoPlay && _this.playAuto();
		})
		this.$btnPrev.on('click',function(){
			_this.param.isAutoPlay && _this.playAutoStop();
			_this.playPrev();
			_this.param.isAutoPlay && _this.playAuto();
		})
	},
	playAuto:function(){
		var _this = this;
		this.clock = setInterval(function(){
			_this.playNext();
		},2000);
	},
	playAutoStop:function(){
		clearInterval(this.clock);
	},
	playNext:function(){
		var _this = this;
		this.$list.animate({'left': -this.imgWidth},function(){
			_this.$list.append(_this.$list.children().first());
			_this.$list.css('left', 0);
			_this.param.isShowOrder && _this.setOrderByImg();
		});
	},
	playPrev:function(){
		var _this = this;
		this.$list.prepend(_this.$list.children().last());
		_this.$list.css({'left':-this.imgWidth});
		_this.$list.animate({'left':0});
		_this.param.isShowOrder && _this.setOrderByImg();
	},
	setOrder:function(){
		var _this = this;
		_this.$carousel.append('<div class="'+_this.param.orderClass+'"></div>'); 
		var $orderCurrent = _this.$carousel.children('.'+_this.param.orderClass+'');
		for (var i = 0; i <_this.imgCount; i++) {
			$orderCurrent.append('<a href="" data-order='+i+'>'+(i+1)+'</a>');
			_this.$list.children().eq(i).attr('data-order',i);
			if (i == 0) {
				$orderCurrent.children().eq(0).addClass('selected');
			}
		}
		var orderWidth = $orderCurrent.width();
		$orderCurrent.css({'left':'50%','margin-left':-orderWidth/2});
		$orderCurrent.children('a').on('click',function(e){
			e.preventDefault();
			var num = $(this).attr('data-order');
			$(this).addClass('selected').siblings().removeClass('selected');
			_this.goToImg(num);
		});
	},
	//   根据序号跳到指定图片
	goToImg:function(num){
		var _this = this;
		var $el = _this.$list.find('li[data-order='+num+']');
		var length = $el.index();
		var $prevlist=[];
		for (var i = 0; i < length; i++) {
			$prevlist.push(_this.$list.children().get(i));			
		};
		_this.$list.append($prevlist);
	}
	,setOrderByImg:function(){
		var _this = this;
		var orderNum = _this.$list.children().first().attr('data-order');
		var $el = _this.$carousel.children('.'+_this.param.orderClass).children().eq(orderNum);
		$el.addClass('selected').siblings().removeClass('selected');
	}
}