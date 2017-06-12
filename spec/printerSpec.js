require('../lib/printer');
var printer

describe('Printer', function(){
  beforeEach(function(){
    printer = new Printer
  })
  it('can be instantiated', function(){
    expect(printer instanceof Printer).toBeTruthy();
  })
})
