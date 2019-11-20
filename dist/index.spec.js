"use strict";

var _chai = require("chai");

describe('Vrai ou Faux', function () {
  it('true is true', function () {
    (0, _chai.expect)(true).equal(true);
  });
  it('false is false', function () {
    (0, _chai.expect)(false).equal(false);
  });
});