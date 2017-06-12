(function(exports){

  Account = function(balance = 0) {
    if (balance >= 0) {
      this._balance = balance;
    } else {
      throw('Account balance must not be negative')
    }
  }

  Account.prototype.getBalance = function(){
    return this._balance;
  }

  Account.prototype.processTransaction = function(object){
    if ( this.isTransactionDeposit(object) ){
      this._balance += object.getValue();
    }
  }

  Account.prototype.isTransactionDeposit = function(object){
    if ( object.getType() == 'Deposit' ){
      return true;
    } else { return false; }
  }


})(this);
