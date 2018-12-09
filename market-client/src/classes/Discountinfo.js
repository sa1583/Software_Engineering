var Database = require("./Database")
var DB = new Database();

module.exports = class Discountinfo {
  constructor(obj) {
    this.startDate = obj.startDate
    this.endDate = obj.endDate
    this.discountRated = obj.discountRate
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

  getDiscountedPrice(num) {
    product = DB.getProductById(this.productId)
    if (this.isOnSale)
      return num * product.price * ((100 - this.discountRate) / 100)
    else
      return num * product.price
  }
}