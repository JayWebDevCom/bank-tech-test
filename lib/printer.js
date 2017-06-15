var Printer = function () {
  this.HEADER = 'date || credit || debit || balance'
}

Printer.prototype.printStatement = function (accountHistoryObject) {
  var spacer = ' || '; var n = '\n'; var string = this.HEADER
  string += n

  var arrayofTransactionObjects = accountHistoryObject.getTransactions()
  arrayofTransactionObjects.reverse().forEach(transactionObject => {
    string += transactionObject.getDate() +
    spacer + this.getDepositInfo(transactionObject) +
    spacer + this.getWithdrawalInfo(transactionObject) +
    spacer + transactionObject.getBalance().toFixed(2) + n
  })
  return string
}

Printer.prototype.getDepositInfo = function (transaction) {
  if (transaction.getType() === 'Deposit') {
    return transaction.getValue().toFixed(2)
  } else {
    return ' '
  }
}

Printer.prototype.getWithdrawalInfo = function (transaction) {
  if (transaction.getType() === 'Deposit') {
    return ' '
  } else {
    return transaction.getValue().toFixed(2)
  }
}

module.exports = Printer
