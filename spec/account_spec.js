require('../lib/account')
var account;

describe('Account', function(){

  beforeEach(function(){
    account = new Account();
  });

  it('can be instantiated', function(){
    expect(account instanceof Account).toBe(true);
  })

  it('has a default balace of 0', function(){
    expect(account._balance).toEqual(0);
  })

  it('can be instantiated with an amount', function(){
    var account = new Account(200)
    expect(account._balance).toEqual(200);
  })

  it('can get its balance', function(){
    var account = new Account(200)
    expect(account.getBalance()).toEqual(200);
  })

  it('cannot be instantiated with a negative amount', function(){
    expect(function(){
      var account = new Account(-1)
    }).toThrow('Account balance must not be negative')
  })
})

describe('Accounts Process Transactions', function(){
  it('can process a transaction object',function(){

    var transaction = {}
    transaction.getType = function() { return 'Deposit' }
    transaction.getValue = function() { return 200 }

    account.processTransaction(transaction)
    expect(account.getBalance()).toEqual(200)
  })
})
