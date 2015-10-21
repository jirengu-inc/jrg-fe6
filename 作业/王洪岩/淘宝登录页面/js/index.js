$(function (){
    var Inp = $('.inp-name'),
        idInp = $('#inp-name'),
        idPass = $('#inp-password'),
        Con = $('.con');

	Inp.each(function(){
       $(this).focus(function(){
		   $(this).parents('.inp').css('outline','2px solid #a7c9ec');
	   });
	});
	Inp.blur(function(){
        $('.inp').css('outline','1px solid #dedede')
	});
	idInp.bind('input propertychange', function(){
		if($(this).val() != 0){
			Con.show();
		}else{
			Con.hide();
		}
	});
	Con.click(function(){
		idInp.val("");
		Con.hide();
	});
    function col(){
        $('.inp').css('outline','1px solid #ff8e8e');
		$('.prompt').show();
    }
	$('.but').click(function(){
		if (idInp.val() == "" && idPass.val() == "") {
			col();
			$('.prompt span').text('请输入账户名和密码');
		}
		if(idInp.val() == "" && idPass.val() != ""){
			col();
			$('.prompt span').text('请输入账户名');
		}
		if(idPass.val() == "" && idInp.val() != ""){
			col();
			$('.prompt span').text('请输入密码');
		}
		if(idPass.val() != "" && idInp.val() != ""){
			$(this).val('正在登录....');
			$('.prompt').hide();
		}
	});
});