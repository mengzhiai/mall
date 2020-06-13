/*
 * @Author: jun
 * @Date: 2020-06-04 22:47:18
 * @LastEditors: jun
 * @LastEditTime: 2020-06-14 00:50:38
 * @FilePath: \mall\server\routes\index.js
 * @Description: 
 */ 
var express = require('express');
var router = express.Router();
let indexRouter = require('../controllers/index');
let lgoinRouter = require('../controllers/login');


router.use('/product', indexRouter);
router.use('/login', lgoinRouter);


module.exports = router;

 