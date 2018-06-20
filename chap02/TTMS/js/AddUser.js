function tijiao() {
	var file = document.getElementById("head_path").files[0];
	var emp_no = $('#emp_no').val();
	var emp_pass = $('#emp_pass').val();
	var type = $('#type').val();
	var data = new FormData; //创建一个FormData对象
	data.append("uploadedImageFile", file);
	data.append("emp_no", emp_no);
	data.append("emp_pass", emp_pass);
	data.append("type", type);

	$.ajax({
			xhrFields:{
				withCredentials: true 
			},
		url: "http://120.77.215.146:8080/ttms3/user_add ",
		type: "post",
		contentType: "multipart/form-data",
		contentType: false,
		processData: false,
		data: data,
		dataType: "json",
		success: function(response, status, xhr) {
			console.log(response);
			console.log("成功");
			alert("添加成功");
			window.location.href = "user.html";

		},
		error: function(xhr, errorText, errorType) {
			console.log(xhr);
			console.log(errorType);

			console.log("失败")
		}
	});
}