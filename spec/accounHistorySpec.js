var AccountHistory = require('../lib/accountHistory');
var accountHistory;

describe('AccountHistory', function(){

  beforeEach(function(){
    accountHistory = new AccountHistory()
  })

  it('can be instantiated', function(){
    expect(accountHistory instanceof AccountHistory).toBe(true)
  })

  it('has an empty transactions array attribute', function(){
    expect(accountHistory._transactions.length).toEqual(0)
  })

  it('getTransactions function returns the transactions array attribute', function(){
    expect(accountHistory.getTransactions().length).toEqual(0)
  })

  it('addToTransaction function adds objects to the transactions array attribute', function(){
    var object1 = {}; var object2 = {};
    accountHistory.record(object1); accountHistory.record(object2);
    expect(accountHistory.getTransactions().length).toEqual(2)
    expect(accountHistory.getTransactions().indexOf(object1)).toEqual(0)
    expect(accountHistory.getTransactions().indexOf(object2)).toEqual(1)
  })

})
