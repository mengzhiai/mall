/*
 * @Author: jun
 * @Date: 2020-06-07 12:43:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-07 16:38:27
 * @FilePath: \mall\server\until\json.js
 * @Description:
 */

const json = function(res, result, err, type) {
  if (err) {
    res.json({
      data: err,
      messge: "操作失败",
      status: -1,
    });
    return;
  }
  if (type === "add") {
    res.json({
      data: result,
      status: 1,
      message: "添加成功",
    });
  } else if (type === "delete") {
    res.json({
      data: result,
      status: 1,
      message: "删除成功",
    });
  } else if (type === "update") {
    res.json({
      data: result,
      status: 1,
      message: "更新成功",
    });
  } else if (type === "select") {
    res.json({
      data: result,
      status: 1,
      message: "查询成功成功",
    });
  } else {
    res.json({
      data: result,
      status: 1,
    });
  }
};

module.exports = json;
