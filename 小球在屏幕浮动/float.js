window.onload = function (argument) {
	var ad = document.getElementById('main');
	go(ad,true,false);
}
function go(obj,toRight,toBottom){
	var left = obj.offsetLeft;
	var top = obj.offsetTop;
	var move = function(){
		if ((obj.offsetWidth+obj.offsetLeft) >= window.innerWidth) {
			toRight = false;
		}
		if ((obj.offsetHeight+obj.offsetTop) >= window.innerHeight) {
			toBottom = false;
		}
		if (obj.offsetTop <= 0) {
			toBottom = true;
		}
		if (obj.offsetLeft <= 0) {
			toRight = true;
		}
		obj.style.left = (toRight?left+=10:left-=10)+"px";
		obj.style.top = (toBottom?top+=10:top-=10)+"px";
		setTimeout(move,30);
	}
	setTimeout(move,30);
}