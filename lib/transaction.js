(function(exports){

  Transaction = function(transactionType, value = 0){
    ACCEPTED_TYPES = ['Deposit', 'Withdrawal']

    if (transactionType && ACCEPTED_TYPES.includes(transactionType)) {
      this._type = transactionType;
    } else if (transactionType && !ACCEPTED_TYPES.includes(transactionType)) {
      throw('Unknown Transaction Type')
    } else {
      this._type = 'Unspecified';
    }
  this._value = value;
  }

  Transaction.prototype.getType = function(){
    return this._type;
  }

  Transaction.prototype.getValue = function(){
    return this._value;
  }

})(this);
