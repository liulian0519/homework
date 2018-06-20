window.onload = function () {
    $.ajax({
        url: "http://120.77.215.146:8080/ttms3/studio_list", //访问路径
        type: "get",
        dataType: "json",
        success: function (e) {
            console.log(e);
            //             		console.log("成功");
            var c = {
                result: e
            };
            console.log(c);

            var html = template('arttep', c);
            $("#tet").html(html);
        },
        error: function (e) {
            console.log(e);
            console.log("失败");
        }

    });
}


function addStudio() {

    $.ajax({
        url: "http://120.77.215.146:8080/ttms3/studio_add", //访问路径
        type: "post",
        data: {
            "studio_name": document.getElementById('studio_name').value,
            "studio_row_count": document.getElementById('studio_row_count').value,
            "studio_col_count": document.getElementById('studio_col_count').value,
            "studio_introduction": document.getElementById('studio_introduction').value
        },
        // dataType :"json",     
        success: function (e) {
            console.log(e);
            //console.log("成功");

            window.location.href = "studio.html"

        },
        error: function (e) {
            console.log(e);
            console.log("失败");

        }

    });
}


function deleteStudio(id) {
    console.log(id);
    $.ajax({
        url: "http://120.77.215.146:8080/ttms3/studio_delete", //访问路径
        type: "post",
        data: {
            "studio_id": id
        },
        dataType: "json",
        success: function (e) {
            console.log(e);
            //console.log("成功");

            window.location.href = "studio.html"

        },
        error: function (e) {
            console.log(e);
            console.log("失败");
        }

    });
}


function parseUrl() {
    var url = decodeURIComponent(location.href);
    var i = url.indexOf('?');

    if (i == -1) return;
    var querystr = url.substr(i + 1);
    var arr1 = querystr.split('&');
    var arr2 = new Object();
    for (i in arr1) {
        var ta = arr1[i].split('=');
        arr2[ta[0]] = ta[1];
    }
    return arr2;
}

var v = parseUrl();
$("#studio_name").val(v['studio_name']);
$("#studio_col_count").val(v['studio_col_count']);
$("#studio_row_count").val(v['studio_row_count']);
$("#studio_introduction").val(v['studio_introduction']);
$("#studio_id").val(v['studio_id']);

function modifyStudio() {

    $.ajax({
        url: "http://120.77.215.146:8080/ttms3/studio_update", //访问路径
        type: "post",
        data: {
            "studio_id": document.getElementById('studio_id').value,
            "studio_name": document.getElementById('studio_name').value,
            "studio_row_count": document.getElementById('studio_row_count').value,
            "studio_col_count": document.getElementById('studio_col_count').value,
            "studio_introduction": document.getElementById('studio_introduction').value
        },
        // dataType :"json",     
        success: function (e) {
            console.log(e);
            console.log("成功");

            window.location.href = "studio.html"

        },
        error: function (e) {
            console.log(e);
            console.log("失败");
        }

    });
}


function searchStudio() {
    $.ajax({
        url: "http://120.77.215.146:8080/ttms3/studio_findById", //访问路径
        type: "post",
        data: {
            "studio_id": document.getElementById('searchstudio').value

        },
        dataType: "json",

        success: function (e) {
            console.log(e);
            console.log("成功");
            var s = new Array();
            s.push(e);
            console.log(s);
            var c = {
                result: s
            };
            // window.location.href = "studio.html"
            var html = template('arttep', c);
            $("#tet").html(html);
        },
        error: function (e) {
            console.log(e);
            console.log("失败");

        }

    });
}
