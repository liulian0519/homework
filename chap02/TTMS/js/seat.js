//'use strict'

let row,col;

//row = 
var v = parseUrl();
var x= v['studio_row_count'];
var y = v['studio_col_count'];
console.log(x);
console.log(y)

let array = new Array();
for(let i = 0;i<x;i++){
    array[i] = new Array();
    for(let j = 0;j<y;j++){
        array[i][j] = 0;
    }

}
window.onload = function createState() {
//	var row = 15;
//	var col = 15;
    for(let i = 1;i<=x;i++){
        for(let j = 1;j<=y;j++) {
            let one = document.createElement('div');
            document.getElementById('seat').appendChild(one);
            one.setAttribute('class', 'oneDiv');
//          if()

//var gg = document.querySelectorAll("div[class='oneDiv']");
//console.log(gg.length)
//for(i=0;i<gg;i++){
//	sum++;
//	console.log(sum)
//}
//console.log(gg.length)
            let sateImage = document.createElement('img');
            let num = document.createElement('p');
            num.innerText = i + ',' + j;
            sateImage.setAttribute("class", "sate");
            sateImage.setAttribute("id", "sate"+i+j);
            sateImage.setAttribute('data-toggle', 'modal');
            sateImage.setAttribute('data-target', '#myModal');
            sateImage.src = 'img/seat.png';
            sateImage.addEventListener('click', function getState() {
                row = i;
                col = j;
                array[i-1][j-1] = 1;
                let where = document.getElementById('title');
                where.innerHTML = '请选择第' + i + '行第' + j + '列状态：';
                //alert(sateImage.id);
                let select = sateImage.id;
                document.getElementById(select).src = 'img/select.png'
                console.log(row, col);
            });
            let change = document.getElementById('update');
            change.onclick = function changeState() {
                let imageId = "sate"+row+col;
                //alert(imageId);
                let newState = document.getElementById(imageId);
                let seatState = document.getElementById('seatState');

                let index = seatState.selectedIndex;
                let value = seatState.options[index].value;
                if(value == 'active'){
                    array[row-1][col-1] = 0;
                    newState.src = 'img/seat.png';
                    console.log('座位正常');
                }
                else if(value == 'broken'){
                    array[row-1][col-1] = -1;
                    newState.src = 'img/broken.png';
                    console.log('座位坏掉');

                }
//              else if(value == 'aisle'){
//                  array[row-1][col-1] = 2;
//                  console.log('已售出');
//              }
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