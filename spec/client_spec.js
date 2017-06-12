var Client = require('../lib/client');
var client;

describe('client', function(){
  beforeEach(function(){
    client = new Client();
  })
  it('can be instantiated', function(){
    expect(client instanceof Client).toBe(true);
  })
});
