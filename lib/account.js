(function(exports){

  Account = function(balance = 0) {
    if (balance >= 0) {
      this._balance = balance;
    } else {
      throw('Account balance must not be negative')
    }
    this._accountHistory = []
  }

  Account.prototype.getBalance = function(){
    return this._balance;
  }

  Account.prototype.processTransaction = function(object){
    if ( this.isTransactionDeposit(object) ){
      this._balance += object.getValue();
      this.recordTransaction(object)
    } else {
      this._balance -= object.getValue();
      this.recordTransaction(object)
    }
  }

  Account.prototype.isTransactionDeposit = function(object){
    if ( object.getType() == 'Deposit' ){
      return true;
    } else { return false; }
  }

  Account.prototype.recordTransaction = function(object){
    if ( this.isTransactionDeposit(object) ){
      this._accountHistory.push(object.getDate() + ' || ' + object.getValue() + ' || || ' + this.getBalance())
    } else {
      this._accountHistory.push(object.getDate() + ' || || ' + object.getValue() + ' || ' + this.getBalance())
    }
  }

  Account.prototype.adjustBalance = function(object){
    if ( this.isTransactionDeposit(object) ){
      this._balance += object.getValue();
    } else {
      this._balance += object.getValue();
  }
}


})(this);
