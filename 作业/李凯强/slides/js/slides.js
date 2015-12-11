$.fn.slides=function(obj){
	var $ul=this;
	$ul.each(function(){
		var currentIndex=0;
		var stopInterval;
		var stopTimeout;
		var $currentUl=$(this);
		var length=$currentUl.children('li').length;
		var $slides=$currentUl.closest('.slides');
		$slides.width($currentUl.children('li').width());
		$slides.height($currentUl.children('li').height());
		var $imgObject=$currentUl.children('li').find('img');
		var defaultSize={
			width: $slides.width(),
			height: $slides.height()
		}
		var $slidesSize=$.extend(true,{},defaultSize,obj);		
		$slides.width($slidesSize.width);
		$slides.height($slidesSize.height);
		$currentUl.height($slidesSize.height);
		$imgObject.width($slidesSize.width);
		$imgObject.height($slidesSize.height);
		var liWidth=$slidesSize.width;
<<<<<<< HEAD
		$currentUl.width(liWidth*length);
		var $tab=$currentUl.closest('.slides').find('.tab').children();
		var $leftBtn;
		var $rightBtn;
		function btnStatus() {
			var leftBtn=document.createElement('a');
			var rightBtn=document.createElement('a');
			leftBtn.href='javascript:;';
			rightBtn.href='javascript:;';
			leftBtn.className='leftBtn';
			rightBtn.className='rightBtn';
			leftBtn.textContent='<';
			rightBtn.textContent='>';
			$leftBtn=$(leftBtn);
			$rightBtn=$(rightBtn);
			$slides.append($leftBtn,$rightBtn);
			$slides.on('mouseover', function(e) {
				$(this).find('.leftBtn,.rightBtn').css({
					'display': 'inline-block',
					'opacity': 0
				});
				$(this).find('.leftBtn,.rightBtn').animate({
					'opacity': 0.7
				});
=======
		$currentUl.width(liWidth*2);
		var $tab=$slides.find('.tab').children();
		var $preBtn=$slides.find('.pre');
		var $nextBtn=$slides.find('.next');	
		$slides.on('mouseover', function(e) {
			$(this).find('.pre,.next').css({
				'display': 'inline-block',
				'opacity': 0
			});
			$(this).find('.pre,.next').animate({
				'opacity': 0.7
			});
		});
		function prePage(){
			currentIndex++;
			if(currentIndex==length) currentIndex=0;
			$currentUl.animate({
				'left': -liWidth
			},function(){
				$currentUl.children().first().appendTo($currentUl);
				$currentUl.css('left',0);
				tabStatus();
>>>>>>> 31d222840cc0c3d0165248bee81a41eb691acae5
			});
		}
		function nextPage(){
			currentIndex--;
			if(currentIndex==-1) currentIndex=length-1;
			$currentUl.css({
				'left': 0-liWidth
			});
			$currentUl.children().last().prependTo($currentUl);
			$currentUl.animate({
				'left': 0
			},tabStatus());
		}
		$slides.on('mouseout', function(e) {
			$(this).find('.pre,.next').css({
				'display': 'none'
			});
		});
		$preBtn.on('click',function(e){
			clearInterval(stopInterval);
			clearTimeout(stopTimeout);
			prePage();
			if(obj.autoplay){
				stopTimeout=setTimeout(play,4000);
			}
		});
		$nextBtn.on('click',function(e){
			clearInterval(stopInterval);
			clearTimeout(stopTimeout);
			nextPage();
			if(obj.autoplay){
				stopTimeout=setTimeout(play,4000);
			}
		})
		function tabStatus(){
			$tab.each(function(i,obj){
				if(i++==currentIndex){
					$(obj).addClass('active');
					$(obj).siblings().removeClass('active');
				}
			})
		}
		$tab.first().addClass('active');
		function play(){
			stopInterval=setInterval(prePage,1000);
		}
		if(obj.autoplay){
			play();
		}
	});
	return this;
}