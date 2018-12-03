//파일경로 지정해야함.

function Database() = {
  this.id = "admin"
  this.password = "1q2w3e4r!"
  this.fs: require('fs')
};

Database.prototype.readDatabase = function(table) {
  fileRead = fs.readFileSync("./public/json/" + table + ".json"); // 파일패스 수정
  return JSON.parse(fileRead);
};

Database.prototype.writeDatabase = function(table, data) {
  fs.writeFile('./public/json/' + table + '.json', JSON.stringify(data), 'utf-8', function(e) {
    if (e) {
      console.log(e);
    } else {
      console.log('WRITE DONE!');
    }
  });
};

Database.prototype.getMemberByPhonenumber = function(phnum) {
  data = Database.readDatabase("Member")

  for (var i = 0; i < data.length; i++) {
    if (data[i].phoneNumber == phnum) {
      return data[i]
    }
  }
  return false
};

Database.prototype.getTradeInfoById = function(id) {
  data = Database.readDatabase("TradeInfo")

  for (var i = 0; i < data.length; i++) {
    if (data[i].tradeID == id) {
      return data[i]
    }
  }
  return false

};

Database.prototype.getTradeInfoByBuyerId = function(bid) {
  data = Database.readDatabase("TradeInfo")
  result = []

  for (var i = 0; i < data.length; i++) {
    if (data[i].buyer == bid) {
      result.push(data[i])
    }
  }
  return result
};

//시간이 구간인지 확인하기
Database.prototype.getTradeInfoByDate = function(dt) {
  data = Database.readDatabase("TradeInfo")
  result = []

  for (var i = 0; i < data.length; i++) {
    if (data[i].datetime == bt) {
      result.push(data[i])
    }
  }
  return result
};

Database.prototype.getPrductById = function(id) {
  data = Database.readDatabase("Product")
  result = []

  for (var i = 0; i < data.length; i++) {
    if (data[i].ID == id) {
      result.push(data[i])
    }
  }
  return result
};

Database.prototype.getPrductByName = function(name) {
  data = Database.readDatabase("Product")
  result = []

  for (var i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      result.push(data[i])
    }
  }
  return result
};

Database.prototype.getPrductByIdnExpirationDate = function(id, date) {
  data = Database.readDatabase("Product")
  result = []

  for (var i = 0; i < data.length; i++) {
    if (data[i].ID == id && data[i].expirationDate == date) {
      result.push(data[i])
    }
  }
  return result
};

Database.prototype.getDiscountInfoByDate = function(date) {
  data = Database.readDatabase("DiscountInfo")
  result = []
  now = new Date()
  for (var i = 0; i < data.length; i++) {
    startDate = new Date(date[i].startDate)
    endDate = new Date(date[i].endDate)
    if (now >= startDate && now <= endDate) {
      result.push(data[i])
    }
  }
  return result
};

Database.prototype.getDiscountInfoByProductId = function(pid) {
  data = Database.readDatabase("DiscountInfo")
  result = []
  for (var i = 0; i < data.length; i++) {
    if (date[i].productID == pid) {
      result.push(data[i])
    }
  }
  return result
};

Database.prototype.getOrderableProduct = function() {
  data = Database.readDatabase("OrderProduct")
  return data
};

Database.prototype.insertNewMember = function(member) {
  data = Database.readDatabase("Member")

  for (var i = 0; i < data.length; i++) {
    if (date[i].phoneNumber == member.phoneNumber) {
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

  Datebase.writeDatabase("member", data)
  return true
};

Database.prototype.insertNewTradeInfo = function(tInfo) {
  data = Database.readDatabase("TradeInfo")
  tid = data.length

  data.push({
    "tradeID": tid,
    "buyerID": tInfo.buyerID,
    "payment": tInfo.totalPrice,
    "deltaMileage": tInfo.deltaMileage,
    "datetime": tInfo.tradeDatetime
  })
  Database.insertTradeProduct(tid, tInfo.products)
  Database.writeDatabase("TradeInfo", data)
};

Database.prototype.insertTradeProduct = function(tid, list) {
  data = Database.readDatabase("TradeProduct")

  for (var i = 0; i < list.length; i++) {
    data.push({
      "tradeID": tid,
      "productID": list[i].productID,
      "productCount": list[i].count
    })
  }
  Database.writeDatabase("TradeProduct", data)
};

Database.prototype.insertProduct = function(product) {
  data = Database.readDatabase("product")

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
  Database.writeDatabase("TradeInfo", data)
};

Database.prototype.insetNewDiscount = function(discnt) {
  data = Databse.readDatabase("DiscountInfo")
  method = ""
  discountRate = 0
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

  Database.writeDatabase("DiscountInfo", data)
};