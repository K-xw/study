window.onload = function(){

	var sub = document.getElementById("sub");
	sub.onclick = function(){
		alert("是否提交");
	}
	

	/*最底部显示当前时间*/
	var now= new Date( ) ;
	var hour = now.getHours() ;

	document.getElementById("time").innerHTML += (now.getYear()-100+2000)+"年"+(now.getMonth( )+1)+"月"+now.getDate()+"日";
	document.getElementById("time").innerHTML += now.getHours()+"点"+now.getMinutes( )+"分";


	
}
// JavaScript Document
function changehead() {
  i = document.form1.heading.selectedIndex;
  headcolor = document.form1.heading.options[i].value;
  document.getElementById("head1").style.color = headcolor;
}
function changebody() {
  i = document.form1.body.selectedIndex;
  doccolor = document.form1.body.options[i].value;
  document.getElementById("p1").style.color = doccolor;
}
