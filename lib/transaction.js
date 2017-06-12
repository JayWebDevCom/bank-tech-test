(function(exports){

  Transaction = function(transactionType){
    ACCEPTED_TYPES = ['Deposit', 'Withdrawal']

    if (transactionType && ACCEPTED_TYPES.includes(transactionType)) {
      this._type = transactionType;
    } else if (transactionType && !ACCEPTED_TYPES.includes(transactionType)) {
      throw('Unknown Transaction Type')
    } else {
      this._type = 'Unspecified';
    }

  }

  Transaction.prototype.getType = function(){
    return this._type;
  }

})(this);
