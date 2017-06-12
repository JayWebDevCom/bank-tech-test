var Printer = function(){
  this.HEADER = 'date || credit || debit || balance';
}

Printer.prototype.printStatement = function(array = arrayfTransactionObjects) {
  var space = ' '; var spacer = ' || '; var n = "\n"; var string = this.HEADER;
  string += n;
  array.reverse().forEach(function(object){
    if (object.getType() == 'Deposit') {
      string += object.getDate() + spacer + object.getValue() + spacer + spacer + object.getBalance() + n;
    } else if (object.getType() == 'Withdrawal') {
      string += object.getDate() + spacer + spacer + object.getValue() + spacer + object.getBalance() + n;
    }
  })

  return string;

}

module.exports = Printer;
