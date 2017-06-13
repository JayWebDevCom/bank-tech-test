var Printer = function( transactionTypeGetterConstructor = TransactionTypeGetter){
  this.HEADER = 'date || credit || debit || balance';
  this._transactionTypeGetter = new transactionTypeGetterConstructor();
}

Printer.prototype.printStatement = function(accountHistoryObject) {

  var space = ' '; var spacer = ' || '; var n = "\n"; var string = this.HEADER;
  string += n;
  arrayofTransactionObjects = accountHistoryObject.getTransactions()
  arrayofTransactionObjects.reverse().forEach(function(object){
    if (object.getType() == 'Deposit') {
      string += object.getDate() + spacer + object.getValue() + spacer + spacer + object.getBalance() + n;
    } else {
      string += object.getDate() + spacer + spacer + object.getValue() + spacer + object.getBalance() + n;
    }
  })

  return string;

}

module.exports = Printer;
