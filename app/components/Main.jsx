var React = require('react');
var HotelList = require('HotelList');
var hotels = require('json!app/data/Hotels.json');
var FilterComponent = require('FilterComponent');
var SortComponent = require('SortComponent');

var Main = React.createClass({

    getInitialState: function(){
        return {
            hotels,
            filterCarPark: true
        };
    },

    // handleCarParkFilter: function(){
    //     this.setState({
    //         filterCarPark: filterCarPark,
    //     })
    // },  

    // handleFilter: function(filterCarPark, filterGym, filterPool){

    //     if(filterCarPark){
    //         this.setState({
    //             filterCarPark: filterCarPark,
    //         })
    //     } else {
    //          this.setState({
    //             filterCarPark: false,
    //         })
    //     }
    //     if(filterGym){
    //         this.setState({
    //             filterGym: filterGym,
    //         })
            
    //     } else {
    //          this.setState({
    //             filterGym: false,
    //         })
    //     }
    //     if(filterPool){
    //         this.setState({
    //             filterPool: filterPool,
    //         })
    //     } else {
    //          this.setState({
    //             filterPool: false,
    //         })
    //     }
    // },

    handleFilter: function(filterCarPark){
        this.setState({
            filterCarPark: filterCarPark
        })
    },

    render: function(){

        var {hotels} = this.state;

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
                        <HotelList hotels={hotels}/>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = Main;