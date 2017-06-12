require('../lib/printer');
var printer;

describe('Printer', function(){

  beforeEach(function(){
    printer = new Printer()
  })

  it('can be instantiated', function(){
    expect(printer instanceof Printer).toBeTruthy();
  })

  it('Has a header constant', function(){
    expect(printer.HEADER).toEqual('date || credit || debit || balance');
  })

  it('takes and prints an array with a header', function(){
    var header = 'date || credit || debit || balance';
    var textToBePrinted = ['apple', 'pear', 'berry', 'grape']
    var textToBeReturned = ['apple', 'pear', 'berry', 'grape']
    textToBeReturned.push(header);
    textToBeReturned.reverse();
    var textToBeReturned = textToBeReturned.join('\n');
    expect(printer.printStatement(textToBePrinted)).toEqual(textToBeReturned)
  })

})
