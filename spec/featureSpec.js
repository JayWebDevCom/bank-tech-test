var TransactionTypeGetter = require('../lib/transactionTypeGetter');
var Account = require('../lib/account');
var Transaction = require('../lib/transaction');

var account = new Account();
var deposit1 = new Transaction('Deposit', 500, '07/07/2015');
var withdrawal1 = new Transaction('Withdrawal', 200, '08/07/2015');
var deposit2 = new Transaction('Deposit', 100, '09/07/2015');
var withdrawal2 = new Transaction('Withdrawal', 300, '10/07/2015');

account.processTransaction(deposit1);
account.processTransaction(withdrawal1);
account.processTransaction(deposit2);
account.processTransaction(withdrawal2);

console.log(account.getAccountHistory())
