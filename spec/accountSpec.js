var Account = require('../lib/account')
var account
var AccountHistoryConstructor = function () {
  this._transactions = []
}
AccountHistoryConstructor.prototype.getTransactions = function () {
  return this._transactions
}

AccountHistoryConstructor.prototype.record = function (object) {
  this._transactions.push(object)
}

var TransactionTypeGetterConstructor = function () {

}

describe('Account', function () {
  beforeEach(function () {
    account = new Account(0, AccountHistoryConstructor, TransactionTypeGetterConstructor)
  })

  it('can be instantiated', function () {
    expect(account instanceof Account).toBe(true)
  })

  it('has a default balace of 0', function () {
    expect(account._balance).toEqual(0)
  })

  it('can be instantiated with an amount', function () {
    var account = new Account(200, AccountHistoryConstructor, TransactionTypeGetterConstructor)
    expect(account._balance).toEqual(200)
  })

  it('can get its balance', function () {
    var account = new Account(200, AccountHistoryConstructor, TransactionTypeGetterConstructor)
    expect(account.getBalance()).toEqual(200)
  })

  it('can increase it\'s balance', function () {
    account.increaseBalance(50)
    expect(account.getBalance()).toEqual(50)
  })

  it('can reduce it\'s balance', function () {
    var account = new Account(200, AccountHistoryConstructor, TransactionTypeGetterConstructor)
    account.reduceBalance(50)
    expect(account.getBalance()).toEqual(150)
  })

  it('cannot be instantiated with a negative amount', function () {
    expect(function () {
      account = new Account(-1, AccountHistoryConstructor, TransactionTypeGetterConstructor)
    }).toThrowError('Account balance must not be negative')
  })

  it('has a transaction history object', function () {
    var account = new Account(0, AccountHistoryConstructor, TransactionTypeGetterConstructor)
    expect(account._accountHistoryObject instanceof AccountHistoryConstructor, TransactionTypeGetterConstructor).toBe(true)
  })

  it('isTransactionADeposit function uses DI to determine trasaction type', function () {
    var transaction = {
      getType: function () { return 'Deposit' }
    }
    var MockTransactionTypeGetterConstructor = function () {}
    MockTransactionTypeGetterConstructor.prototype.getTransactionType = function (transactionObject) {
      return transactionObject.getType()
    }
    var account = new Account(0, AccountHistoryConstructor, MockTransactionTypeGetterConstructor)
    expect(account._transactionTypeGetter.getTransactionType(transaction)).toEqual('Deposit')
  })
})

describe('Account - Transaction Processing', function () {
  var account; var TransactionTypeGetterConstructor
  beforeEach(function () {
    TransactionTypeGetterConstructor = function () {}
    TransactionTypeGetterConstructor.prototype.getTransactionType = function (transaction) {
      return transaction.getType()
    }
    account = new Account(0, AccountHistoryConstructor, TransactionTypeGetterConstructor)
  })

  it('can process multiple transactions at once', function () {
    var transaction1 = {
      getType: function () { return 'Deposit' },
      getValue: function () { return 200 },
      getDate: function () { return '' },
      setBalance: function () {}
    }
    var transaction2 = {
      getType: function () { return 'Withdrawal' },
      getValue: function () { return 199 },
      getDate: function () { return '' },
      setBalance: function () {}
    }

    account.receiveTransactions(transaction1, transaction2)
    expect(account.getBalance()).toEqual(1)
  })

  it('receiveTransaction passes transaction on to it\'s TransactionTypeGetter Object', function () {
    var transaction = {
      getType: function () { return 'Deposit' },
      getValue: function () { return 200 },
      getDate: function () { return '' },
      setBalance: function () {}
    }
    spyOn(account._transactionTypeGetter, 'getTransactionType')
    account.receiveTransactions(transaction)
    expect(account._transactionTypeGetter.getTransactionType).toHaveBeenCalledWith(transaction);
  })

  it('receiveTransaction passes transaction on to it\'s AccountHistory Object', function () {
    var transaction = {
      getType: function () { return 'Deposit' },
      getValue: function () { return 200 },
      getDate: function () { return '' },
      setBalance: function () {}
    }
    spyOn(account._accountHistoryObject, 'record')
    account.receiveTransactions(transaction)
    expect(account._accountHistoryObject.record).toHaveBeenCalledWith(transaction)
  })

  it('receiveTransaction function takes a deposit object and adjust its balance appropritely', function () {
    var transaction = {
      getType: function () { return 'Deposit' },
      getValue: function () { return 200 },
      getDate: function () { return '' },
      setBalance: function () {}
    }
    account.receiveTransactions(transaction)
    expect(account.getBalance()).toEqual(200)
  })

  it('receiveTransaction function takes a withdrawal object and adjust its balance appropritely', function () {
    var transaction = {
      getType: function () { return 'Deposit' },
      getValue: function () { return 200 },
      getDate: function () { return '' },
      setBalance: function () {}
    }

    account.receiveTransactions(transaction)
    expect(account.getBalance()).toEqual(200)
  })

  it('receiveTransaction function takes a transaction deposit object and records the transaction', function () {
    var transaction = {
      getType: function () { return 'Deposit' },
      getValue: function () { return 250 },
      getDate: function () { return '10/10/2017' },
      setBalance: function () {}
    }

    account.receiveTransactions(transaction)
    expect(account.getBalance()).toEqual(250)
    expect(account._accountHistoryObject.getTransactions()[0]).toEqual(transaction)
  })

  it('receiveTransaction function takes a withdrawal object and records the transaction',function () {
    var transaction = {
      getType: function () { return 'Withdrawal' },
      getValue: function () { return 100 },
      getDate: function () { return '01/10/2017' },
      setBalance: function () {}
    }

    account.receiveTransactions(transaction)
    expect(account.getBalance()).toEqual(-100)
    expect(account._accountHistoryObject.getTransactions()[0]).toEqual(transaction)
  })
})

describe('Account Feature Spec', function () {
  var TransactionTypeGetterConstructor; var account
  beforeEach(function () {
    TransactionTypeGetterConstructor = function () {}
    TransactionTypeGetterConstructor.prototype.getTransactionType = function (transaction) {
      return transaction.getType()
    }
    account = new Account(0, AccountHistoryConstructor, TransactionTypeGetterConstructor)
  })

  it('records several transactions', function () {
    expect(account.getBalance()).toEqual(0)
    var transaction1 = {
      getType: function () { return 'Deposit' },
      getValue: function () { return 100 },
      getDate: function () { return '10/01/17' },
      setBalance: function () {}
    }
    var transaction2 = {
      getType: function () { return 'Deposit' },
      getValue: function () { return 150 },
      getDate: function () { return '11/01/17' },
      setBalance: function () {}
    }
    var transaction3 = {
      getType: function () { return 'Withdrawal' },
      getValue: function () { return 50 },
      getDate: function () { return '12/01/17' },
      setBalance: function () {}
    }

    account.receiveTransactions(transaction1)
    account.receiveTransactions(transaction2)
    account.receiveTransactions(transaction3)

    var textToTestAgainst =
    'date || credit || debit || balance\n' +
    transaction3.getDate() + ' || || ' + transaction3.getValue() + ' || 200\n' +
    transaction2.getDate() + ' || ' + transaction2.getValue() + ' || || 250\n' +
    transaction1.getDate() + ' || ' + transaction1.getValue() + ' || || 100'

    var FakePrinter = {
      printStatement: function () { return textToTestAgainst }
    }

    expect(account.getBalance()).toEqual(200)
    expect(account.getAccountHistory(FakePrinter)).toEqual(textToTestAgainst)
  })
})
