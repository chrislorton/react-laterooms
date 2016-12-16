var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var HotelList = require('HotelList');
var Hotel = require('Hotel');

describe('HotelList', () => {
  it('should exist', () => {
    expect(HotelList).toExist();
  });

  it('should render one Hotel component for each hotel item', () => {
    var hotels = [{
      id: 1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Check mail'
    }];
    var hotelList = TestUtils.renderIntoDocument(<HotelList hotels={hotels}/>);
    var hotelsComponents = TestUtils.scryRenderedComponentsWithType(hotelList, Hotel);

    expect(hotelsComponents.length).toBe(hotels.length);
  });
});
