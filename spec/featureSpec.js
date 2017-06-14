describe('Feature Spec', function () {
  it('outputs transaction history', function () {
  TransactionTypeGetter = require('../lib/transactionTypeGetter')
  Printer = require('../lib/printer')
  AccountHistory = require('../lib/accountHistory')
  var Account = require('../lib/account')
  var Transaction = require('../lib/transaction')
  var account = new Account()
  var deposit1 = new Transaction('Deposit', 500, '07/07/2015');
  var withdrawal1 = new Transaction('Withdrawal', 200, '08/07/2015');
  var deposit2 = new Transaction('Deposit', 100, '09/07/2015');
  var withdrawal2 = new Transaction('Withdrawal', 300, '10/07/2015');
  account.receiveTransactions(deposit1, deposit2, withdrawal1, withdrawal2)
  console.log(account.getAccountHistory())
  })
})
