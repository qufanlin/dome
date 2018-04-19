/**
 * Created by lx on 2016/10/19.
 */
var http  = require('http');
var url = require('url');
var qs = require('querystring');
var file = require('./dealFile');

http.createServer(function(req ,res){
    req.setEncoding('utf-8');
    // 将请求的url转化为对象；
    var urlPath = url.parse(req.url,true);
    console.log(urlPath);
    var userData = {
        useName: '',
        userPhone: '',
        userEmail: '',
        userPwd: ''
    };
    //console.log(urlPath.query.userInfo);
    /***
     *
     * @type {{useName: string, userPhone: string, userEmail: string, userPwd: string}}
     * 1 创建一个对象；并配置！
     * 2.将配置好的对写入文件中；
     */
    if(urlPath.query.myUrl == 'user.txt') {


        setData(userData, urlPath.query.userInfo, urlPath.query.pwd);
        file.getFileData('./userInfo.json', function (data) {
            //     判断用户名，和密码是否存在；
            var isexit = judge(userData, JSON.parse(data.toString()));
            var str = urlPath.query.callback + '(' + isexit + ')';
            //返回请求的数据；
            res.end(str);
        });

    }
    if(urlPath.query.myUrl == 'regit.txt'){
        userData.useName = urlPath.query.user;
        userData.userPwd = urlPath.query.pwd;
        userData.userPhone = urlPath.query.phone;
        storageData(userData,res,urlPath);
    }

}).listen(8000,function(err){
    if(!err){
        console.log('server is running at 8000');
    }
});
function  setData(userData,str,str1){
    var rep1 =  /^[a-zA-z]\w{3,15}$/;
    var rep2 = /^1\d{10}$/;
    var rep3 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(rep1.test(str))
        userData.useName = str;
    else{
        if(rep2.test(str))
            userData.userPhone = str;
        else
            userData.userEmail = str;
    }
    userData.userPwd = str1;
}
function judge(user,data,urlPath){
    var len = data.length;
    for(var i = 0 ; i<len ; i++){
        if((user.useName == data[i].useName||user.userPhone == data[i].userPhone||user.userEmail == data[i]. userEmail)&&user.userPwd == data[i].userPwd){
            return true;
            break;
        }
    }
    return false;
}
function storageData(userData,res,urlPath){
    file.getFileData('./userInfo.json',function(data){
        var dataObj = JSON.parse(data.toString());
        dataObj.push(userData);
        file.addData('./userInfo.json', JSON.stringify(dataObj));
       ;
        //可以返回Json 字符串，不然，就不会成功 ；
        var isexit = true;
        var str = urlPath.query.callback+'(' + isexit + ')';
        res.end(str);
    })
}




