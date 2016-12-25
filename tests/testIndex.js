var assert = require('assert');
var request = require('request');

describe('Test Server', function() {
  describe('#helloWorld()', function() {
    var url = 'http://localhost:3000';
    it('check for error', function(done) {
      request.get(url, function(error, response, body) {
        assert.ifError(error);
        done();
      });
    });

    it('check response code', function(done) {
      request.get(url, function(error, response, body) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });

    it('check response body', function(done) {
      request.get(url, function(error, response, body) {
        assert.equal(body, 'Hello world!');
        done();
      });
    });
  });
});
