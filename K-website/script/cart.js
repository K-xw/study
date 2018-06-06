window.onload = function() {
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