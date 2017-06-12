var AccountHistory = require('../lib/accountHistory');
var accountHistory;

describe('AccountHistory', function(){

  beforeEach(function(){
    accountHistory = new AccountHistory()
  })

  it('can be instantiated', function(){
    expect(accountHistory instanceof AccountHistory).toBe(true)
  })

})
