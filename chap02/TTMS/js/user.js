//通过id删除用户信息成功 注意删除和添加无论成功还是失败，返回值必须是json格式
function deleteUser(n) {
	console.log(n);
	$.ajax({
			xhrFields:{
				withCredentials: true 
			},
		type: "post",
		url: "http://120.77.215.146:8080/ttms3/user_delete",
		//      dataType:"json",
		data: { "emp_no": n },
		success: function(e) {
			console.log("jdj" + e)
			alert("删除成功");
			window.location.href = "user.html";
		},
		error: function(e) {
			alert("有点小问题呦")
		}
	});
}
//通过id搜索信息  
function SearchById() {
	$.ajax({
			xhrFields:{
				withCredentials: true 
			},
		url: "http://120.77.215.146:8080/ttms3/user_search",
		type: "post",
		data: { "emp_no": $('#searchById').val() },
		dataType: "json",
		success: function(e) {
			console.log(e);
//			var h = new Array();		
//			h.push(e)
//			console.log(h);
			var c = {result:e};
			console.log(e)
			var html = template('arttep', c);
			$("#tet").html(html);
		},
		error: function(xhr, errorText, errorType) {
			console.log(xhr);
			console.log("失败")
		}
	});
}
//拿到传过来的东西
//function importId(c) {
//	var el = document.querySelectorAll('a'); //拿到所有a标签
//	//将a标签的所有id属性去掉
//	for(var i = 0; i < el.length; i++) {
//		el[i].removeAttribute('id');
//	}
//	//给当前的a标签加上一个特殊的id ss
//	$("." + c).attr('id', "ss")
////	var s = document.getElementById("ss").innerHTML;
////	console.log(s)
//	//调用分页方法	
//	dispatch();
//
//}
////分页的每一个按钮要触发的方法
//function test01(c){
//	importId(c);
//}
//function test02(c) {
//	importId(c);
//}
//
//function test03(c) {
//	importId(c);
//}
//
//function test04(c) {
//	importId(c);
//}
//
//function test05(c) {
//	importId(c);
//}
////这是分页的主要函数
//function dispatch() {
//	var c = document.getElementById("ss").innerHTML;
//	$.ajax({
//		type: "get",
//		url: "http://120.77.215.146:8080/ttms3/user_listByPage",
//		data: { "start": c, "count":2},
//		dataType: "json",
//		success: function(e) {
//
//			var c = { result: e }
//			console.log(c);
//			var html = template('arttep', c);
//			$("#tet").html(html);
//		},
//		error: function(e) {
//			console.log(e);
//			console.log("失败")
//		}
//	});
//}
////分页查询用户信息
$(function() {
	dispatch()
});
function dispatch() {
	$.ajax({
			xhrFields:{
				withCredentials: true 
			},
		type: "get",
		url: "http://120.77.215.146:8080/ttms3/user_list ",
		dataType: "json",
		success: function(e) {
			var c = { result: e }
			console.log(c);
			var html = template('arttep', c);
			$("#tet").html(html);
		},
		error: function(e) {
			console.log(e);
			console.log("失败")
		}
	});
}