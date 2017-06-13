var TransactionTypeGetter = function () {

}

TransactionTypeGetter.prototype.getTransactionType = function (transactionObject) {
  return transactionObject.getType()
}

module.exports = TransactionTypeGetter
