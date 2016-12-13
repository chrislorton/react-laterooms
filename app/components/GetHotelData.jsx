var React = require('react');
var axios = require('axios');
var data = require('json!./app/data/Hotels.json');

const HOTEL_DATA = 'app/data/Hotels.json';


var ListComponent = React.createClass({
    render: function(){
        return (
            data
        )
    }
});

module.exports = {
    
}