module.exports = class Database {
  constructor() {};

  readDatabase(table) {
    var fs = require('fs')
    var fileRead = fs.readFileSync("../backend/data/" + table + ".json", 'utf8');
    return JSON.parse(fileRead);
  };

  writeDatabase(table, data) {
    var fs = require('fs')
    fs.writeFile('../backend/data/' + table + '.json', JSON.stringify(data), 'utf-8', function(e) {
      if (e) {
        console.log(e);
      } else {
        console.log('WRITE DONE!');
      }
    });
  };

  getMemberByPhonenumber(phnum) {
    var data = this.readDatabase("Member")
    for (var i = 0; i < data.length; i++) {
      if (data[i].phoneNumber == phnum) {
        return data[i]
      }
    }
    return false
  };

  getTradeInfoById(id) {
    var data = this.readDatabase("TradeInfo")

    for (var i = 0; i < data.length; i++) {
      if (data[i].tradeID == id) {
        return data[i]
      }
    }
    return false

  };

  getTradeInfoByBuyerId(bid) {
    var data = this.readDatabase("TradeInfo")
    var result = []

    for (var i = 0; i < data.length; i++) {
      if (data[i].buyer == bid) {
        result.push(data[i])
      }
    }
    return result
  };

  //시간이 구간인지 확인하기
  getTradeInfoByDate(dt) {
    var data = this.readDatabase("TradeInfo")
    var result = []

    for (var i = 0; i < data.length; i++) {
      if (data[i].datetime == bt) {
        result.push(data[i])
      }
    }
    return result
  };

  getPrductById(id) {
    var data = this.readDatabase("Product")
    var result = []

    for (var i = 0; i < data.length; i++) {
      if (data[i].ID == id) {
        result.push(data[i])
      }
    }
    return result
  };

  getPrductByName(name) {
    var data = this.readDatabase("Product")
    var result = []

    for (var i = 0; i < data.length; i++) {
      if (data[i].name == name) {
        result.push(data[i])
      }
    }
    return result
  };

  getPrductByIdnExpirationDate(id, date) {
    var data = this.readDatabase("Product")
    var result = []

    for (var i = 0; i < data.length; i++) {
      if (data[i].ID == id && data[i].expirationDate == date) {
        result.push(data[i])
      }
    }
    return result
  };

  getDiscountInfoByDate(date) {
    var data = this.readDatabase("DiscountInfo")
    var result = []
    var now = new Date()
    for (var i = 0; i < data.length; i++) {
      startDate = new Date(date[i].startDate)
      endDate = new Date(date[i].endDate)
      if (now >= startDate && now <= endDate) {
        result.push(data[i])
      }
    }
    return result
  };

  getDiscountInfoByProductId(pid) {
    var data = this.readDatabase("DiscountInfo")
    var result = []
    for (var i = 0; i < data.length; i++) {
      if (date[i].productID == pid) {
        result.push(data[i])
      }
    }
    return result
  };

  getOrderableProduct() {
    var data = this.readDatabase("OrderProduct")
    return data
  };

  insertNewMember(member) {
    var data = this.readDatabase("Member")

    for (var i = 0; i < data.length; i++) {
      if (data[i].phoneNumber === member.phoneNumber) {
        return false
      }
    }

    data.push({
      "name": member.name,
      "phoneNumber": member.phoneNumber,
      "address": member.address,
      "birthday": member.birthday,
      "mileage": 0
    })

    this.writeDatabase("Member", data)
    return true
  };

  insertNewTradeInfo(tInfo) {
    var data = this.readDatabase("TradeInfo")
    var tid = data.length

    data.push({
      "tradeID": tid,
      "buyerID": tInfo.buyerID,
      "payment": tInfo.totalPrice,
      "deltaMileage": tInfo.deltaMileage,
      "datetime": tInfo.tradeDatetime
    })
    this.insertTradeProduct(tid, tInfo.products)
    this.writeDatabase("TradeInfo", data)
  };

  insertTradeProduct(tid, list) {
    var data = this.readDatabase("TradeProduct")

    for (var i = 0; i < list.length; i++) {
      data.push({
        "tradeID": tid,
        "productID": list[i].productID,
        "productCount": list[i].count
      })
    }
    this.writeDatabase("TradeProduct", data)
  };

  insertProduct(product) {
    var data = this.readDatabase("product")

    for (var i = 0; i < data.length; i++) {
      if (data[i].ID == product.id && data[i].expirationDate == product.expirationDate) {
        data[i].name = product.productName
        data[i].price = product.price
        data[i].count = product.numberOfProduct
        Database.writeDatabase("TradeInfo", data)
        return;
      }
    }

    data.push({
      "name": product.productName,
      "ID": product.productID,
      "price": product.price,
      "expirationDate": product.expirationDate,
      "count": product.numberOfProduct,
    })
    this.writeDatabase("TradeInfo", data)
  };

  insetNewDiscount(discnt) {
    var data = this.readDatabase("DiscountInfo")
    var method = ""
    var discountRate = 0
    if (discnt.numberOfBuying) {
      method = discnt.numberOfBuying + "+" + discnt.numberOfBonus
    } else {
      discountRate = discnt.discountRate
    }

    data.push({
      "DiscountID": data.length,
      "startDate": discnt.startDate,
      "endDate": discnt.endDate,
      "productID": discnt.productID,
      "method": methd,
      "discountRate": discountRate
    })
    this.writeDatabase("DiscountInfo", data)
  };
}