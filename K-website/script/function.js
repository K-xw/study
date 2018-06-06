window.onload = function () {
	
	/*最底部显示当前时间*/
	var now= new Date( ) ;
	var hour = now.getHours() ;

	document.getElementById("time").innerHTML += (now.getYear()-100+2000)+"年"+(now.getMonth( )+1)+"月"+now.getDate()+"日";
	document.getElementById("time").innerHTML += now.getHours()+"点"+now.getMinutes( )+"分";

			
			//导航条的显示
			var showli = document.getElementsByClassName("show_li");
			var hidediv = document.getElementsByClassName("hide_div");
	
			console.log(hidediv.length);
	
			for(var i=0; i<2; i++) {
				showli[i].id = i;

				showli[i].onmouseover = function() {
					for(var j=0; j<2; j++) {
						hidediv[j].style.display = 'none';
					}
					hidediv[this.id].style.display = 'block';
				}
	

	
				hidediv[i].onmouseout = function() {
					for(var j=0; j<2; j++) {
						this.style.display = 'none';
					}
				}
	
			}
	
}