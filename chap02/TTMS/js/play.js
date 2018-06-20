window.onload=function() {  
   $.ajax({  
   		xhrFields:{
				withCredentials: true 
			},
                  url : "http://120.77.215.146:8080/ttms3/play_list",//访问路径
                  type:"get",  
                  dataType :"json",     
              	success:function(e){ 
              		console.log(e)
//               		console.log(e[0].data_dict.dict_value);
                 		console.log("成功");
//               		console.log(e.data_dict.dict_value)
                 		var c={result:e}
//               		console.log(c.data_dict.dict_value);
                 		
					var html = template('arttep', c);
					$("#tet").html(html);
               },     
              error:function(e){  
                  console.log(e);
                  console.log("失败");
              }  
    
          });  
          }
