require('../lib/transaction');
var transaction;

describe('transaction', function(){
  beforeEach(function(){
    transaction = new Transaction();
  })
  it('can be instantiated', function(){
      expect(transaction instanceof Transaction).toBe(true);
  })
  it('can be of type deposit', function(){
      var transaction = new Transaction('Deposit')
      expect(transaction.getType()).toEqual('Deposit');
  })
  it('can be of type withdrawal', function(){
      var transaction = new Transaction('Withdrawal')
      expect(transaction.getType()).toEqual('Deposit');
  })
})
