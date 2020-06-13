/*
 * @Author: jun
 * @Date: 2020-06-07 00:44:23
 * @LastEditors: jun
 * @LastEditTime: 2020-06-14 01:23:06
 * @FilePath: \mall\server\controllers\index.js
 * @Description: controller
 */

const express = require("express");
const router = express.Router();
var db = require("../conf/db");
let json = require("../until/json");

/* router.get("/", (req, res, next) => {
  let sql = "select * from list";
  db.query(sql, [], (err, result, fileds) => {
    json(res, result, err, "add");
  });
}); */
router.post('/product', (req, res, next) => {
  const sql = `select * from product`;
  db.query(sql, [], (err, result, fileds) => {
    json(res, result, err, "getList")
  })
})

module.exports = router;
