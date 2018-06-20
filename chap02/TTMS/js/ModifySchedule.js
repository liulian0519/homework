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
	//{value.play_name}}&studio_name={{value.studio_name}}&schedue_time={{value.schedue_time}}&schedue_ticket_price={{value.schedue_ticket_price}}
	var v = parseUrl();
	var x = v['play_name'];
	var y = v['studio_name'];
	var z = v['sched_time'];
	var w = v['sched_ticket_price'];
	//将传过来的值展示到页面上
	console.log(document.getElementById("play_name"));
	document.getElementById("play_name").value =x;
	document.getElementById("studio_name").value = y;
	document.getElementById("schedue_time").value = z;
	document.getElementById("schedue_ticket_price").value = w;
})();
//点击提交按钮 将修改后的值传给后端
function modifySubmit() {
	$.ajax({
			xhrFields:{
				withCredentials: true 
			},
		url: "http://120.77.215.146:8080/ttms3/schedule_update",
		type: "post",
		data: {
			"sched_id":1,
			"play_name": $('#play_name').val(),
			"studio_name": $('#studio_name').val(),
			"sched_time": $('#schedue_time').val(),
			"sched_ticket_price": $('#schedue_ticket_price').val()
		},
		dataType: "json",
		success: function(e) {
			console.log(e);
			console.log("成功");
			alert("修改成功");
			window.location.href = "schedule.html";

		},
		error: function(xhr, errorText, errorType) {
			console.log(xhr);
			console.log("失败")
		}
	});
}