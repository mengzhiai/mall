/*
 * @Author: jun
 * @Date: 2020-06-04 22:47:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-07 17:15:50
 * @FilePath: \mall\server\routes\index.js
 * @Description: 
 */ 
var express = require('express');
var router = express.Router();
let indexRouter = require('../controllers/index');
let lgoinRouter = require('../controllers/login');


router.use('/', indexRouter);
router.use('/login', lgoinRouter);


module.exports = router;

 