var Account = function(balance = 0, accountHistoryConstructor = AccountHistory) {
    if (balance >= 0) {
      this._balance = balance;
    } else {
      throw('Account balance must not be negative')
    }
    this._accountHistoryObject = new accountHistoryConstructor();
  }

  Account.prototype.getBalance = function(){
    return this._balance;
  }

  Account.prototype.processTransaction = function(transactionObject){
    if ( this.isTransactionADeposit(transactionObject)) {
      this._balance += transactionObject.getValue();
      this.recordTransactionInAccountHistory(transactionObject)
    } else {
      this._balance -= transactionObject.getValue();
      this.recordTransactionInAccountHistory(transactionObject)
    }
  }

  Account.prototype.isTransactionADeposit = function(transactionObject){
    if ( transactionObject.getType() == 'Deposit' ){
      return true;
    } else { return false; }
  }

  Account.prototype.recordTransactionInAccountHistory = function(transactionObject){
    this._accountHistoryObject.record(transactionObject)
  }

  Account.prototype.adjustBalance = function(transactionObject){
    if ( this.isTransactionADeposit(transactionObject) ){
      this._balance += transactionObject.getValue();
    } else {
      this._balance += transactionObject.getValue();
  }
}

Account.prototype.getAccountHistory = function(accountPrinter = new Printer()){
  return accountPrinter.printStatement(this._accountHistoryObject);
}

module.exports = Account;
