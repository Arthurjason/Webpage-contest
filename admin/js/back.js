$('document').ready(function(){
	$.ajax({
		url		:"./web/person.php",
		dataType:"json",
		type	:"post",
		data    :"type=1",
		success :function(data){
			//var data = data.data;
			if(data){
				var info = data.data;
				var str = '';
				for (var i = 0; i < info.length; i++) {
					str += '<tr>';
					for (var key in info[i]) {
						str += '<td>' + info[i][key] + '</td>';
					}
					str += '</tr>';
				}
				$('.sheji').append(str);
			}
		}
	});
	$.ajax({
		url		:"./web/person.php",
		dataType:"json",
		type	:"post",
		data    :"type=2",
		success :function(data){
			//var data = data.data;
			if(data){
				var info = data.data;
				var str = '';
				for (var i = 0; i < info.length; i++) {
					str += '<tr>';
					for (var key in info[i]) {
						str += '<td>' + info[i][key] + '</td>';
					}
					str += '</tr>';
				}
				$('.kaifa').append(str);
			}
		}
	});
	$.ajax({
		url		:"./web/person.php",
		dataType:"json",
		type	:"post",
		data    :"type=3",
		success :function(data){
			//var data = data.data;
			if(data){
				var info = data.data;
				var str = '';
				for (var i = 0; i < info.length; i++) {
					str += '<tr>';
					for (var key in info[i]) {
						str += '<td>' + info[i][key] + '</td>';
					}
					str += '</tr>';
				}
				$('.tuandui').append(str);
			}
		}
	});
});