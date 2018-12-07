var Database = require("./Database")
var DB = new Database();

module.exports = class Discountinfo {
  constructor(obj) {
    this.startDate = obj.startDate
    this.endDate = obj.endDate
    this.discountMethod = obj.discountMethod
    this.productId = obj.id
  }
  getDiscountInfoById(id) {
    return DB.getDiscountInfoByProductId(id)
  }

  isOnSale(id) {
    data = DB.getDiscountInfoByProductId(id)
    if (data == []) {
      return false
    } else return true
  }

  getDiscountedPrice() {

  }
}