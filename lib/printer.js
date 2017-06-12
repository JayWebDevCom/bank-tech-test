(function(exports){

  Printer = function(){
    this.HEADER = 'date || credit || debit || balance';
  }

  Printer.prototype.printStatement = function(array) {
    return array.join('\n')
  }

})(this);
