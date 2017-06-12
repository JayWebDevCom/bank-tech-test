TransactionTypeGetter = function () {

}

TransactionTypeGetter.prototype.returnTransactionType = function(object){
  return object.getType();
}

module.exports = TransactionTypeGetter;
