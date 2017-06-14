var Printer = require('../lib/printer')
var printer
var FakeTransactionTypeGetter

describe('Printer', function () {
  beforeEach(function () {
    FakeTransactionTypeGetter = function () { }
    printer = new Printer(FakeTransactionTypeGetter)
  })

  it('can be instantiated', function () {
    expect(printer instanceof Printer).toBeTruthy()
  })

  it('Has a header constant', function () {
    expect(printer.HEADER).toEqual('date || credit || debit || balance')
  })

  it('takes an object and formats and prints it\'s transaction information', function () {
    var transaction1 = {
      getType: function () { return 'Deposit' },
      getValue: function () { return 450 },
      getDate: function () { return '01/10/2017' },
      getBalance: function () { return 450 }
    }
    var transaction2 = {
      getType: function () { return 'Withdrawal' },
      getValue: function () { return 50 },
      getDate: function () { return '02/10/2017' },
      getBalance: function () { return 400 }
    }
    var transaction3 = {
      getType: function () { return 'Withdrawal' },
      getValue: function () { return 150 },
      getDate: function () { return '03/10/2017' },
      getBalance: function () { return 250 }
    }

    var transactionArray = [transaction1, transaction2, transaction3]
    var accountHistoryObject = {
      getTransactions: function () { return transactionArray }
    }
    var textToBeReturned =
    'date || credit || debit || balance\n' +
    transaction3.getDate() + ' ||  || ' + transaction3.getValue().toFixed(2) + ' || ' + transaction3.getBalance().toFixed(2) + '\n' +
    transaction2.getDate() + ' ||  || ' + transaction2.getValue().toFixed(2) + ' || ' + transaction2.getBalance().toFixed(2) + '\n' +
    transaction1.getDate() + ' || ' + transaction1.getValue().toFixed(2) + ' ||  || ' + transaction1.getBalance().toFixed(2) + '\n'

    var FakeTransactionTypeGetter = function () { }

    FakeTransactionTypeGetter.prototype.getTransactionType = function (transactionObject) {
      return transactionObject.getType()
    }

    var printer = new Printer(FakeTransactionTypeGetter)
    expect(printer.printStatement(accountHistoryObject)).toEqual(textToBeReturned)
  })
})
