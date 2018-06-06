
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


	//轮播图片
    //1.老三步。获取相关元素。
    var box = document.getElementById("all");
    var ul = box.children[0].children[0];
    var ol = box.children[0].children[1];
    var ulLiArr = ul.children;
    //2.补齐相互盒子
     //1.复制第一张图片所在的li，填入所在的ul中。
    var newLi = ulLiArr[0].cloneNode(true);
    ul.appendChild(newLi);
        //2.生成相关的ol中的li。
    for(var i=0;i<ulLiArr.length-1;i++){
        var newOlLi = document.createElement("li");
        newOlLi.innerHTML = i+1;
        ol.appendChild(newOlLi);
    }
    //3.点亮第一个ol中的li。
    var olLiArr = ol.children;
    ol.children[0].className = "current";
    //3.鼠标放到小方块儿上，轮播图片。
    for(var i=0;i<olLiArr.length;i++){
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function () {
            for(var j=0;j<olLiArr.length;j++){
                olLiArr[j].className = "";
            }
            olLiArr[this.index].className = "current";
            animate(ul,-this.index*ul.children[0].offsetWidth);
            key = square = this.index;
        }
    }
    //4.添加定时器。
    var timer = null;
    var key = 0;
    var square = 0;
    timer = setInterval(autoPlay,2000);

    function autoPlay(){
        key++;
        square++;
        if(key>olLiArr.length){
            key=1;
            ul.style.left = 0;
        }
        animate(ul,-key*ul.children[0].offsetWidth);

        square = square>olLiArr.length-1?0:square;
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "current";
    }
    //5.鼠标移开开启定时器，鼠标放上去开启定时器。
    box.onmouseover = function () {
        clearInterval(timer);
    }
    box.onmouseout = function () {
        timer = setInterval(autoPlay,2000);
    }
    //6.左右切换的按钮。
    var btnArr = box.children[0].children[2].children;
    btnArr[0].onclick = function () {
        key--;
        square--;
        if(key<0){
            key=4;
            ul.style.left = -3*ul.children[0].offsetWidth + "px";
        }
        animate(ul,-key*ul.children[0].offsetWidth);

        square = square<0?olLiArr.length-1:square;
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "current";
    }

    btnArr[1].onclick = function () {
        autoPlay();
    }

    //  基本封装
    function animate(obj,target) {
        clearInterval(obj.timer);
        var speed = obj.offsetLeft < target ? 15 : -15;
        obj.timer = setInterval(function() {
            var result = target - obj.offsetLeft;
            obj.style.left = obj.offsetLeft + speed  + "px";
            if(Math.abs(result) <= 15) {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        },10);
    }

    /*最底部显示当前时间*/
    var now= new Date( ) ;
    var hour = now.getHours() ;

    document.getElementById("time").innerHTML += (now.getYear()-100+2000)+"年"+(now.getMonth( )+1)+"月"+now.getDate()+"日";
    document.getElementById("time").innerHTML += now.getHours()+"点"+now.getMinutes( )+"分";

}