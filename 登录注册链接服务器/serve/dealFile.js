/**
 * Created by lx on 2016/10/19.
 */

/***
 * 对于文件的操作：增加 删除  查找 修改 ；
 */

var fs  = require('fs');

function dealFile(){
    this.getFileData = function(fileUrl,callback){
        fs.readFile(fileUrl,function(err,data){
            if(!err){
                callback(data);
            }
            else{
                console.log('读取文件失败');
            }
        });
    }
    this.addData = function(fileUrl,data){
        fs.open(fileUrl,'a+',function(err){
            if(!err){
                fs.writeFile(fileUrl,data,function(err){
                    if(!err){
                        console.log('写入成功');
                    }
                    else{
                        console.log('写入失败');
                    }
                });
            }
            else{
                console.log('打开失败');
            }
        });
    }
}

module.exports = new dealFile;


