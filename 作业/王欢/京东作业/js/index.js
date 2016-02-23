$(".menu-item").on('mouseover',function(){
	$(this).css({'background':'#fff','color':'#C81623'});
	$(this).find('i').css({'display':'none'});
	$(this).siblings().css({'background':'#C81623','color':'#fff'});
	$(this).siblings().find('i').css({'display':'block'});
});