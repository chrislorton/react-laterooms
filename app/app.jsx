var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.toggleShowCarPark());

require('style!css!bootstrap/dist/css/bootstrap.min.css')

ReactDOM.render(
  <Main/>,
  document.getElementById('app') 
);