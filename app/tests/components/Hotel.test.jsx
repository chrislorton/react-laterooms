var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Hotel = require('Hotel');

describe('Hotel', () => {
  it('should exist', () => {
    expect(Hotel).toExist();
  });
});
