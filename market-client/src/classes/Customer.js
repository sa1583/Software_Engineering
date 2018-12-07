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
    //항목별 가격 책정
    for (var i = 0; i < products.length; i++) {
      //할인 적용해서 prie에 더하기
    }

    if (price <= mile) {
      price = price - this.useMileage(price)
    }

    this.mileage = this.mileage + this.calculateMileage(price)

    this.registerAsMember()
    return price
    //거래내역 데이터베이스 등록
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
    //tid 를 찾아서
    tradeInfo = DB.getTradeInfoById(tid)
    if (!tradeInfo) {
      return false
    }
    this.mileage = this.mileage - tradeInfo.deltaMileage
    //마일리지 더하고 물품 찾아 더함
    //거래내역 데이터베이스 등록
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