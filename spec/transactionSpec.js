var Transaction = require('../lib/transaction')
var transaction

describe('Transaction', function () {
  beforeEach(function () {
    withdrawalTransaction = new Transaction('Withdrawal', 250, '01/01/16')
    depositTransaction = new Transaction('Deposit', 150, '01/01/16')
  })

  it('can be instantiated', function () {
    expect(depositTransaction instanceof Transaction).toBe(true)
  })

  // it('has a default value of 0 upon instantiation', function () {
  //   var transaction = new Transaction()
  //   expect(depositTransaction._value).toEqual(0)
  // })

  it('cannot be instantiated without a date', function () {
    expect(function () {
      var transaction = new Transaction('Withdrawal', 0)
    }).toThrowError('Invalid Date Entered')
  })

  it('cannot be instantiated with an invalid a date', function () {
    expect(function () {
      var transaction = new Transaction('Withdrawal', 0, '2017/9/16')
    }).toThrowError('Invalid Date Entered')
  })

  it('takes a date attribute', function () {
    expect(depositTransaction._date).toBeTruthy()
  })

  it('getDate method returns the date', function () {
    expect(depositTransaction.getDate()).toEqual('01/01/16')
    expect(withdrawalTransaction.getDate()).toEqual('01/01/16')
  })

  it('can be instantiated with a value', function () {
    var balance = 500
    var transaction = new Transaction('Deposit', balance, '01/01/16')
    expect(transaction).toBeTruthy()
    expect(transaction._value).toEqual(balance)
  })

  it('cannot be instantiated with a negative ', function () {
    var balance = -500
    expect(function () {
      var transaction = new Transaction('Deposit', balance, '01/01/16')
    }).toThrowError('Value cannnot be negative')
  })

  it('can be of type deposit', function () {
    expect(depositTransaction.getType()).toEqual('Deposit')
  })

  it('can be of type Withdrawal', function () {
    expect(withdrawalTransaction._type).toEqual('Withdrawal')
  })

  it('can get its type', function () {
    expect(withdrawalTransaction.getType()).toEqual('Withdrawal')
  })

  it('can only be of type Withdrawal or Deposit', function () {
    expect(function () {
      var transaction = new Transaction('SomeOther', 0, '01/01/16')
    }).toThrowError('Unknown Transaction Type')
  })

  it('can get its value', function () {
    var transaction = new Transaction('Deposit', 500, '01/01/16')
    expect(transaction.getValue()).toEqual(500)
  })

  it('setBalance method records balance', function () {
    var balance = 345
    withdrawalTransaction.setBalance(balance)
    expect(withdrawalTransaction._balance).toEqual(balance)
  })

  it('getBalance method records balance', function () {
    var balance = 346
    depositTransaction.setBalance(balance)
    expect(depositTransaction.getBalance()).toEqual(balance);
  })

  it('getDepositOutput aaaaaaa returns appropriate information', function () {
    expect(depositTransaction.getDepositOutput()).toEqual(150.00);
  })

  it('getWithdrawal returns appropriate information', function () {
    expect(depositTransaction.getWithdrawalOutput()).toEqual(' ');
  })

  it('getDepositOutput returns appropriate information', function () {
    expect(withdrawalTransaction.getDepositOutput()).toEqual(' ');
  })

  it('getWithdrawal bbbbbb returns appropriate information', function () {
    expect(withdrawalTransaction.getWithdrawalOutput()).toEqual(250.00);
  })
})
