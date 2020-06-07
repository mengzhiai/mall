/*
 * @Author: jun
 * @Date: 2020-06-07 17:15:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-07 18:33:19
 * @FilePath: \mall\server\controllers\login.js
 * @Description: login
 */

const express = require("express");
const router = express.Router();
const db = require("../conf/db");
const json = require("../until/json");

router.post("/login", (req, res, next) => {
  let query = req.body;
  let sql = `select * from login where userName='${query.userName}'`;
  db.query(sql, [], (err, result) => {
    console.log(result.length);
    /* if(result){
      let checkPwd = result[0].password;
      console.log(checkPwd);
      return
      if(checkPwd === query.password){
        json(res, result, err, 'select')
      }
    }else {
      res.json({
        data: result
      })
    } */
    if (result.length !== 0) {
      let checkPwd = result[0].password;
      if (checkPwd === query.password) {
        // json(res, result, err, "select");
        res.json({
          status: 1,
          message: '登录成功'
        })
      }else{
        res.json({
          status:-1,
          message: '密码错误'
        })
      }
    } else {
      // console.log("aaaaaaaaaa");
      res.json({
        data: result,
        status:-1,
        message: '用户或密码错误'
      })
    }
  });
});

//注册
router.post("/register", (req, res, next) => {
  console.log(req.body);
  let query = req.body;
  console.log(query);
  let sql = `insert into login(id, userName, password) values(uuid(), "${query.userName}", "${query.password}")`;
  console.log(sql);
  db.query(sql, [], (err, result) => {
    json(res, result, err, "add");
  });
});

module.exports = router;
