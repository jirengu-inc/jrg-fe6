$.fn.hoverToggle=function(className){
	this.each(function(index,dom){
		var _self=$(dom);
		_self.on('mouseover',function(e){
			_self.children().first().addClass(className)
									.css({
										'border-left-color':'#ddd',
										'border-right-color': '#ddd'
									});
			_self.children('section').show();
		}).on('mouseout',function(e){
			_self.children().first().removeClass(className)
									.css({
										'border-left-color':'#f1f1f1',
										'border-right-color': '#f1f1f1'
									});
			_self.children('section').hide();
		})
	});
	return this;
}