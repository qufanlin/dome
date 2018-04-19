//轮播图移动函数
function picture(){
	var timer;
	var i = 0;
	function show(arg){
		$('.tab').eq(arg).addClass('bg').siblings().removeClass('bg');
		$('.timeshow').eq(arg).fadeIn(1000).siblings().fadeOut(1000);
	}
	 // 轮播开始；
	function lunbo(){
		timer=setInterval(function(){
			if(i==$('.timeshow').length)
	        	i=0;
	        else{
	        	$('.timeshow').eq(i).fadeIn(1000).siblings().fadeOut(1000);
	        	show(i);
		    	i++;
	        }	
		},3000);
	}
    // 为table添加hover事件；
	function digtalHover(){
			$('.tab').hover(function(){
	        	var t = $(this).index();
	        	show(t);
	        	// 清除轮播；
	        	clearInterval(timer);
			},function(){
				lunbo();
			});
	}
	// 为大于号或者小于浩号添加点击事件；
	$('.lt').click(function(){
		clearInterval(timer);
		if(i<0){i=4;}
		show(i);i--;lunbo();
	});
	$('.gt').click(function(){
		clearInterval(timer);
		if(i>4){i=0;}
		show(i);i++;lunbo();
	});
    lunbo();
	digtalHover();
}
function seeKeCheng(){
     $('.mainCrouse1 li').mouseover(function(){
     		$('.content1').eq($(this).index()).fadeIn(10).siblings().fadeOut(10);
     });
}

// $("#content2img1").mouseenter(function(){
// 	$("#content2img1_intro").animate({
// 		height:"60px",
// 		bottom:0
// 	},100);

// 	$("#content2img1").mouseleave(function(){
// 		$("#content2img1_intro").stop();
// 		$("#content2img1_intro").animate({
// 			height:"60px",
// 			bottom:-30
// 		},100);
// 	});
// });
// 为学生照片添加一个介绍背景；
function studentInfo(){
	       for( var i=0;i< $('.student1').length;i++)
	       	{
	       			var str='<div class="startinfo"><p>成功教育学习后</p><p>我们都开心的笑了</p></div>';
	       			var inpt = $(str);
	       			inpt.css({
			        		position:'absolute',
			        		width:'240px',
			        		height:'200px',
			        		top:'200PX',
			        		color:'white',
			        		background:'rgba(0,0,0,0.5)'
			        		// z-index:'10'
			        });
	       			$('.student1').eq(i).append(inpt);
	       	}
	    // 设置文字的样式
	    $('.startinfo P').css({
	    	textAlign:'center',
	    	lineHeight:'30px',
	    	fontSize:'14px',
	    });
	    $('.student1').mouseenter(function(){
        	$('.startinfo').eq($(this).index()).animate({
        		   top:'140px' 
        		},100);

        	});
		$('.student1').mouseleave(function(){
			// 必须要添加这一句，不然的话，会出现事件叠加执行的情况。
			$('.startinfo').eq($(this).index()).stop();
        	$('.startinfo').eq($(this).index()).animate({top:'200px'},100);
		});
	  
}

// 页面加载后立即执行的函数；
$(function(){
	picture();
	seeKeCheng();
	studentInfo();
	
});
