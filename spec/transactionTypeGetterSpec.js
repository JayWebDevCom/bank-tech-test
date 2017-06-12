require('../lib/transactionTypeGetter');
var transactionTypeGetter;

describe('transactionTypeGetter', function(){
  
  beforeEach(function(){
    transactionTypeGetter = new TransactionTypeGetter();
  });

  it('determines the transaction type', function(){
    transactionObject = {
      getType : function() { return 'Abc'}
    }
    expect(transactionTypeGetter.returnTransactionType(transactionObject)).toEqual('Abc')
  })
})
