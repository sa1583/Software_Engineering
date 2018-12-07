var Database = require('../../src/classes/Database.js')
var Administrator = require('../../src/classes/Administrator.js')

var express = require('express');
var router = express.Router();
var DB = new Database();
var admin = new Administrator();

/* GET users listing. */
router.get('/:method', function(req, res, next) {
  var result
  if (req.params.method == "singup") {
    result = DB.insertNewMember(req.query)
    res.send(result)
  } else if (req.params.method == "searchMileage") {
    var member = DB.getMemberByPhonenumber(req.query.phoneNumber)
    if (!member) {
      res.send(false)
    } else {
      result = DB.getTradeInfoByBuyerId(member.phoneNumber)
      res.send(result)
    }
  } else if (req.params.method == "getOrderableProduct") {
    res.send(DB.getOrderableProduct())
  } else if (req.params.method == "getAllProduct") {
    res.send(DB.getAllProduct())
  } else if (req.params.method == "login") {
    res.send(admin.loginAdmin(req.query.password))
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