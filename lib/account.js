var Printer = require('./printer')
var AccountHistory = require('./accountHistory')

  var Account = function (balance = 0, AccountHistoryConstructor = AccountHistory) {
      if (balance < 0) {
        throw new Error('Account balance must not be negative')
      }
      this._balance = balance
    this._accountHistoryObject = new AccountHistoryConstructor()
  }

  Account.prototype.getBalance = function () {
    return this._balance
  }

  Account.prototype.processTransaction = function (transactionObject) {
    if (this.isTransactionADeposit(transactionObject)) {
      this._balance += transactionObject.getValue()
      this.recordTransactionInAccountHistory(transactionObject)
    } else {
      this._balance -= transactionObject.getValue()
      this.recordTransactionInAccountHistory(transactionObject)
    }
  }

  Account.prototype.isTransactionADeposit = function (transactionObject) {
    if (transactionObject.getType() === 'Deposit') {
      return true
    } else { return false }
  }

  Account.prototype.recordTransactionInAccountHistory = function (transactionObject) {
    transactionObject.setBalance(this._balance)
    this._accountHistoryObject.record(transactionObject)
  }

  Account.prototype.adjustBalance = function (transactionObject) {
    if (this.isTransactionADeposit(transactionObject)) {
      this._balance += transactionObject.getValue()
    } else {
      this._balance += transactionObject.getValue()
    }
  }

  Account.prototype.getAccountHistory = function (accountPrinter = new Printer()) {
    return accountPrinter.printStatement(this._accountHistoryObject)
  }

  module.exports = Account;
