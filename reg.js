$(function(){
	var $username=$('#usernameInput');
	var $phone=$('#phoneInput');
	var $pwd=$('#pwdInput');
	var $check2=$('#check2');
	var $check3=$('#check-validate-message');
	var $usernamemsg=$('usernameInput-validate-message');
	var $phonemsg=$('phoneInput-validate-message');
	var $pwdmsg=$('pwdInput-validate-message');

	$username.focus(function(){
		$usernamemsg.html('用户名仅支持中英文，数字和下划线，且不能为纯数字');
	})
	$phone.focus(function(){
		$phonemsg.html('手机密码应为16位纯数字');
	})
	$pwd.focus(function(){
		$pwdmsg.html('密码为6-16位子母加数字');
	})
	$username.focusout(function(){
		if(!(/^[0-9][a-zA-Z_\u4e00-\u9fa5]+[0-9]$/.test($tel))){ 
			$(usernamemsg).html('用户名格式不正确');
			$username.select();
		  }

	})
	$phone.focusout(function(){
		if(!(/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test($tel))){ 
			$(phonemsg).html('手机号码格式不正确');
			$phone.select();
		  }
		  
	})
	$pwd.focusout(function(){
		if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test($tel))){ 
			$(pwdmsg).html('密码格式不正确');
			$pwd.select();
		  }
		  
	}) 
	$check2.click(function(){
        var num = 60;
        var t=setInterval(function() {
          if (num>1) {
              num--;
              $check2.html("重新发送(" + num + ")");
          }else {
              $check2.html('获取验证码');
              clearInterval(t);
              $check3.html('请求超时请稍后再试')
          }
		}, 1000)
	})


})





