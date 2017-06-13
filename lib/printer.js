var Printer = function( transactionTypeGetterConstructor = TransactionTypeGetter){
  this.HEADER = 'date || credit || debit || balance';
  this._transactionTypeGetter = new transactionTypeGetterConstructor();
}

Printer.prototype.printStatement = function(accountHistoryObject) {

  var space = ' '; var spacer = ' || '; var n = "\n"; var string = this.HEADER;
  string += n;

  var arrayofTransactionObjects = accountHistoryObject.getTransactions();

  // must assign transactionTypeGetter to a variable to pass into forEach because of this scope constraints
  var usetransactionTypeGetter = this._transactionTypeGetter;

  arrayofTransactionObjects.reverse().forEach(function(transactionObject){

    if ( usetransactionTypeGetter.getTransactionType(transactionObject) == 'Deposit' ) {

      string += transactionObject.getDate() + spacer + transactionObject.getValue() + spacer + spacer + transactionObject.getBalance() + n;

    } else if (usetransactionTypeGetter.getTransactionType(transactionObject) == 'Withdrawal' ) {

      string += transactionObject.getDate() + spacer + spacer + transactionObject.getValue() + spacer + transactionObject.getBalance() + n;

    }

  })

  return string;

}

module.exports = Printer;
