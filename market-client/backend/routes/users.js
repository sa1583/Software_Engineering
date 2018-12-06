var Database = require('../../src/classes/Database.js')

var express = require('express');
var router = express.Router();
var DB = new Database();

/* GET users listing. */
router.get('/:method', function(req, res, next) {
  if (req.params.method == "singup") {
    var result = DB.insertNewMember(req.query)
    res.send(result)
  } else if (req.params.method == "searchMileage") {
    var member = DB.getMemberByPhonenumber(req.query.phoneNumber)
    if (!member) {
      res.send(false)
    } else {
      result = DB.getTradeInfoByBuyerId(member.phoneNumber)
      res.send(result)
    }
  } else if (req.params.method == "getTradeInfoById") {
    var info = DB.getTradeInfoById()
  }
});

router.get('/:method/:id', function(req, res, next) {
  console.log(req.params)
  if (req.params.method === "getMemberByPhonenumber") {
    res.send(DB.getMemberByPhonenumber(req.params.id))
  } else if (req.params.method == "getTradeInfoById") {
    res.send(DB.getTradeInfoById(req.params.id))
  } else if (req.params.method == "getTradeInfoById") {
    res.send(DB.getTradeInfoById(req.params.id))
  }
  res.send(req.params.id + req.params.method);
});

module.exports = router;