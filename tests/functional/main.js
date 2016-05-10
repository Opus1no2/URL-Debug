define(function (require) {
  var registerSuite = require('intern!object');
  var expect = require('intern/chai!expect');
  var url = 'http://test.com/foo.html?foo=bar';

  registerSuite({
    name: 'index',

    'It should parse domain': function () {
      return this.remote
      .get(require.toUrl('app/main.html'))
      .setFindTimeout(5000)
      .findByCssSelector('.container textarea')
      .click()
      .type(url)
      .end()
      .findByCssSelector('.debug-btn')
      .click()
      .end()
      .findByCssSelector('.domain span')
      .getVisibleText()
      .then(function (text) {
        expect(text).to.equal('http://test.com');
      });
    },
    'It should parse pages': function () {
      return this.remote
      .get(require.toUrl('app/main.html'))
      .setFindTimeout(5000)
      .findByCssSelector('.container textarea')
      .click()
      .type(url)
      .end()
      .findByCssSelector('.debug-btn')
      .click()
      .end()
      .findByCssSelector('.pages span')
      .getVisibleText()
      .then(function (text) {
        expect(text).to.equal('/foo.html');
      });
    },
    'It should parse query params': function () {
      return this.remote
      .get(require.toUrl('app/main.html'))
      .setFindTimeout(5000)
      .findByCssSelector('.container textarea')
      .click()
      .type(url)
      .end()
      .findByCssSelector('.debug-btn')
      .click()
      .end()
      .findByCssSelector('.query span')
      .getVisibleText()
      .then(function (text) {
        expect(text).to.equal('foo = bar');
      });
    }
  });
});
