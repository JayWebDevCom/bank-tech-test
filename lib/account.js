var Account = function (
  balance = 0,
  AccountHistoryConstructor = AccountHistory,
  TransactionTypeGetterConstructor = TransactionTypeGetter) {
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

Account.prototype.receiveTransactions = function (...transactionObjectArray) {
  var transactionTypeGetter = this._transactionTypeGetter
  var accountHistoryObject = this._accountHistoryObject
  var thisAccount = this
  transactionObjectArray.forEach(function (transactionObject) {
    if (transactionTypeGetter.getTransactionType(transactionObject) === 'Deposit') {
      thisAccount.increaseBalance(transactionObject.getValue())
    } else if (transactionTypeGetter.getTransactionType(transactionObject) === 'Withdrawal') {
      thisAccount.reduceBalance(transactionObject.getValue())
    }
    transactionObject.setBalance(thisAccount.getBalance())
    accountHistoryObject.record(transactionObject)
  })
}

Account.prototype.getAccountHistory = function (accountPrinter = new Printer()) {
  return accountPrinter.printStatement(this._accountHistoryObject)
}

module.exports = Account
