import Database from 'Database.js'

function Discountinfo(start,end,method,id) {
    this.startDate = start
    this.endDate = end
    this.discountMethod = method
    this.productId = id
}

Discountinfo.prototype.getDiscountInfoById() = function(id){
    return Database.getDiscountInfoByProductId(id)
}

Discountinfo.prototype.isOnSale() = function(id){
    data = Database.getDiscountInfoByProductId(id)
    if (data == []){
        return false
    }
    else return true

}
Discountinfo.prototype.getDiscountedPrice() = function(){

}