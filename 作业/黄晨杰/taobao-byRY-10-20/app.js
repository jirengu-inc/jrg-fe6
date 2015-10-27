$(".login-wrap li").on("click", function(event){
	if($(this).hasClass("current")){
		return false;
	}else{
		$(".login-wrap li").removeClass();
		$(this).addClass("current");
		var index = $(this).index();
		if(index == 0){
			$(".quick-wrap").css("display", "block");
			$(".name-pwd-wrap").css("display", "none");
		}else{
			$(".quick-wrap").css("display", "none");
			$(".name-pwd-wrap").css("display", "block");
		}
	}
});