var Account = function(balance = 0, accountHistoryConstructor = AccountHistory) {
    if (balance >= 0) {
      this._balance = balance;
    } else {
      throw('Account balance must not be negative')
    }
    this._accountHistoryObject = new accountHistoryConstructor();
    this._accountHistory = this._accountHistoryObject.getTransactions()
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
    if ( this.isTransactionADeposit(transactionObject) ){
      this._accountHistory.push(transactionObject.getDate() + ' || ' + transactionObject.getValue() + ' || || ' + this.getBalance())
    } else {
      this._accountHistory.push(transactionObject.getDate() + ' || || ' + transactionObject.getValue() + ' || ' + this.getBalance())
    }
  }

  Account.prototype.adjustBalance = function(transactionObject){
    if ( this.isTransactionADeposit(transactionObject) ){
      this._balance += transactionObject.getValue();
    } else {
      this._balance += transactionObject.getValue();
  }
}

Account.prototype.getAccountHistory = function(accountPrinter = new Printer()){
  return accountPrinter.printStatement(this._accountHistory);
}

module.exports = Account;
