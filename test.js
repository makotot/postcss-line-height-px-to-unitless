var postcss = require('postcss');
var expect = require('chai').expect;

var plugin = require('./index');


describe('postcss-line-height-px-to-unitless', function () {

  it('should convert a line-height value with px to a unitless value.', function (done) {
    postcss([
      plugin()
    ])
    .process('p {font-size: 10px; line-height: 10px;}')
    .then(function (result) {
      expect(result.css).to.eql('p {font-size: 10px; line-height: 1;}');
      done();
    });
  });
});
