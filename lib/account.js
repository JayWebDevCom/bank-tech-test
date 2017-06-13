var Printer = require('./printer')
var TransactionTypeGetter = require('./transactionTypeGetter')
var AccountHistory = require('./accountHistory')

var Account = function (balance = 0, AccountHistoryConstructor = AccountHistory, TransactionTypeGetterConstructor = TransactionTypeGetter) {
  if (balance < 0) { throw new Error('Account balance must not be negative') }
  this._balance = balance
  this._accountHistoryObject = new AccountHistoryConstructor()
  this._transactionTypeGetter = new TransactionTypeGetterConstructor()
}

Account.prototype.getBalance = function () {
  return this._balance
}

Account.prototype.increaseBalance = function (transactionValue) {
  this._balance += transactionValue
}

Account.prototype.reduceBalance = function (transactionValue) {
  this._balance -= transactionValue
}

Account.prototype.processTransaction = function (transactionObject) {
  if (this._transactionTypeGetter.getTransactionType(transactionObject) === 'Deposit') {
    this.increaseBalance(transactionObject.getValue())
  } else if (this._transactionTypeGetter.getTransactionType(transactionObject) === 'Withdrawal') {
    this.reduceBalance(transactionObject.getValue())
  }
  transactionObject.setBalance(this._balance)
  this._accountHistoryObject.record(transactionObject)
}

Account.prototype.getAccountHistory = function (accountPrinter = new Printer()) {
  return accountPrinter.printStatement(this._accountHistoryObject)
}

module.exports = Account
