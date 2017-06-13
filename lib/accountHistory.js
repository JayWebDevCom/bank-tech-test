var AccountHistory = function () {
  this._transactions = []
}

AccountHistory.prototype.record = function (object) {
  this._transactions.push(object)
}

AccountHistory.prototype.getTransactions = function () {
  return this._transactions
}

module.exports = AccountHistory
