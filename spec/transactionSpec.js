var Transaction = require('../lib/transaction')
var transaction

describe('Transaction', function () {
  beforeEach(function () {
    transaction = new Transaction('Deposit', 0, '01/01/16')
  })

  it('can be instantiated', function () {
    expect(transaction instanceof Transaction).toBe(true)
  })

  it('cannot be instantiated without a date', function () {
    expect(function () {
      var transaction = new Transaction('Withdrawal', 0)
    }).toThrowError('Invalid Date Entered')
  })

  it('cannot be instantiated with in invalid a date', function () {
    expect(function () {
      var transaction = new Transaction('Withdrawal', 0, '2017/9/16')
    }).toThrowError('Invalid Date Entered')
  })

  it('can be of type deposit', function () {
    var transaction = new Transaction('Deposit', 0, '01/01/16')
    expect(transaction.getType()).toEqual('Deposit')
  })

  it('can be of type Withdrawal', function () {
    var transaction = new Transaction('Withdrawal', 0, '01/01/16')
    expect(transaction._type).toEqual('Withdrawal')
  })

  it('can get its type', function () {
    var transaction = new Transaction('Withdrawal', 0, '01/01/16')
    expect(transaction.getType()).toEqual('Withdrawal')
  })

  it('can only be of type Withdrawal or Deposit', function () {
    expect(function () {
      var transaction = new Transaction('SomeOther', 0, '01/01/16')
    }).toThrowError('Unknown Transaction Type')
  })

  it('can take a value', function () {
    var balance = 500
    var transaction = new Transaction('Deposit', balance, '01/01/16')
    expect(transaction).toBeTruthy()
    expect(transaction._value).toEqual(balance)
  })

  it('can get its value', function () {
    var transaction = new Transaction('Deposit', 500, '01/01/16')
    expect(transaction).toBeTruthy()
    expect(transaction.getValue()).toEqual(500)
  })

  it('takes a date attribute', function () {
    var transaction = new Transaction('Deposit', 500, '01/17/2016')
    expect(transaction._date).toBeTruthy()
  })

  it('getDate method returns the date', function () {
    var transaction = new Transaction('Deposit', 500, '03/17/2016')
    expect(transaction.getDate()).toEqual('03/17/2016')
  })

  it('setBalance method records balance', function () {
    var balance = 345
    transaction.setBalance(balance)
    expect(transaction._balance).toEqual(balance)
  })

  it('getdBalance method records balance', function () {
    var balance = 346
    transaction.setBalance(balance)
    expect(transaction.getBalance()).toEqual(balance);
  })
})
