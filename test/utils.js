'use strict';

var expect = require('chai').expect;
var utils = require('../src/utils');

describe('Utils', function () {
  describe('.format', function () {
    it('should return the string surrounded with | character', function () {
      var formattedStr = utils.format('toto');
      expect(formattedStr).to.be.equal('|toto|');
    });
  });
});