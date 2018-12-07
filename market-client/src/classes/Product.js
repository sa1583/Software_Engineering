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

  addProduct(list) {
    var digits = Math.floor(Math.random() * 90000000) + 10000000;
    DB.insertTradeProduct(digits, list)
  }
  removeProduct() {

  }
}