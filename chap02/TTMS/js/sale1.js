//'use strict'
let row, col;
var v = parseUrl();
console.log(v);
var x = v['row_count'];
var y = v['col_count'];
var price = v['price'];
console.log(price)
//
//console.log(x);
//console.log(y);
//console.log(studio_id);
let array = new Array();
for(let i = 0; i < x; i++) {
	array[i] = new Array();
	for(let j = 0; j < y; j++) {
		array[i][j] = 0;
	}

}
//添加座位
// array[i][j] = 0 未售出
// array[i][j] = 1 选中
// array[i][j] = -1 座位坏掉
// array[i][j] = 2  已售出
function createState(ticket) {
	var arr = new Array();
for(var k = 0;k<ticket.length;k++){
	if(ticket[k].ticket_status==9){
		arr.push(ticket[k])
	}
}
console.log(arr)
//	console.log(ticket.length)
//	for(var i=0;i<ticket.length;i++){
//		if(ticket[i].ticket_status==9){
//		}
////		console.log(ticket[i].ticket_status)
//	}
//	console.log(ticket[0].ticket_status);
//	for(var i=0;i<ticket.length;i++){
//		console.log(ticket[i]);
//	}
	
//	var row = 3;
//	var col = 5;
	
	for(let i = 1; i < x; i++) {
//		console.log(i)
		for(let j = 1; j < y; j++) {
//			console.log(ticket[j])
			let one = document.createElement('div');
			document.getElementById('tet').appendChild(one);
			one.setAttribute('class', 'oneDiv');
			let sateImage = document.createElement('img');
			let num = document.createElement('p');
			num.innerText = i + ',' + j;
			sateImage.setAttribute("class", "sate");
			sateImage.setAttribute("id", "sate" + i + j);
			sateImage.setAttribute('data-toggle', 'modal');
			sateImage.setAttribute('data-target', '#myModal');
				for(var s =0;s<arr.length;s++){
					if(i==4&&j==5&&arr[s]){
//						console.log('kkkk')
//						var c =document.getElementById("sate"+i+j);
//						console.log(c);

						sateImage.src = 'img/select.png';
//						console.log("dkk")
					}else{
//						console.log("else")
						sateImage.src = 'img/seat.png';
					}
				}
				

			
			sateImage.addEventListener('click', function getState() {
				row = i;
				col = j;
				array[i - 1][j - 1] = 1;
				let where = document.getElementById('title');
				where.innerHTML = '请选择第' + i + '行第' + j + '列状态：';
				//alert(sateImage.id);
				let select = sateImage.id;
				
				document.getElementById(select).src = 'img/seatP.png'
				console.log(row, col);
			});
			let change = document.getElementById('update');
			change.onclick = function changeState() {
				let imageId = "sate" + row + col;
				let newState = document.getElementById(imageId);
				let seatState = document.getElementById('seatState');

				let index = seatState.selectedIndex;
				let value = seatState.options[index].value;
				//状态为未售出
				if(value == 'active') {
					array[row - 1][col - 1] = 0;
					newState.src = 'img/seat.png';
					console.log('未售出');
				
//				} else if(value == 'broken') {
//					array[row - 1][col - 1] = -1;
//					newState.src = 'img/broken.png';
//					console.log('座位坏掉');

				//状态为售出
				} else if(value == 'aisle') {
					array[row - 1][col - 1] = 2;
					console.log('售出');
					console.log("zhe"+row);
					//向后端发送请求传递 row col studio_id
					moveRow(row,col);
					//渲染票价 并创建button			
					var ticket_price = $('#price').html();
					$("#price").html(price);
					console.log($("#price").html());
					//一个确定购买的按钮 id为buy
					var v = document.getElementById('payment');
					var input = document.createElement("input");  
   					input.type = "button"; 
   					input.setAttribute("class","btn btn-primary");
   					input.setAttribute("id","buy");
   					input.value = "确定购买";  
   					v.appendChild(input);
   					$("#buy").on("click",function(){
   						BuyTicket()
   					})
   					//这个button的一个点击事件像后端发送请求 传递tickets
// 					　$("#buy").on("click", function() {
// 						alert("kfk")
// 						BuyTicket();
// 					});
					
				}
			}
			one.appendChild(sateImage);
			one.appendChild(num);

		}
	}
}

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
$(function() {
//	createState();
	var studio_id = v['studio_id'];
	var sched_id = v['sched_id'];
	$.ajax({
		type: "post",
		url: "http://120.77.215.146:8080/ttms3/ticket_listByStudio_id",
		dataType:"json",
		data: { 
			"studio_id": studio_id,
			"sched_id":sched_id
		},
		success: function(e) {
			//如果成功应该返回ticket_status,重新渲染页面画出座位信息
			console.log(e)
			var lengthc = e.length;
			var ticket = new Array();
			for(var i=0;i<lengthc;i++){
				ticket[i] = e[i][0];
			}
//ticket[0] = e[0][0];
//ticket[1] = e[1][0];
			console.log(ticket);
			createState(ticket) 
//			var c = { result: ticket }
//			console.log(c);
//			var html = template('arttep', c);
//			$("#tet").html(html);
//if(ticket[0].status)
			
		},
		error: function(e) {
			console.log(e)
		}
	});
	
});
//传递studio_id row col 接收 ticketstatus
function moveRow(row,col){
	console.log("这是row:" + row);
	var studio_id = v['studio_id'];
	var sched_id = v['sched_id'];
	console.log(sched_id)
		$.ajax({
		type: "post",
		url: "http://120.77.215.146:8080/ttms3/ticket_update",
		dataType:"json",
		data: 
		{
			"studio_id": studio_id,
			"seat_row":row,
			"seat_column":col,
			"sched_id":sched_id
		},
		success: function(e) {
			//如果成功应该拿到ticket_status,重新渲染页面画出座位信息
//			createState(ticket); 
			console.log(e)
			var ticket = new Array();
			ticket.push(e);
//			var lengthc = e.length;
//			var ticket = new Array();
//			for(var i=0;i<lengthc;i++){
//				ticket[i] = e[i][0];
//			}
//ticket[0] = e[0][0];
//ticket[1] = e[1][0];
			console.log(ticket);
//			createState(ticket) 
		},
		error: function(e) {
			console.log(e)
		}
	});
}

//传递price接收success： ok 弹出购买成功
function BuyTicket(){
	//
	$.ajax({
		type: "post",
		url: "http://120.77.215.146:8080/ttms3/sale_add ",
		dataType:"json",
		data: 
		{
			"sale_payment":price,
			"emp_no":"000001"
		},
		success: function(e) {
			//如果成功应该拿到ticket_status,重新渲染页面画出座位信息
			//createState() 
			console.log(e)
		},
		error: function(e) {
			console.log(e)
		}
	});
}
