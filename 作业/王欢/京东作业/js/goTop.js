!(function(){
	// function goTop(id){
	// 	this.id = id || 'goTop';
	// 	this.css = {
	// 	  'font-size':'17px',
	// 	  'width':'50px',
	// 	  /* height: 50px; */
	// 	  'background': '#dee',
	// 	  'text-align':'center',
	// 	  'padding':'8px 0',
	// 	  'position':'fixed',
	// 	  'bottom':'10px',
	// 	  'right':'10px'
	// 	};
	// 	this.init();
	// }
	// goTop.prototype = {
	// 	init:function(){
	// 		var $btn = $('#'+this.id);
	// 		if ($btn.length === 0) {
	// 			$btn = $("<div id="+this.id+">回到顶部</div>");
	// 			$btn.css(this.css);
	// 			$('body').append($btn);
	// 		};
	// 		this.$el = $btn;
	// 		this.bind();
	// 	},
	// 	bind:function(){
	// 		var _this = this;
	// 		this.$el.on('click',function(){
	// 			_this.goTotop();
	// 		});
	// 		_this.showBtn();
	// 		$(window).on('scroll',function(){
	// 			_this.showBtn();
	// 		});
	// 	},
	// 	goTotop:function(){
	// 		$('body').animate({scrollTop:0},1000);		
	// 	},
	// 	showBtn:function(){
	// 		var $top = $(window).scrollTop();
	// 		if ($top > 100) {
	// 			this.$el.fadeIn();
	// 		}else{
	// 			this.$el.fadeOut();
	// 		}
	// 	}
	// }
	$('.goTop').on('click',function(e){
		$('body').animate({scrollTop:0},1000);
	});
})()
