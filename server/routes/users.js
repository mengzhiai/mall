/*
 * @Author: your name
 * @Date: 2020-05-24 17:16:17
 * @LastEditTime: 2020-05-24 19:46:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \mall\server\routes\users.js
 */

var express = require("express");
var router = express.Router();

const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "458677",
  database: "xm",
});

/* GET users listing. */
router.get("/", function(req, res, next) {
  // res.send("respond with a resource");
  db.query("SELECT * FROM nav", function(err, data) {
    if (err) {
      console.log("数据库访问出错", err);
    } else {
      res.send({
        data: data,
        status: 1
      });
      // console.log(data);
      
    }
  });
});

module.exports = router;
