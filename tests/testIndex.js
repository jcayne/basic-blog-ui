var assert = require('assert');
var request = require('request');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var url = process.env.NODE_ENV === 'test' ? '*' : 'http://localhost:3000';

describe('Test Server', function() {
  describe('#helloWorld()', function() {
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


    it('check valid form', function(done) {
      this.timeout(10000);
      var driver = new webdriver.Builder()
        .forBrowser('firefox')
        .build();
      driver.get(url);
      var entryFormElement = driver.findElement(By.id('entry'));
      entryFormElement.clear();
      entryFormElement.sendKeys('Hello world!');
      driver.findElement(By.id('submit')).click().then(function() {
        driver.findElement(By.id('posting')).getText().then(function(text) {
          assert.equal(text, 'Submitted text:\nHello world!');
          driver.quit();
          done();
        });
      });
    });

    it('check invalid form', function(done) {
      this.timeout(10000);
      var driver = new webdriver.Builder()
        .forBrowser('firefox')
        .build();
      driver.get(url);
      var entryFormElement = driver.findElement(By.id('entry'));
      entryFormElement.clear();
      driver.findElement(By.id('submit')).click().then(function() {
        driver.findElement(By.id('posting')).getText().then(function(text) {
          assert.equal(text, 'Error: Missing required parameters.');
          driver.quit();
          done();
        });
      });
    });
  });
});
