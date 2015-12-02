$.fn.slides=function(isCycle,autoPlay){
	var $ul=this;
	$ul.each(function(){
		var currentIndex=0;
		var $currentUl=$(this);
		var length=$currentUl.children().length;
		var liWidth=$currentUl.children().first().width();
		$currentUl.width(liWidth*length);
		var $tab=$currentUl.closest('.slides').find('.tab').children();
		var $slides=$currentUl.closest('.slides');
		var $leftBtn=$currentUl.closest('.slides').find('.leftBtn');
		var $rightBtn=$currentUl.closest('.slides').find('.rightBtn');
		function btnStatus() {
			$slides.on('mouseover', function(e) {
				$(this).find('.leftBtn,.rightBtn').css({
					'display': 'inline-block',
					'opacity': 0
				});
				$(this).find('.leftBtn,.rightBtn').animate({
					'opacity': 0.7
				});
			});
			$slides.on('mouseout', function(e) {
				$(this).find('.leftBtn,.rightBtn').css({
					'display': 'none'
				});
			})
		}
		function tabStatus(){
			$tab.each(function(i,obj){
				if(i++==currentIndex){
					$(obj).addClass('active');
					$(obj).siblings().removeClass('active');
				}
			})
		}
		$tab.first().addClass('active');
		if(!isCycle){
			if(autoPlay){
				setTimeout(function(){
					currentIndex++;
					if(currentIndex==4)
						currentIndex=0;
					$currentUl.animate({
						'left': -currentIndex*liWidth
					});
					tabStatus();
					setTimeout(arguments.callee,1000);
				},1000);
			}
			else{
				btnStatus();
				$leftBtn.on('click',function(e){
					currentIndex++;
					if(currentIndex==4)
						currentIndex=0;
					$currentUl.animate({
						'left': -currentIndex*liWidth
					});
					tabStatus();
				})
				$rightBtn.on('click',function(e){
					currentIndex--;
					if(currentIndex==-1)
						currentIndex=3;
					$currentUl.animate({
						'left': -currentIndex*liWidth
					});
					tabStatus();
				})
			}
		}
		else{
			if(autoPlay){
				setTimeout(function(){
					currentIndex++;
					if(currentIndex==4) currentIndex=0;
					$currentUl.animate({
						'left': -liWidth
					},function(){
						$currentUl.children().first().appendTo($currentUl);
						$currentUl.css('left',0);
						tabStatus();
					});
					setTimeout(arguments.callee,1000);
				},1000);
			}
			else{
				btnStatus();
				$leftBtn.on('click',function(e){
					currentIndex++;
					if(currentIndex==4) currentIndex=0;
					$currentUl.animate({
						'left': -liWidth
					},function(){
						$currentUl.children().first().appendTo($currentUl);
						$currentUl.css('left',0);
						tabStatus();
					});
				})
				$rightBtn.on('click',function(e){
					currentIndex--;
					if(currentIndex==-1) currentIndex=3;
					$currentUl.css({
						'left': 0-liWidth
					});
					$currentUl.children().last().prependTo($currentUl);
					$currentUl.animate({
						'left': 0
					},tabStatus());
				})
			}
		}
	});
	return this;
}