(function(exports){

  TransactionTypeGetter = function () {

  }

  TransactionTypeGetter.prototype.returnTransactionType = function(object){
    return object.getType();
  }

})(this)
