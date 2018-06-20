(function() {
	//解析url
	function parseUrl() {
		var url = decodeURIComponent(location.href); //解决中文乱码问题
		var i = url.indexOf('?');
		if(i == -1) return;
		var querystr = url.substr(i + 1);
		var arr1 = querystr.split('&');
		var arr2 = new Object();
		for(i in arr1) {
			var ta = arr1[i].split('=');
			arr2[ta[0]] = ta[1];
		}
		return arr2;
	}
	//拿到传过来的值
	var v = parseUrl();
	var x = v['number'];
	var y = v['pass'];
	var z = v['type'];
	//将传过来的值展示到页面上
	console.log(document.getElementById("emp_no"))
	document.getElementById("emp_no").value =x;
	document.getElementById("emp_pass").value = y;
	document.getElementById("type").value = z;

})();
//点击提交按钮 将修改后的值传给后端
function modifySubmit() {
	$.ajax({
			xhrFields:{
				withCredentials: true 
			},
		url: "http://120.77.215.146:8080/ttms3/user_update",
		type: "post",
		data: {
			"emp_no": $('#emp_no').val(),
			"emp_pass": $('#emp_pass').val(),
			"type": $('#type').val()

		},
//		dataType: "json",
		success: function(response, status, xhr) {
			console.log(response);
			console.log("成功");
			alert("修改成功");
			window.location.href = "user.html";

		},
		error: function(xhr, errorText, errorType) {
			console.log(xhr);
			console.log("失败")
		}
	});
}