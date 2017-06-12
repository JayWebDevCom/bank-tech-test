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
    if ( this.isTransactionADeposit(object) ){
      this._balance += object.getValue();
      this.recordTransactionInAccountHistory(object)
    } else {
      this._balance -= object.getValue();
      this.recordTransactionInAccountHistory(object)
    }
  }

  Account.prototype.isTransactionADeposit = function(object){
    if ( object.getType() == 'Deposit' ){
      return true;
    } else { return false; }
  }

  Account.prototype.recordTransactionInAccountHistory = function(object){
    if ( this.isTransactionADeposit(object) ){
      this._accountHistory.push(object.getDate() + ' || ' + object.getValue() + ' || || ' + this.getBalance())
    } else {
      this._accountHistory.push(object.getDate() + ' || || ' + object.getValue() + ' || ' + this.getBalance())
    }
  }

  Account.prototype.adjustBalance = function(object){
    if ( this.isTransactionADeposit(object) ){
      this._balance += object.getValue();
    } else {
      this._balance += object.getValue();
  }
}

Account.prototype.getAccountHistory = function(accountPrinter = new Printer()){
  return accountPrinter.printStatement(this._accountHistory);
}


})(this);
