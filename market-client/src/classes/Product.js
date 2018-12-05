function Product(id,name,date,number,price) {
    this.productID = id
    this.productName = name
    this.expirationDate = date
    this.numberOfProduct = number
    this.price = price
}

Product.prototype.inventoryControl() = function(product){
    Database.prototype.insertProduct(product)
}

Product.prototype.addProduct() = function(list){
    var digits = Math.floor(Math.random() * 90000000) + 10000000;

    Database.prototype.insertTradeProduct(digits,list)
}

Product.prototype.removeProduct() = function(){

}