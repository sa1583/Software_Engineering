var Database = require("./Database")
var DB = new Database();

module.exports = class Customer {
  constructor(who = false) {
    this.birthday = "";
    this.phoneNumber = "-1";
    this.address = "";
    this.name = "";
    this.mileage = 0;
    this.isMember = who
    if (!who) {
      this.isMember = this.loadMember(who)
    }
  }

  loadMember(pnumber) {
    memberInfo = DB.getMemberByPhonenumber(pnumber)
    if (memberInfo) {
      this.birthday = memberInfo.birthday
      this.phoneNumber = memberInfo.phoneNumber
      this.address = memberInfo.address
      this.name = memberInfo.name
      this.mileage = memberInfo.mileage
      return true
    } else {
      this.birthday = "";
      this.phoneNumber = "-1";
      this.address = "";
      this.name = "";
      this.mileage = 0;
      return false
    }
  }

  buyProducts(products, mile) {
    var price = 0

    for (var i = 0; i < products.length; i++) {
      price += products[i].price
    }

    if (price <= mile) {
      price = price - this.useMileage(price)
    }

    this.mileage = this.mileage + this.calculateMileage(price)

    this.registerAsMember()
    DB.insertTradeProduct()
    return price
  }

  useMileage(mile) {
    if (this.isMember && this.mileage >= mile) {
      this.mileage = this.mileage - mile
      return mile
    } else {
      return 0
    }
  }

  refund(tid) {
    tradeInfo = DB.getTradeInfoById(tid)
    if (!tradeInfo) {
      return false
    }
    this.mileage = this.mileage - tradeInfo.deltaMileage
    this.registerAsMember()
  }

  calculateMileage(price) {
    return parseInt(price / 10)
  }

  registerAsMember() {
    if (this.who)
      DB.insertNewMember(this)
  }
}