var username = document.getElementById('username');
var password = document.getElementById('password');
username.focus();

function user() {
	if(!/^[0-9a-zA-Z]{6,20}$/.test(username.value)) {
		document.getElementById('user_img').innerHTML = "<img src='img/error.png'>";
		document.getElementById('user_tip').innerHTML = "*请输入6-20位的字母或数字的用户名！";
		username.focus();
		return false;
	} else {
		document.getElementById('user_img').innerHTML = "<img src='img/right.png'>";
		document.getElementById('user_tip').innerHTML = "";
		return true;
	}
}

function pwd() {
	if(!/^[0-9a-zA-Z]{6,20}$/.test(password.value)) {
		document.getElementById('pwd_img').innerHTML = "<img src='img/error.png'>";
		document.getElementById('pwd_tip').innerHTML = "*请输入6-20位的字母或数字的密码！";
		password.focus();
		return false;
	} else {
		document.getElementById('pwd_img').innerHTML = "<img src='img/right.png'>";
		document.getElementById('pwd_tip').innerHTML = "";
		return true;
	}

}

function checkAll() {
	if(!user() || !pwd()) {
		return false;
	} else {
		$.ajax({
			xhrFields:{
				withCredentials: true 
			},
			url: "http://120.77.215.146:8080/ttms3/user_loginCheck", //访问路径
			type: "post",
			data: {
				"emp_no": $("#username").val(),
				"emp_pass": $("#password").val()
			},
			dataType: "json",
			success: function(data,status,xhr) {
				console.log(data)
				if(data.msg == "账号密码错误"){
					alert("账号或密码错误");
				}else{
					alert("登陆成功")
					
					window.location.href = "employee.html"
				}
//				if(data.emp_no!=""){
//					alert("ok")
//				}else{
//					alert("fail")
//				}
				//				console.log(Set-Cookie);
//				if(data.msg == "欢迎进入ppx") {
//					console.log(data.msg);
//					var x = data.msg;
//					window.location.href = "employee.html?emp_no="+$("#username").val()
//				} else {
//					alert("用户名或密码错误")
//				}
			},
			error: function(e) {
				console.log(e);
				console.log("失败");
			},

		});

	}
}