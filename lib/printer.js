var Printer = function(){
  this.HEADER = 'date || credit || debit || balance';
}

Printer.prototype.printStatement = function(array) {
  array.push(this.HEADER);
  array.reverse();
  return array.join("\n");
}

module.exports = Printer;
