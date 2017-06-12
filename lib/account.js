(function(exports){

  Account = function(balance = 0) {
    this._balance = balance;
  }

  Account.prototype.getBalance = function(){
    return this._balance;
  }

})(this)
