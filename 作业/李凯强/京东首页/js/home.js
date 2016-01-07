window.onload=function(){
	/*轮播插件*/
	$('.img-ct1').slides({autoplay:false});
	/*顶栏下拉效果*/
	$('.g-droplist').hoverToggle('active');
	/*生活服务标题切换效果*/
	$('.servers').tab('active');
	/*生活服务悬浮效果*/
	var stopServershide;
	$('.all-servers li:eq(0)').on('mouseover',function(e){
		var _self=this;
		clearTimeout(stopServershide);
		stopServershide=setTimeout(function(){
			serversHide(_self);
		},300);
	});
	$('.all-servers li:eq(1)').on('mouseover',function(e){
		var _self=this;
		clearTimeout(stopServershide);
		stopServershide=setTimeout(function(){
			serversHide(_self);
		},300);
	});
	$('.all-servers li:eq(2)').on('mouseover',function(e){
		var _self=this;
		clearTimeout(stopServershide);
		stopServershide=setTimeout(function(){
			serversHide(_self);
		},300);
	});
	$('.all-servers li:eq(3)').on('mouseover',function(e){
		var _self=this;
		clearTimeout(stopServershide);
		stopServershide=setTimeout(function(){
			serversHide(_self);
		},300);
	});
	function serversHide(node){
		var currentIndex=$(node).index();
		$('.all-servers').hide(100);
		$(node).closest('.servers').find('.servers-wrap').slideDown(100);
		$(node).closest('.servers').find('.tab-button').children().eq(currentIndex).addClass('active');
		$(node).closest('.servers').find('.tab-container').children().eq(currentIndex).show().siblings().hide();

	};
	/*话费、流量切换效果*/
	$('.products .bull-ser .servers .tab-container .calls-flow a').on('mouseover',function(e){
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).index()==0){
			$(this).parent().siblings('.calls').css('display','block');
			$(this).parent().siblings('.flow').css('display','none');
		}
		if($(this).index()==1){
			$(this).parent().siblings('.calls').css('display','none');
			$(this).parent().siblings('.flow').css('display','block');
		}
	})
	/*话费面值切换效果*/
	$('.products .bull-ser .servers .tab-container .calls p:eq(1) select').on('change',function(e){
		var price=['￥9.8-￥11.0','￥19.6-￥21.0','￥29.4-￥31.0','￥49.0-￥50.0','￥98.0-￥100.0','￥196.0-￥200.0','￥294.0-￥300.0','￥490.0-￥500.0'];
		var _selected=$(this).children(':selected');
		if(_selected){
			$(_selected).parent().siblings('.price-range').text(price[$(_selected).index()]);
		}
	});
	/*流量面值切换效果*/
	$('.products .bull-ser .servers .tab-container .flow p:eq(1) select:eq(1)').on('change',function(e){
		var price=['￥7.5-￥10.0','￥9.95-￥20.0','￥19.9-￥20.5','￥29.0-￥29.9','￥49.0-￥50.0'];
		var _selected=$(this).children(':selected');
		if(_selected){
			$(_selected).parent().siblings('.price-range').text(price[$(_selected).index()]);
		}
	});
}