//鼠标hover事件
//定义一个setInterval 函数变量；
var timer;
var timer2;
var windowHeight;
function eventmouseHover(first ,second){
	first.mouseover(function(){
		console.log('123');
		second.css('display','block');
	});
	first.mouseout(function(){
		console.log('456');
		second.css('display','none');
	});
}
//function eventmouseHover2(first ,second){
//	for(let  i = 0,t=40; i< first.length;i++,t+=32 )
//	{
//		//console.log(t);
//		first.eq(i).mouseover(function(){
//
//
//			console.log(i);
//			console.log(t);
//			first.eq(i).children('.crousrNav-a2').css({
//					 color:'rgb(45,181,156)',
//					 'text-indent':'30px',
//				 });
//				second.eq(i).css({
//					display:'block',
//					top:-t+'px',
//				});
//			});
//		first.eq(i).mouseout(function(){
//				//console.log('456');
//				$(this).children('.crousrNav-a2').css({
//					color:'#fffefe',
//					'text-indent':'20px',
//				});
//			second.eq(i).css('display','none');
//			});
//	}
//}
//课程列表单函数；
function  eventmouseHover2(first,second) {
	first.mouseenter(function () {
		var t = $(this).index();
		var x = $(this).index();
		var t= 40+t*32;
		str = -t + 'px';
		console.log(str);
		$(this).children('.crousrNav-a2').css({
			color: 'rgb(45,181,156)',

		});
		$(this).children('.crousrNav-a2').animate({
			'text-indent': '30px',
	},300);
		$(this).children('.crousrNavkind').css({
			top:str,
			display:'block'
		});
	});
	first.mouseleave(function(){
		$(this).children('.crousrNav-a2').stop();
		$(this).children('.crousrNav-a2').css({
			color:'#fffefe',

		});
		$(this).children('.crousrNav-a2').animate({
			'text-indent': '20px',
		},300);
		$(this).children('.crousrNavkind').css({
			display:'none',
		});
	})
}

function lunbo(){
	var lunbo = $('.lunbo');
	var left = Number(lunbo.css('left').split('px')[0]);
	if(left>=-4305){
		if(left==-4305)
			{
				$('.lunbo').css('left','-1845px');
			}
		$('.lunbo').animate({
			left:'-=615'
		},500);
	}
}
$('.lunbo-left').click(function(){
	var lunbo1 = $('.lunbo');
	$('.lunbo').finish();
	clearInterval(timer);
	var left = Number(lunbo1.css('left').split('px')[0]);
	if(left>=-4305){
		if(left==-4305)
		{
			$('.lunbo').css('left','-1845px');
		}
		$('.lunbo').animate({
			left:'-=615'
		},500);
	}
   timer = setInterval(lunbo,3000);
});
$('.lunbo-right').click(function(){
	var lunbo1 = $('.lunbo');
	$('.lunbo').finish();
	clearInterval(timer);
	var left = Number(lunbo1.css('left').split('px')[0]);
	if(left<=-1845){
		if(left==-1845)
		{
			console.log('123');
			$('.lunbo').css('left','-4305px');
		}
		$('.lunbo').animate({
			left:'+=615'
		},500);
	}
	timer = setInterval(lunbo,3000)
});
timer = setInterval(lunbo,3000);

//改进的轮播图
function lunbo2(width,number,jqobj ,jqobj2){
	//console.log(jqobj);
	//console.log(jqobj2);
	//console.log(width);
	var left = Number(jqobj.css('left').split('px')[0]);
	//console.log(left)
	var number = width*(number-1);
	if(left==-number){
		jqobj.animate({left:'+='+width},1000);
		jqobj2.animate({left:'+='+width},1000);
		$('.digal ul li').eq(1).css('background','cyan');
		$('.digal ul li').eq(0).css('background','white');
	}
	else{
		jqobj.animate({left:'-='+width},1000);
		jqobj2.animate({left:'-='+width},1000);
		$('.digal ul li').eq(0).css('background','cyan');
		$('.digal ul li').eq(1).css('background','white');
	}
}
function call(){
	lunbo2(226,2,$('.contain'),$('.contain2'));
}
timer2 = setInterval(call,3000);

$('.digal ul li').hover(function(){
	var t = $(this).index();
	console.log(t);
	$('.contain2').finish();
	$('.contain').finish();
	clearInterval(timer2);
	console.log($('.contain2').css('left'));
    if($(this).css('background').indexOf('rgb(255,255,255)')){

		if(t==0){

			$('.contain').animate({left:'-226px'},1000);
			$('.contain2').animate({left:'-226px'},1000);
			$(this).css('background','cyan').siblings().css('background','white');
		}
	}
	if($(this).css('background').indexOf('rgb(0,255,255)')){
		if(t==1) {
			console.log(123);
			$('.contain2').animate({left: '0px'},1000);
			$('.contain').animate({left: '0px'},1000);
			$(this).css('background', 'cyan').siblings().css('background', 'white');
		}
	}
    timer2=setInterval(call,3000);
})





$.ajax({
		type:'post',
		url:'nav.txt',
		success:function(data){
			var msg = JSON.parse(data);
			callback(msg);
		}
	});
    function callback(msg){
		var   t1 =  msg.nav1[0].tt;
		var   t2 =  msg.nav2[0].tt;
		insetNav(t1);
		insetNav(t2);
	}
    function insetNav(arg){
		    var str='';
			for(var i = 0 ; i<arg.length;i++){
                      str +='<li><a href="">'+arg[i]+'</a></li>';
			}
			$('.content-right-two-right-news').append("<ul>"+str+"</ul>");
    }



//操作侧边栏的函数；
$('.content-right-two-right-nav li').mouseover(function(){
		$(this).css('background','white');
		console.log($(this).index());
	    $('.content-right-two-right-news ul').eq($(this).index()).css('display','block').siblings().css('display','none');
});
$('.content-right-two-right-nav li').mouseout(function(){
	$(this).css('background','rgb(246, 246, 246)');
});

//content-four 函数；
$('.content-four-one ul li').hover(function(){
	$(this).css({background:'white','border-top':'3px solid  #98dfd2','border-left':'solid 1px #98dfd2','border-right':'solid 1px #98dfd2'}).siblings().css({background:'transparent',border:'0px',});

	$('.content-four-two ul').eq($(this).index()).fadeIn(10).siblings().fadeOut(10);

},function(){

});

$('.content-five-left-head ul li').click(function(){
	     $(this).css({background:'white','border-top':'3px solid  #98dfd2','border-left':'solid 1px #98dfd2','border-right':'solid 1px #98dfd2'}).siblings().css({background:'transparent',border:'0px',});
		$('.school>div').eq($(this).index()).fadeIn(10).siblings().fadeOut(10);
});




//回到顶端函数
window.addEventListener('resize',function(){
	windowHeight=this.innerHeight;

});
window.addEventListener("scroll", function  (argument) {
	// scroll
	console.log(window.scrollY);

	if (window.scrollY >= window.innerHeight) {
			$('.shoop>div:last-child').css('display',"block");
	} else {
		$('.shoop>div:last-child').css('display',"none");
	}
});
$('.shoop>div:last-child').click(function(){
	window.scrollTo(0,0);
});











eventmouseHover($('.first'),$('.aroundSchool'));
eventmouseHover($('.header-third-locationcity'),$('.header-third-locationcity-aroundSchool'));
eventmouseHover($('.second'),$('.childInstitutions'));
eventmouseHover2($('.crouseli'),$('.crousrNavkind'));