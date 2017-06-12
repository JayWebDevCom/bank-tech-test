var Account = require('../lib/account')
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

  it('can process a transaction deposit object and record the transaction',function(){
    var transaction = {
      getType : function() { return 'Deposit' },
      getValue : function() { return 250 },
      getDate : function() { return '10/10/2017'; }
    }
    account.processTransaction(transaction)
    expect(account._accountHistory[0]).toEqual('10/10/2017 || 250 || || 250')
  });

    it('can process a transaction withdrawal object and record the transaction',function(){
    var transaction = {
      getType : function() { return 'Withdrawal' },
      getValue : function() { return 100 },
      getDate : function() { return '01/10/2017'; }
    }
    account.processTransaction(transaction)
    expect(account._accountHistory[0]).toEqual('01/10/2017 || || 100 || -100')
  });

})

describe('Account Feature Spec', function(){
  beforeEach(function(){
    account = new Account();
  });
  it('records several transactions', function(){
    expect(account.getBalance()).toEqual(0)
    var transaction1 = {
      getType : function() { return 'Deposit' },
      getValue : function() { return 100 },
      getDate : function() { return '10/01/17'; }
    }
    var transaction2 = {
      getType : function() { return 'Deposit' },
      getValue : function() { return 150 },
      getDate : function() { return '11/01/17'; }
    }
    var transaction3 = {
      getType : function() { return 'Withdrawal' },
      getValue : function() { return 50 },
      getDate : function() { return '12/01/17'; }
    }

    account.processTransaction(transaction1)
    account.processTransaction(transaction2)
    account.processTransaction(transaction3)

    var textToTestAgainst =
    "date || credit || debit || balance\n"
    +transaction3.getDate() +" || || "+transaction3.getValue()+" || 200\n"
    +transaction2.getDate() +" || "+transaction2.getValue()+" || || 250\n"
    +transaction1.getDate() +" || "+transaction1.getValue()+" || || 100"

    var fakePrinter = {
      printStatement : function() { return textToTestAgainst }
    }
    expect(account.getAccountHistory(fakePrinter)).toEqual(textToTestAgainst)
  })
})
