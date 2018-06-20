function tijiao() {
	var b = $('#schedue_time').val();
	console.log(b)
//	b = b.replace("T"," ");console.log(b)
	$.ajax({
			xhrFields:{
				withCredentials: true 
			},
		url: "http://120.77.215.146:8080/ttms3/schedule_add",
		type: "post",
		data: {
			"play_name": $('#play_name').val(),
			"studio_name": $('#studio_name').val(),
			"sched_time": $('#schedue_time').val(),
			"sched_ticket_price": $('#schedue_ticket_price').val()
		},
		dataType: "json",
		success: function(response, status, xhr) {
			//						console.log(response);
			//						console.log("成功");
			alert("添加成功");
			window.location.href = "schedule.html";

		},
		error: function(xhr, errorText, errorType) {
			console.log(xhr);
			console.log("失败")
		}
	});
}