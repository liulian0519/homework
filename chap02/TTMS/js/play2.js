function addPlay() {
	//var f = document.getElementById('play_lang').value;
	//console.log(f)
	var play_type = $('#play_type').val();

	var play_lang = $("#play_lang").val();
	var play_name = $('#play_name').val();
	var play_introduction = $('#play_introduction').val();
	var file = document.getElementById("play_image").files[0];
	var play_length = $('#play_length').val();
	var play_ticket_price = $("#play_ticket_price").val();
	var play_status = $("#play_status").val();

//	console.log(play_type);
//	console.log(play_lang);
//	console.log(play_name);
//	console.log(play_introduction);
//	console.log(play_length);
//	console.log(play_ticket_price);
//	console.log(play_status);

	var data = new FormData;
	data.append("play_type_id", play_type);
	data.append("play_lang_id", play_lang);
	data.append("play_name", play_name);
	data.append("play_introduction", play_introduction);
	data.append("uploadedImageFile", file);
	data.append("play_length", play_length);
	data.append("play_ticket_price", play_ticket_price);
	data.append("play_status", play_status);

	console.log(data)
	$.ajax({
		url: "http://120.77.215.146:8080/ttms3/play_add", //访问路径
		type: "post",
		contentType: "multipart/form-data",
		contentType: false,
		processData: false,
		data: data,
		dataType: "json",

		success: function(e) {
			console.log(e);
			//console.log("成功");
			alert("恭喜添加成功！")
			window.location.href = "play.html"

		},
		error: function(e) {
			alert("好像服务器出错了呀！")
			console.log(e);
			console.log("失败");

		}

	});
}

function deletePlay(id) {
	console.log(id)
	$.ajax({
		url: "http://120.77.215.146:8080/ttms3/play_delete", //访问路径
		type: "post",
		data: {
			"play_id": id
		},
		dataType: "json",
		success: function(e) {
			console.log(e);
			//console.log("成功");
			alert("删除成功")
			window.location.href = "play.html"

		},
		error: function(e) {
			console.log(e);
			console.log("失败");
		}

	});
}