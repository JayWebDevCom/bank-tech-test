# Bank-tech-test
===================

### Description
* This application showcases a TDD and OOP approach to design a small banking account
application in which a client account is able to process deposit and withdrawal and
have a statement printed detailing the transactions processed and the balance changes incurred.

### Configuration instructions

#### Installation
* This application uses javascript and will need node to run
* Clone this repo
* Run ```$ npm install```

### Tests
* Run ```$ jasmine``` to display the testsuite outcome in the console.
* The file `spec/featureSpec.js` contains the code necessary to produce a statement in the form outlined below.

```
date || credit || debit || balance
10/07/2015 ||  || 300.00 || 100.00
08/07/2015 ||  || 200.00 || 400.00
09/07/2015 || 100.00 ||  || 600.00
07/07/2015 || 500.00 ||  || 500.00
```

#### Further Description
The `account object` is responsible for adjusting its balance based on the specification of the transaction object. The `account` object executes different actions on its balance based on the transaction classification which can be extended to a case statement.

Account records are held in the `accounthistory object`.

Transaction types are revealed by the `transactionTypeGetter object` which is dependency
injected separately into both the `account object` and the `printer object`.

The `printer object` receives an `accountHistory object` and returns desired statement style content.


#### Observations
* Objects have a single responsibility
* Effective DI is proven through and mocking in the test suite.
* I considered extracting transactions into individual classes but account would still have to ask them what type they were in order to know exactly what to do with them. For this reasons I believe that having a single transaction class and storing transactions in a single accountHistory object would be effective and easier to follow.

#### Improvements to be considered
* Extract instantiation arguments into a hash to make instantiation easier to follow.
* I have used both dependency injection of already instantiated objects and I have dependency injected object constructor shells. Both exhibit the same high levels of testability.
* I believe that using constructor shells reveals intention better.
