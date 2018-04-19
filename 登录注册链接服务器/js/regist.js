/**
 * Created by lx on 2016/10/23.
 */

//用户名
var reg1 =  /^[a-zA-z][a-zA-Z0-9_]{2,9}$/;
//密码
var reg2 =/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
//手机号；
var reg3 =[/^1(3[4-9]|4[7]|5[0-27-9]|7[08]|8[2-478])\\d{8}$/,/^1(3[0-2]|4[5]|5[56]|7[0156]|8[56])\\d{8}$/,/^1(3[3]|4[9]|53|7[037]|8[019])\\d{8}$/];
var reg4 =  /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;

//错误提示数组
var info = ['支持中文，字母，数字,"-""_"的组合','建议使用字母，数字和符号两种以上的组合，6-20个字符','请再次输入密码','完成验证后可以使用手机登录和找回密码'];
var info2 = ['用户名格式不正确','密码格式不正确','两次密码不一致','手机格式不正确']


var checkNum = ['6CSU','EVXY','B855','BNFY','EUHW','AW58','X3VF','XKH6'];



function dealdeal(){
    for(var i = 0 ; i< $('.form-class input').length;i++)
    {
        $('.form-class input').eq(i)[0].index1=0;
    }
    $('.form-class input').on('focus',function(){
        if(this.index1==0)
        {
            this.plh = $(this).attr('placeholder');
            this.index1++;
        }
        $(this).attr('placeholder','');
        this.style.color='rgb(0, 0, 0)';
    });
    $('.form-class input').on('blur',function(){
        if(!$(this).val()){
            $(this).attr('placeholder',this.plh);
            this.style.color='rgb(204,204,204)';
        }
    });
}



function check(ch,inp,str,errStr,reg){
    ch.focus(function(){
            inp.text(str);
            inp.css('color','rgb(127,127,127)');
            ch.parent().css('borderColor', 'rgb(221, 221, 221)');

    });
    ch.blur(function() {
        var flag=0;
        var data = ch.val();
        if (data) {
            if(reg.test(data)){
                    flag=1;
            }

            if(flag==1){
                inp.text('');
            }
            else{
                inp.text(errStr);
                inp.css('color','red')
                ch.parent().css('borderColor','red');
            }
        }
        else{
            inp.text('');
        }
    });
}


function  verificationCodeGenerated(){
          var i = 0;
          $('.checknumber').click(function(){
              console.log(i);
              $(this).css('background',"url(..\/img/image"+i+".jpg)");
              i++;
              if(i>8){
                  i=0;
              }
          })
}



function regist(){
    $('.rightRejist').click(function(){
        var user1  = $('.ch1').val();
        var pwd1  = $('.ch2').val();
        var phone1 = $('.ch4').val();
        var data = {
            user:user1,
            pwd:pwd1,
            phone:phone1

        };
        $.ajax({
            type:'post',
            url:'http://localhost:8000/?myUrl=regit.txt',
            dataType:'jsonp',
            data:data,
            success:function(data){
                console.log(data);
                if(data){
                    alert('注册成功');
                    window.location.href='http://localhost:63342/%E5%AD%A6%E6%88%90%E6%95%99%E8%82%B2/login.html';
                }

            },
            error:function(err){
                console.log(err);
            }
        });
    });

}




dealdeal();
check($('.ch1'),$('.in1'),info[0],info2[0],reg1);
check($('.ch2'),$('.in2'),info[1],info2[1],reg2);
check($('.ch3'),$('.in3'),info[2],info2[2],reg2);
check($('.ch4'),$('.in4'),info[3],info2[3],reg4);
//verificationCodeGenerated();
regist();
