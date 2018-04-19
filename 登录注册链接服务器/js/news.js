/**
 * Created by lx on 2016/9/18.
 */
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
picture();
seeKeCheng();