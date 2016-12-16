var React = require('react');
var Hotel = require('Hotel');

var HotelList = React.createClass({
    render: function(){

        var {hotels} = this.props;

        var renderHotels = () => {
            return hotels.map((hotel, i) => {
                return (
                    <Hotel key={i} {...hotel}/>
                );
            });
        };
        return (
            <div> 
                {renderHotels()}
            </div>
        )
    }
});

module.exports = HotelList;