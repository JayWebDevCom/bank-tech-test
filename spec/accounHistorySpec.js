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

})
