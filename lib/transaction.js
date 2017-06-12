  var Transaction = function(transactionType, value = 0, date){
    ACCEPTED_TYPES = ['Deposit', 'Withdrawal']

    if (transactionType && ACCEPTED_TYPES.includes(transactionType)) {
      this._type = transactionType;
    } else if (transactionType && !ACCEPTED_TYPES.includes(transactionType)) {
      throw('Unknown Transaction Type')
    }

  this._value = value;
  this._date = date;
  }

  Transaction.prototype.getType = function(){
    return this._type;
  }

  Transaction.prototype.getValue = function(){
    return this._value;
  }

  Transaction.prototype.getDate = function(){
    return this._date
  }

module.exports = Transaction;
