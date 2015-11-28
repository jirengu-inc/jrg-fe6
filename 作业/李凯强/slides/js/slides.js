$.fn.slides=function(isCycle){
	var $ul=this;
	$ul.each(function(){
		var currentIndex=0;
		var $currentUl=$(this);
		var length=$currentUl.children().length;
		var liWidth=$currentUl.children().first().width();
		$currentUl.width(liWidth*length);
		if(!isCycle){
			setTimeout(function(){
				currentIndex++;
				if(currentIndex==4)
					currentIndex=0;
				$currentUl.animate({
					'left': -currentIndex*liWidth
				});
				setTimeout(arguments.callee,1000);
			},1000);
		}
		else{
			setTimeout(function(){
				$currentUl.animate({
					'left': -liWidth
				},function(){
					$currentUl.children().first().appendTo($currentUl);
					$currentUl.css('left',0);
				});
				setTimeout(arguments.callee,1000);
			},1000);
		}
	});
	return this;
}