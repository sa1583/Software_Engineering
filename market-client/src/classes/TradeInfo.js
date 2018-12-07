var Database = require("./Database")
var DB = new Database();

module.exports = class TradeInfo {
  constructor(buyerid, tradedateinfo, products, tradeid, deltamileage, isusecard, totalprice) {
    this.buyerID = buyerid
    this.tradeDatetime = tradedateinfo
    this.products = products
    this.TradeID = tradeid
    this.deltaMileage = deltamileage
    this.isUseCard = isusecard
    this.totalPrice = totalprice
  }
};