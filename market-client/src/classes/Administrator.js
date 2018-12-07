var Database = require("./Database")
var DB = new Database();

module.exports = class Administrator {
  constructor() {
    this.password = "1q2w3e4r";
  };

  checkSales(startDate, endDate) {
    return DB.getTradeInfoByDate(startDate, endDate)
  };

  postDiscountInfo(discountInfo) {
    DB.insertNewDiscount(discountInfo)
  };

  manageProduct(product) {
    DB.insertProduct(product)
    return true
  };

  loginAdmin(pwd) {
    if (this.password === pwd) {
      return true
    }
    return false
  };
};