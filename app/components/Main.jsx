var React = require('react');
var ListComponent = require('ListComponent');
var FilterComponent = require('FilterComponent');
var SortComponent = require('SortComponent');

var Main = React.createClass({

    getInitialState: function(){
        return {
            filterCarPark: false,
            filterGym: false,
            filterPool: false
        };
    },

    handleFilter: function(){
        this.setState({
            filterCarPark: filterCarPark,
            filterGym: filterGym,
            filterPool: filterPool
        })
    },

    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <FilterComponent onFilter={this.handleFilter}/>
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