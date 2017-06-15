var Printer = require('../lib/printer')
var printer, withdrawalTransaction, depositTransaction, withdrawalTransaction2

describe('Printer', function () {
  beforeEach(function () {
    printer = new Printer()
    depositTransaction = {
      getType: function () { return 'Deposit' },
      getValue: function () { return 450 },
      getDate: function () { return '01/10/2017' },
      getBalance: function () { return 450 },
      getDepositInfo: function () { return 450.00 },
      getWithdrawalInfo: function () { return 150.00 }
    }
    withdrawalTransaction = {
      getType: function () { return 'Withdrawal' },
      getValue: function () { return 50 },
      getDate: function () { return '02/10/2017' },
      getBalance: function () { return 400 },
      getDepositInfo: function () { return ' ' },
      getWithdrawalInfo: function () { return 50.00 }
    }
    withdrawalTransaction2 = {
      getType: function () { return 'Withdrawal' },
      getValue: function () { return 150 },
      getDate: function () { return '03/10/2017' },
      getBalance: function () { return 250 },
      getDepositInfo: function () { return ' ' },
      getWithdrawalInfo: function () { return 150.00 }
    }
  })

  it('can be instantiated', function () {
    expect(printer instanceof Printer).toBeTruthy()
  })

  it('Has a header constant', function () {
    expect(printer.HEADER).toEqual('date || credit || debit || balance')
  })

  it('returns deposit transaction information for the statment', function () {
    expect(printer.getDepositInfo(withdrawalTransaction)).toEqual(' ')
  })

  it('returns deposit transaction information for the statment', function () {
    expect(printer.getDepositInfo(depositTransaction)).toEqual('450.00')
  })

  it('a returns transaction deposit transaction information for the statment', function () {
    expect(printer.getWithdrawalInfo(withdrawalTransaction)).toEqual('50.00')
  })

  it('b returns transaction deposit transaction information for the statment', function () {
    expect(printer.getWithdrawalInfo(depositTransaction)).toEqual(' ')
  })

  it('takes an object and formats and prints it\'s transaction information', function () {


    var transactionArray = [depositTransaction, withdrawalTransaction, withdrawalTransaction2]
    var accountHistoryObject = {
      getTransactions: function () { return transactionArray }
    }


    var textToBeReturned =
    'date || credit || debit || balance\n' +
    withdrawalTransaction2.getDate() + ' ||   || ' + withdrawalTransaction2.getValue().toFixed(2) + ' || ' + withdrawalTransaction2.getBalance().toFixed(2) + '\n' +
    withdrawalTransaction.getDate() + ' ||   || ' + withdrawalTransaction.getValue().toFixed(2) + ' || ' + withdrawalTransaction.getBalance().toFixed(2) + '\n' +
    depositTransaction.getDate() + ' || ' + depositTransaction.getValue().toFixed(2) + ' ||   || ' + depositTransaction.getBalance().toFixed(2) + '\n'

    expect(printer.printStatement(accountHistoryObject)).toEqual(textToBeReturned)
  })
})
