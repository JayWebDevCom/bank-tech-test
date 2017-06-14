var Printer = function (TransactionTypeGetterConstructor = TransactionTypeGetter) {
  this.HEADER = 'date || credit || debit || balance'
  this._transactionTypeGetter = new TransactionTypeGetterConstructor()
}

Printer.prototype.printStatement = function (accountHistoryObject) {
  var spacer = ' || '; var n = '\n'; var string = this.HEADER
  string += n

  var arrayofTransactionObjects = accountHistoryObject.getTransactions()

  /* must assign transactionTypeGetter to a variable to pass into forEach because of this scope constraints */
  var theTransactionTypeGetter = this._transactionTypeGetter

  arrayofTransactionObjects.reverse().forEach(function (transactionObject) {
    if (theTransactionTypeGetter.getTransactionType(transactionObject) === 'Deposit') {
      string += transactionObject.getDate() + spacer + transactionObject.getValue().toFixed(2) + spacer + spacer + transactionObject.getBalance().toFixed(2) + n
    } else if (theTransactionTypeGetter.getTransactionType(transactionObject) === 'Withdrawal') {
      string += transactionObject.getDate() + spacer + spacer + transactionObject.getValue().toFixed(2) + spacer + transactionObject.getBalance().toFixed(2) + n
    }
  })
  return string
}

module.exports = Printer
