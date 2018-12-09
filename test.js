var express = require('express');
var exec = require('child_process').exec;
var app = express();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('./db/DBConfig');
var personalitySQL = require('./db/PersonalitySql');
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
// var bodyParse           = require('body-parser')
// var cookieParser        = require('cookie-parser') ;
// app.use(cookieParser()) ;
// app.use(bodyParse.urlencoded({extended:false})) ;
// app.get('/', function(req, res, next) {
//     res.send({ "title":"Express" });
//   });
  app.get('/test', function(req, res, next) {
    // res.render('index', { title: 'Express' });
      res.send('跨域请求test')
  });
  app.get('/auth_list', function(req, res, next) {
    // res.render('index', { title: 'Express' });
   // res.send({"menuIdSet":"[{\"icon\":\"fa-tachometer\",\"text\":\"主页\",\"href\":\"login/index.html\"},{\"icon\":\"fa-ship\",\"text\":\"个人中心\",\"href\":\"\",\"childMenus\":[{\"icon\":\"fa fa-paper-plane\",\"text\":\"我的登陆信息\",\"href\":\"vvapplications/index.html#/mine\"}]},{\"icon\":\"fa-area-chart\",\"text\":\"用户画像\",\"href\":\"\",\"childMenus\":[{\"icon\":\"fa-area-chart\",\"text\":\"用户人格预测\",\"href\":\"vvstatistics/index.html#/analysisVersion\"},{\"icon\":\"fa-area-chart\",\"text\":\"用户偏好\",\"href\":\"vvstatistics/index.html#/analysisCSS\"},{\"icon\":\"fa-area-chart\",\"text\":\"社交网络\",\"href\":\"vvstatistics/index.html#/templateRollBack\"}]},{\"icon\":\"fa-life-ring\",\"text\":\"权限管理\",\"href\":\"\",\"childMenus\":[{\"icon\":\"fa-user\",\"text\":\"用户管理\",\"href\":\"vvauthmanage/index.html#/usermng\"}]}]","actionIdSet":{"all":["ADMIN","DLAYOUT_ADD","DLAYOUT_DEL","DLAYOUT_MODIFY","DLAYOUT_QUERY","DLAYOUT_RELEASE","DLAYOUT_UPLINE","DLAYOUT_UPLINE_APP","PAGE_ADD","PAGE_DEL","PAGE_MODIFY","PAGE_QUERY","PAGE_RELEASE","PAGE_UPLINE","PAGE_UPLINE_APP","STYLE_ADD","STYLE_DEL","STYLE_MODIFY","STYLE_QUERY","STYLE_RELEASE","STYLE_UPLINE","STYLE_UPLINE_APP"],"ppPGC":["ADMIN","DLAYOUT_ADD","DLAYOUT_DEL","DLAYOUT_MODIFY","DLAYOUT_QUERY","DLAYOUT_RELEASE","DLAYOUT_UPLINE","DLAYOUT_UPLINE_APP","PAGE_ADD","PAGE_DEL","PAGE_MODIFY","PAGE_QUERY","PAGE_RELEASE","PAGE_UPLINE","PAGE_UPLINE_APP","STYLE_ADD","STYLE_DEL","STYLE_MODIFY","STYLE_QUERY","STYLE_RELEASE","STYLE_UPLINE","STYLE_UPLINE_APP"],"pps":["ADMIN","DLAYOUT_ADD","DLAYOUT_DEL","DLAYOUT_MODIFY","DLAYOUT_QUERY","DLAYOUT_RELEASE","DLAYOUT_UPLINE","DLAYOUT_UPLINE_APP","PAGE_ADD","PAGE_DEL","PAGE_MODIFY","PAGE_QUERY","PAGE_RELEASE","PAGE_UPLINE","PAGE_UPLINE_APP","STYLE_ADD","STYLE_DEL","STYLE_MODIFY","STYLE_QUERY","STYLE_RELEASE","STYLE_UPLINE","STYLE_UPLINE_APP"],"ppsBase":["ADMIN","DLAYOUT_ADD","DLAYOUT_DEL","DLAYOUT_MODIFY","DLAYOUT_QUERY","DLAYOUT_RELEASE","DLAYOUT_UPLINE","DLAYOUT_UPLINE_APP","PAGE_ADD","PAGE_DEL","PAGE_MODIFY","PAGE_QUERY","PAGE_RELEASE","PAGE_UPLINE","PAGE_UPLINE_APP","STYLE_ADD","STYLE_DEL","STYLE_MODIFY","STYLE_QUERY","STYLE_RELEASE","STYLE_UPLINE","STYLE_UPLINE_APP"],"paopao":["ADMIN","DLAYOUT_ADD","DLAYOUT_DEL","DLAYOUT_MODIFY","DLAYOUT_QUERY","DLAYOUT_RELEASE","DLAYOUT_UPLINE","DLAYOUT_UPLINE_APP","PAGE_ADD","PAGE_DEL","PAGE_MODIFY","PAGE_QUERY","PAGE_RELEASE","PAGE_UPLINE","PAGE_UPLINE_APP","STYLE_ADD","STYLE_DEL","STYLE_MODIFY","STYLE_QUERY","STYLE_RELEASE","STYLE_UPLINE","STYLE_UPLINE_APP"],"ppBase":["ADMIN","DLAYOUT_ADD","DLAYOUT_DEL","DLAYOUT_MODIFY","DLAYOUT_QUERY","DLAYOUT_RELEASE","DLAYOUT_UPLINE","DLAYOUT_UPLINE_APP","PAGE_ADD","PAGE_DEL","PAGE_MODIFY","PAGE_QUERY","PAGE_RELEASE","PAGE_UPLINE","PAGE_UPLINE_APP","STYLE_ADD","STYLE_DEL","STYLE_MODIFY","STYLE_QUERY","STYLE_RELEASE","STYLE_UPLINE","STYLE_UPLINE_APP"],"qypad":["ADMIN","DLAYOUT_ADD","DLAYOUT_DEL","DLAYOUT_MODIFY","DLAYOUT_QUERY","DLAYOUT_RELEASE","DLAYOUT_UPLINE","DLAYOUT_UPLINE_APP","PAGE_ADD","PAGE_DEL","PAGE_MODIFY","PAGE_QUERY","PAGE_RELEASE","PAGE_UPLINE","PAGE_UPLINE_APP","STYLE_ADD","STYLE_DEL","STYLE_MODIFY","STYLE_QUERY","STYLE_RELEASE","STYLE_UPLINE","STYLE_UPLINE_APP"],"basic":["ADMIN","DLAYOUT_ADD","DLAYOUT_DEL","DLAYOUT_MODIFY","DLAYOUT_QUERY","DLAYOUT_RELEASE","DLAYOUT_UPLINE","DLAYOUT_UPLINE_APP","PAGE_ADD","PAGE_DEL","PAGE_MODIFY","PAGE_QUERY","PAGE_RELEASE","PAGE_UPLINE","PAGE_UPLINE_APP","STYLE_ADD","STYLE_DEL","STYLE_MODIFY","STYLE_QUERY","STYLE_RELEASE","STYLE_UPLINE","STYLE_UPLINE_APP"],"PGC":["ADMIN","DLAYOUT_ADD","DLAYOUT_DEL","DLAYOUT_MODIFY","DLAYOUT_QUERY","DLAYOUT_RELEASE","DLAYOUT_UPLINE","DLAYOUT_UPLINE_APP","PAGE_ADD","PAGE_DEL","PAGE_MODIFY","PAGE_QUERY","PAGE_RELEASE","PAGE_UPLINE","PAGE_UPLINE_APP","STYLE_ADD","STYLE_DEL","STYLE_MODIFY","STYLE_QUERY","STYLE_RELEASE","STYLE_UPLINE","STYLE_UPLINE_APP"],"iqiyi":["ADMIN","DLAYOUT_ADD","DLAYOUT_DEL","DLAYOUT_MODIFY","DLAYOUT_QUERY","DLAYOUT_RELEASE","DLAYOUT_UPLINE","DLAYOUT_UPLINE_APP","PAGE_ADD","PAGE_DEL","PAGE_MODIFY","PAGE_QUERY","PAGE_RELEASE","PAGE_UPLINE","PAGE_UPLINE_APP","STYLE_ADD","STYLE_DEL","STYLE_MODIFY","STYLE_QUERY","STYLE_RELEASE","STYLE_UPLINE","STYLE_UPLINE_APP"],"uuids":["ef55c95e072f442db9a95887e9e667b6"]},"currentUser":{"id":276,"userid":"c686d2c0b8434f11a2148e81c2b04412","username":"qianmengying_sx","fullname":"qianmengying_sx","enabled":1,"description":"qianmengying_sx","email":"qianmengying_sx@qiyi.com","createTime":1528240642000,"updateTime":1530140392000},"developEnv":"test","success":true})
    res.send({"menuIdSet":"[{\"icon\":\"fa-tachometer\",\"text\":\"主页\",\"href\":\"login/index.html\"},{\"icon\":\"fa-ship\",\"text\":\"个人中心\",\"href\":\"\",\"childMenus\":[{\"icon\":\"fa fa-paper-plane\",\"text\":\"我的登陆信息\",\"href\":\"vvapplications/index.html#/mine\"}]},{\"icon\":\"fa-area-chart\",\"text\":\"用户画像\",\"href\":\"\",\"childMenus\":[{\"icon\":\"fa-area-chart\",\"text\":\"用户人格预测\",\"href\":\"vvstatistics/index.html#/analysisVersion\"},{\"icon\":\"fa-area-chart\",\"text\":\"用户偏好\",\"href\":\"vvstatistics/index.html#/analysisCSS\"},{\"icon\":\"fa-area-chart\",\"text\":\"社交网络\",\"href\":\"vvstatistics/index.html#/templateRollBack\"}]},{\"icon\":\"fa-life-ring\",\"text\":\"权限管理\",\"href\":\"\",\"childMenus\":[{\"icon\":\"fa-user\",\"text\":\"用户管理\",\"href\":\"vvauthmanage/index.html#/usermng\"}]}]","actionIdSet":{},"currentUser":{"id":276,"userid":"c686d2c0b8434f11a2148e81c2b04412","username":"qianmengying","fullname":"qianmengying","enabled":1,"description":"qianmengying"},"developEnv":"test","success":true})
  });
  app.get('/getbigfiveInfo', function(req, res, next) {
      res.send({ "openness":"35","conscientiousness":"27","extraversion":"20","agreeableness":"40","neuroticism":"25"})
  });
  app.get('/getTOPIC', function(req, res, next){
  // 使用DBConfig.js的配置信息创建一个MySQL连接池
  var pool = mysql.createPool( dbConfig.mysql );
  // 响应一个JSON数据
  var responseJSON = function (res, ret) {
       if(typeof ret === 'undefined') { 
            res.json({     code:'-200',     msg: '操作失败'   
          }); 
      } else { 
       // res.json(ret); 
       res.json(ret);
    }};
    // 从连接池获取连接 
   pool.getConnection(function(err, connection) { 
   // 获取前台页面传过来的参数  
    var param = req.query.person_id; 
    console.log("param"+param)  
   // 建立连接 增加一个用户信息 
   connection.query(personalitySQL.getTopicById, [param], function(err, result) {   
     console.log(result)   
        // 以json形式，把操作结果返回给前台页面     
          responseJSON(res, result);   
   
        // 释放连接  
         connection.release();  
   
          });
       });
    });
    app.get('/getWORDRATE', function(req, res, next){
      // 使用DBConfig.js的配置信息创建一个MySQL连接池
      var pool = mysql.createPool( dbConfig.mysql );
      // 响应一个JSON数据
      var responseJSON = function (res, ret) {
           if(typeof ret === 'undefined') { 
                res.json({     code:'-200',     msg: '操作失败'   
              }); 
          } else { 
           // res.json(ret); 
           res.json(ret);
        }};
        // 从连接池获取连接 
       pool.getConnection(function(err, connection) { 
       // 获取前台页面传过来的参数  
        var param = req.query.person_id+".txt"; 
        console.log("param"+param)  
       // 建立连接 增加一个用户信息 
       connection.query(personalitySQL.getWordRateById, [param], function(err, result) {   
         console.log(result)   
         
            // 以json形式，把操作结果返回给前台页面     
              responseJSON(res, result);   
       
            // 释放连接  
             connection.release();  
       
              });
           });
  });
  app.get('/getSOCIALNET', function(req, res, next){
    // 使用DBConfig.js的配置信息创建一个MySQL连接池
    var pool = mysql.createPool( dbConfig.mysql );
    // 响应一个JSON数据
    var responseJSON = function (res, ret) {
         if(typeof ret === 'undefined') { 
              res.json({     code:'-200',     msg: '操作失败'   
            }); 
        } else { 
         // res.json(ret); 
         res.json(ret);
      }};
      // 从连接池获取连接 
     pool.getConnection(function(err, connection) { 
     // 获取前台页面传过来的参数  
      var param = req.query.person_id; 
      console.log("param"+param)  
     // 建立连接 增加一个用户信息 
     connection.query(personalitySQL.getSocialNetById, [param], function(err, result) {   
       console.log(result)   
       
          // 以json形式，把操作结果返回给前台页面     
            responseJSON(res, result);   
     
          // 释放连接  
           connection.release();  
     
            });
         });
  });
  app.get('/getInformation', function(req, res, next){
    // 使用DBConfig.js的配置信息创建一个MySQL连接池
    var pool = mysql.createPool( dbConfig.mysql );
    // 响应一个JSON数据
    var responseJSON = function (res, ret) {
         if(typeof ret === 'undefined') { 
              res.json({     code:'-200',     msg: '操作失败'   
            }); 
        } else { 
         // res.json(ret); 
         res.json(ret);
      }};
      // 从连接池获取连接 
     pool.getConnection(function(err, connection) { 
     // 获取前台页面传过来的参数  
      var param = req.query.userName; 
      console.log("param"+param)  
     connection.query(personalitySQL.getInformationById, [param], function(err, result) {   
       console.log(result)   
            responseJSON(res, result);   
           connection.release();  
            });
         });
});
app.get('/changeInformation', function(req, res, next){
  // 使用DBConfig.js的配置信息创建一个MySQL连接池
  var pool = mysql.createPool( dbConfig.mysql );
  // 响应一个JSON数据
  var responseJSON = function (res, ret) {
       if(typeof ret === 'undefined') { 
            res.json({     code:'-200',     msg: '操作失败'   
          }); 
      } else { 
       // res.json(ret); 
       res.json(ret);
    }};
    // 从连接池获取连接 
   pool.getConnection(function(err, connection) { 
   // 获取前台页面传过来的参数  
    var userName = req.query.userName; 
    var pass = req.query.pass; 
  //  console.log("param"+param)  
   connection.query(personalitySQL.changeInformationById, [pass,userName], function(err, result) {   
     console.log(result)   
          responseJSON(res, "更新个人信息成功！");   
         connection.release();  
          });
       });
});
  app.get('/Login', function(req, res, next) {
    if(req.query.Username=="123"){
      if(req.query.Password=="123"){
        res.send({ "flag":1});
      }else{
        res.send({ "flag":0});
      }
    }else{
      res.send({ "flag":-1});
    }
   
  });
app.get('/fuzzySearch',function(req,res){
    var person_id = req.query.person_id; 
    var pool = mysql.createPool( dbConfig.mysql );
    var responseJSON = function (res, ret) {
       if(typeof ret === 'undefined') { 
            res.json({     code:'-200',     msg: '操作失败'   
          }); 
      } else { 
       // res.json(ret); 
       res.json(ret);
    }};
  pool.getConnection(function(err, connection) {  
    connection.query(personalitySQL.fuzzySearch, [ "%"+person_id+"%"], function(err, result) {
    if(err){
      console.error('error: ' + err);
      return;
       }  
         console.log(result)   
         res.send({"fuzzyItems":result})
         connection.release();  
    });
  });

});
  app.get('/analysis',function(req,res){
    var person_id = req.query.person_id; 
    exec('C:/Users/Administrator/Anaconda3/envs/py36/python.exe C:/Users/Administrator/Desktop/personality/weibo/python/算法/model_o/evaluate.py '+person_id, function (error, stdout, stderr) {   
      if(error){
          console.error('error: ' + error);
          return;
      }
      console.log('nodejs_receive: ' + stdout);
      res.send({"bigfive":stdout})
      });

  });

app.get('/', function (req, res,next) {
  var pool = mysql.createPool(dbConfig.mysql);
  pool.getConnection(function (err, connection) {
    var param = req.query.person_id;
    
     connection.query(personalitySQL.searchTempStorage, [param], function (err, result) {
      if (err) {
        console.error('error: ' + err);
        return ;
      }
      connection.release();

      console.log(result)
      if(result.length == 0){
        next('route');
      }else(res.send({"itemInStorage":result}))
    });
  });
});
app.get('/', function (req, res,next) {
  var responseJSON = function (res, ret) {
    if(typeof ret === 'undefined') { 
         res.json({     code:'-200',     msg: '操作失败'   
       }); 
   } else { 
    // res.json(ret); 
    res.json(ret);
 }};
  var person_id = req.query.person_id;
  var pool = mysql.createPool(dbConfig.mysql);
  pool.getConnection(function (err, connection) {
    connection.query(personalitySQL.selectAnalysisResultById, [person_id], function (err, result) {
     // console.log("chaxunjieguo" + JSON.stringify(result))
      if (result.length == 0) {
        responseJSON(res, "SQLERRO!!!");
        connection.release();
      } else {
        
        exec('C:/Users/Administrator/Anaconda3/envs/py36/python.exe C:/Users/Administrator/Desktop/personality/weibo/python/算法/model_o/evaluate.py ' + person_id, function (error, stdout, stderr) {
          if (error) {
            console.error('error: ' + error);
            return;
          }
          console.log('nodejs_receive: ' + stdout);
          let bigfiveIdata=stdout.slice(stdout.indexOf("[")+1,stdout.indexOf("]")).split(" ").filter(function(item){return item!=""})
          connection.query(personalitySQL.insertTempStorage, [person_id,bigfiveIdata[0],bigfiveIdata[1],bigfiveIdata[2],bigfiveIdata[3],bigfiveIdata[4]], function (err, result) {
            if(err){
              console.error('error: ' + err);
            }else{
              console.log(result)
            }
          })
          connection.release();
          res.send({"itemInStorage":[{"openness":bigfiveIdata[0],"conscientiousness":bigfiveIdata[1],"extraversion":bigfiveIdata[2],"agreeableness":bigfiveIdata[3],"neuroticism":bigfiveIdata[4]}]})
        });
      }
    });

  })
})
// 监听3000端口
var server=app.listen(3000) ;