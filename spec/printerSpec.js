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

  it('takes and prints an array', function(){
    var textToBePrinted = ['apple', 'pear', 'berry', 'grape']
    var testText = textToBePrinted.join('\n')
    expect(printer.printStatement(textToBePrinted)).toEqual(testText)
  })

})
