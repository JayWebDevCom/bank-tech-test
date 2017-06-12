require('../lib/client');
var client;

describe('Client', function(){
  beforeEach(function(){
    client = new Client(new Account());
  })
  it('can be instantiated', function(){
    expect(client instanceof Client).toBe(true);
  })
});
