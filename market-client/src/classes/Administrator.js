function Administrator()  {
  this.password = "1q2w3e4r"
  this.isLogin = false
};

Administrator.prototype.checkSales = function(startDate, endDate) {
  if (this.isLogin)
    return Database.getTradeInfoByDate(startDate, endDate)
  return false
};

Administrator.prototype.postDiscountInfo = function(discountInfo) {
  if (this.isLogin) {
    Datebase.insertNewDiscount(discountInfo)
    return true
  }
  return false
};

Administrator.prototype.oderProduct = function() {
  //아무것도 안함
};

Administrator.prototype.manageProduct = function(product) {
  if (this.isLogin) {
    Datebase.insertProduct(product)
    return true
  }
  return false
};

Administrator.prototype.loginAdmin = function(pwd) {
  if (this.password == pwd) {
    this.isLogin = true
  }
  return this.isLogin
};

Administrator.prototype.logoutAdmin = function() {
  this.isLogin = false
};