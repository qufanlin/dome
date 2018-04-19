/**
 * Created by lx on 2016/10/16.
 */
  //这是一个文件包，有打开文件和保存文件
var fs = require("fs");
function openFile(txt,callback){
    fs.open(txt,'a+',function(err){
       if(!err){
           console.log('open file success');
           fs.readFile(txt,function(err,data){
               if(!err){
                   console.log("读取成功！！");
                   callback(data);
               }
           })
       } else{
            console.log(err);
        }
    });
}
function saveFile(txt,data){
    fs.open(txt,'w',function(err){
        if(!err){
            console.log('open file success');
            fs.writeFile(txt,data,function(err,data){
                if(!err){
                    console.log(data+'');
                    console.log('read success');
                }
            })
        } else{
            console.log(err);
        }
    });
}
module.exports.openFile = openFile;
module.exports.saveFile = saveFile;