var React = require('react');
var ListComponent = require('ListComponent');
var FilterComponent = require('FilterComponent');
var SortComponent = require('SortComponent');

var Main = React.createClass({
    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <FilterComponent/>
                        <SortComponent/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <ListComponent/>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = Main;