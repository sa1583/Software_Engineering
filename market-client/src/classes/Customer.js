import Database from 'database.js'

var DBMS = new Database()

function Customer()  {};

Customer.prototype.buy = function(products) {};
Customer.prototype.refund = function(tradeid) {};

function Member(birthday, pnumber, addr, name, mileage) {
  Customer.call(this);
  this.birthday = birthday
  this.phoneNumber = pnumber
  this.address = addr
  this.name = name
  this.mileage = mileage

};
Member.prototype = new Customer();
Member.prototype.buy = function(products) {
  var price = 0
  var useMileage = false
  for (var p in products) {
    var product = DBMS.getProductByIdnExpirationDate(p.productID,p.expriationDate)
    if (Product.isOnSale(p.productID) == true) {
      price += DMBS.getDiscountedPrice(p.numberOfProduct)
    }
    else {
      price += p.price * p.numberOfProduct
    }

  }
    // 이제 가격이랑 결제방법, 마일리지 사용여부 화면 보여주기
  var usingMileage = 1    // 위의 창에서 사용할 마일리지 입력받음
  TradeInfo.makeNewTradeInfo()

  for (var p in products) {
    var product = DBMS.getProductByIdnExpirationDate(p.productID,p.expriationDate)
    product.numberOfProduct -= p.numberOfProduct
  }
  if (useMileage == true) {
    this.useMileage(usingMileage)
    price -= useMileage
  }
  else {
    this.accumulateMileage(price)    // 마일리지는 10% 적립?!
  }
  DBMS.insertProduct(product)
};

Member.prototype.refund = function(tradeid) {
  var tradeinfo = DBMS.getTradeInfoByTradeId(tradeid)
  if (tradeinfo == null) {          // 거래 결과 없으면 0 리턴
    return 0
  }
  // 환불 화면 보여주고 확인버튼 클릭하면
  var member = DBMS.getMemberByPhoneNumber(tradeinfo.buyerID)
  member.mileage += tradeinfo.deltamileage    // 마일리지 재조정
  for (p in tradeinfo.products) {             // 물건개수 초기화
    var product = DBMS.getProductByIdnExpirationDate(p.productID,p.expriationDate)
    product.numberOfProduct += p.numberOfProduct
  }

};
Member.prototype.viewMileage = function(pnum) {
  var member = DBMS.getMemberByPhoneNumber(pnum)
  return member.mileage

};
Member.prototype.useMileage = function(usingMileage) {
  var member = DBMS.getMemberByPhoneNumber(pnum)
  if (member.mileage < usingMileage) {
    return 0
  }
  else {
    member.mileage -= usingMileage
  }

};
Member.prototype.accumulateMileage = function(price) {
  var member = DBMS.getMemberByPhoneNumber(pnum)
  member.mileage += price * (1/10)
}

function Nonmember() {
  Customer.call(this)
};
Nonmember.prototype = Customer();

Nonmember.prototype.registerAsMember = function() {
  //registrationForm이 대체 뭐냐
};

Nonmember.prototype.buy = function(products) {
  var price = 0
  for (var p in products) {
    var product = DBMS.getProductByIdnExpirationDate(p.productID, p.expriationDate)
    if (DiscountInfo.isOnSale(p.productID) == true) {
      price += DiscountInfo.getDiscountedPrice(p.productID)
    }
    else {
      price += p.price * p.numberOfProduct
    }
  }
  // 결제화면 보여주기

  TradeInfo.makeNewTradeInfo()
  for (var p in products) {
    var product = DBMS.getProductByIdnExpirationDate(p.productID, p.expriationDate)
    product.numberOfProduct -= p.numberOfProduct
  }

};

Nonmember.prototype.refund = function(tradeId) {
  tradeInfo = DBMS.getTradeInfoByTradeId(tradeId)
  // 환불 화면 보여주기
  for (p in tradeInfo.products) {
    var product = DBMS.getProductByIdnExpirationDate(p.productID, p.expriationDate)
    product.numberOfProduct += p.numberOfProduct
  }
};
