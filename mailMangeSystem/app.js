const express = require('express');
const fs = require('fs');
var login = require('./routes/login')


app = express();

var accept_log = function (log) {
    fs.appendFile('./logs/accept_log.log', log, (err) => {
        if (err) throw err;
        console.log('数据已追加到文件');
    });
}

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers","*")
    res.setHeader("Content-Type","text/palin;charset=utf-8");
    next();
})
app.use((req,res,next)=>{
    var time = new Date()
    next(time)
})
//打印日志
app.use((time,req,res,next)=>{
    if(req.url !== "/favicon.ico"){
         accept_log(`${time}:${req.hostname}${req.url}---${req.method}\r\n`)
    }
    next()
})
app.use('/login',login)
app.get('/',(req,res)=>{
    res.send('test')
})

app.listen(3000,function(){
    console.log('服务开启')
})