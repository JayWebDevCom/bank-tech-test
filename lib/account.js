var Account = function (
  balance = 0.00,
  AccountHistoryConstructor = AccountHistory
) {
  if (balance < 0) { throw new Error('Account balance must not be negative') }
  this._balance = balance
  this._accountHistoryObject = new AccountHistoryConstructor()
}

Account.prototype.getBalance = function () {
  return this._balance
}

Account.prototype.changeBalance = function (transaction) {
  if (transaction.getType() === 'Deposit') {
    this._balance += transaction.getValue()
  } else if (transaction.getType() === 'Withdrawal') {
    this._balance -= transaction.getValue()
  }
}

Account.prototype.increaseBalance = function (transactionValue) {
  this._balance += transactionValue
}

Account.prototype.reduceBalance = function (transactionValue) {
  this._balance -= transactionValue
}

Account.prototype.receiveTransactions = function (...transactions) {
  var accountHistoryObject = this._accountHistoryObject
  var thisAccount = this

  transactions.forEach(function (transaction) {
    thisAccount.changeBalance(transaction)
    transaction.setBalance(thisAccount.getBalance())
    accountHistoryObject.record(transaction)
  })
}

Account.prototype.getAccountHistory = function (accountPrinter = new Printer()) {
  return accountPrinter.printStatement(this._accountHistoryObject)
}

module.exports = Account
