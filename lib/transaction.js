var Transaction = function (transactionType, value = 0, date = 'invalid') {
  const ACCEPTED_TYPES = ['Deposit', 'Withdrawal']
  const DATE_REGEX = '^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$'

  if (value < 0) { throw new Error('Value cannnot be negative') }

  if (transactionType && !ACCEPTED_TYPES.includes(transactionType)) {
    throw new Error('Unknown Transaction Type')
  }

  if (!date.match(DATE_REGEX)) { throw new Error('Invalid Date Entered') }

  this._date = date
  this._type = transactionType
  this._value = value
  this._balance = 'Unspecified'
}

Transaction.prototype.getType = function () {
  return this._type
}

Transaction.prototype.getValue = function () {
  return this._value
}

Transaction.prototype.getDate = function () {
  return this._date
}

Transaction.prototype.setBalance = function (accountBalance) {
  this._balance = accountBalance
}

Transaction.prototype.getBalance = function () {
  return this._balance
}

module.exports = Transaction
