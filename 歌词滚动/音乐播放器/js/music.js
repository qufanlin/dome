//引入http和文件包
    var http = require('http');
    var myfs = require("./file");
//创建服务器
http.createServer(function(req,res){

    if(req.url=='/save'){
     var newData ="";
        req.on('data',function(trunk){
            newData +=trunk;
        });
        req.on('end',function(){
            //console.log(data);
            myfs.saveFile('../src/1.txt',newData);
            res.end();
        });

    }
    if(req.url=='/get'){
            console.log("音乐请求进来了");
            myfs.openFile('../src/1.txt',function(data){
               console.log(data.toString());
                res.end(data.toString());
            });
    }
    //if(!/^\/get/.test(req.url)||!/^\/save/.test(req.url))
    //    res.end();
    console.log("req.url",req.url);

}).listen(63342,function(err){
    if(!err)
    console.log("server is running at 63342");
});

