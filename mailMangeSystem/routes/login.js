const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const router = express.Router()
const jsonParser = bodyParser.json()


MongoClient.connect(url, {
    useNewUrlParser: true
}, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("shopping");
    dbase.createCollection('user', function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});
router.all((req,res,next)=>{
    var time = new Date()
    next(time)
})




router.post('/', jsonParser, (req, res,next) => {
    MongoClient.connect(url, {
        useNewUrlParser:true//用于解决警告问题
    },(err,db)=>{
        if(err) {
            console.log('数据库链接异常');
            res.send('can no find database')
            throw err
        };
        var dbo = db.db('shopping');
        dbo.collection('user').find(req.body).toArray((err,result)=>{
            if(err){
                console.log('数据库异常');
                res.send('database exception');
                throw err;
            }
            console.log('数据请求成功');
            res.send(result);
            db.close()
        })
    })
})
module.exports = router