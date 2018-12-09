var Database = require("./Database")
var DB = new Database();

module.exports = class Product {
  constructor(id, name, date, number, price) {
    this.productID = id
    this.productName = name
    this.expirationDate = date
    this.numberOfProduct = number
    this.price = price
  }

  inventoryControl(product) {
    DB.insertProduct(product)
  }

  addProduct(list, num) {
    DB.insertTradeProduct(list, num)
  }
  removeProduct(list, num) {
    DB.insertTradeProduct(list, num * (-1))
  }
}