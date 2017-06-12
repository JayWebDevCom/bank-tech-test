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

  it('has a transaction history array', function(){
    var account = new Account()
    expect(account._accountHistory.length).toEqual(0);
  })


})

describe('Accounts Process Transactions', function(){

  beforeEach(function(){
    account = new Account();
  });

  it('can process a transaction deposit object',function(){
    var transaction = {
      getType : function() { return 'Deposit' },
      getValue : function() { return 200 },
      getDate : function() { return ''; }
    }
    account.processTransaction(transaction)
    expect(account.getBalance()).toEqual(200)
  });

  it('can process a transaction withdrawal object',function(){
    var transaction = {
      getType : function() { return 'Withdrawal' },
      getValue : function() { return 100 },
      getDate : function() { return ''; }
    }
    account.processTransaction(transaction)
    expect(account.getBalance()).toEqual(-100)
  });

  it('can process a transaction withdrawal object and record the transaction',function(){
    var transaction = {
      getType : function() { return 'Withdrawal' },
      getValue : function() { return 100 },
      getDate : function() { return '01/10/2017'; }
    }
    account.processTransaction(transaction)
    expect(account.getBalance()).toEqual(-100)
    expect(account._accountHistory[0]).toEqual('01/10/2017 || || 100 || -100')
  });



})
