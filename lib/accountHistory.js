var AccountHistory = function(){
  this._transactions = []
}

AccountHistory.prototype.getTransactions = function(){
  return this._transactions;
}

module.exports = AccountHistory;
