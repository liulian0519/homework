//判断应该如何查询
function formatDate(now) { 
     var year=now.getFullYear(); 
     var month=now.getMonth()+1; 
     var date=now.getDate(); 
     var hour=now.getHours(); 
     var minute=now.getMinutes(); 
     var second=now.getSeconds(); 
     return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
} 
$(function() {
	console.log(location.href);
	var href = location.href;
	var c =href.indexOf("play_id")
	if(c!=-1){
		selectById()
	}else{
		select()
	}
//	var x =parseUrl();
//	var y = x.indexOf('play_id')
//	console.log(y);
//	if(x.indexOf('play_id'))
//	selectById()
//	c = document.getElementById("yan");
//	if(c!=null && ){
//		select()
//	}else{
//		selectById()
//	}
//	console.log(document.getElementById("yan").Text)
	
//	document.getElementsByTagName("a");
//	console.log(document.getElementsByTagName("a"))
//	select()
//	console.log(history.go(-1));
	
});
//进入则查询
function select(){
	$.ajax({
		type: "post",
		url: "http://120.77.215.146:8080/ttms3/schedule_list",
		dataType: "json",
		success: function(e) {
			console.log(e)
				for(var i=0;i<e.length;i++){
					var sss = e[i].sched_time;
				 	var d=new Date(sss)
				 	var time = formatDate(d)
//				 	console.log(formatDate(d))
console.log(time)
				 	e[i].sched_time =time
//				 	e[i].push(d);
				}
				console.log(e);
			//timestampToTime
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
//通过play_id查询
function selectById(){
	//解析
//par
	//拿到传过来的值
	var v = parseUrl();
	var x = v['play_id'];

	//将传过来的值展示到页面上
	console.log(x);
	$.ajax({
		type: "post",
		url: "http://120.77.215.146:8080/ttms3/schedule_listByPlay_id",
		dataType: "json",
		data:{"play_id":x},
		success: function(e) {
			console.log(e)
//			console.log(e[0].play.play_name)
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
//解析
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
//通过id删除演出计划
function deleteSchedule(n) {
	console.log(n);
	$.ajax({
		type: "post",
		url: "http://120.77.215.146:8080/ttms3/schedule_delete",
		dataType:"json",
		data: { "sched_id": n },
		success: function(e) {
			console.log("jdj" + e)
			alert("删除成功");
			window.location.href = "schedule.html";
		},
		error: function(e) {
			alert("有点小问题呦")
		}
	});
}
