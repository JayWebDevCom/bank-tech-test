var TransactionTypeGetter = require('../lib/transactionTypeGetter');
var transactionTypeGetter;

describe('Transaction Type Getter', function(){

  beforeEach(function(){
    transactionTypeGetter = new TransactionTypeGetter();
  });

  it('can be instantiated', function(){
    expect(transactionTypeGetter instanceof TransactionTypeGetter).toBe(true);
  });

  it('can determine the type of a transaction object', function(){
    var transactionObject = {
      getType : function() { return 'Deposit'; }
    }
    expect(transactionTypeGetter.getTransactionType(transactionObject)).toEqual('Deposit');
  });

});
