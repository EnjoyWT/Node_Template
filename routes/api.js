var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const data = {
    name: 'John',
    age: 30,
    profession: 'Engineer'
  };
  // 使用 res.json() 返回 JSON 数据
  res.json(data);
});

module.exports = router;
