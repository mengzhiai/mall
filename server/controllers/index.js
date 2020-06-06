/*
 * @Author: jun
 * @Date: 2020-06-07 00:44:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-07 02:52:42
 * @FilePath: \mall\server\controllers\index.js
 * @Description: controller
 */

const express = require("express");
const router = express.Router();
var db = require("../conf/db");


router.get("/", (req, res, next) => {
  let sql = "select * from list";
  db.query(sql, [], (retult, err) => {
    console.log(retult);
    res.json({
      data: retult,
      status: 1,
    });
  });
}); 


module.exports = router;