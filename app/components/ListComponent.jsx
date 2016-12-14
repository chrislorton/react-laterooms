var React = require('react');
var hotels = require('json!app/data/Hotels.json');

var ListComponent = React.createClass({
    render: function(){
        var hotelList = hotels.map(function(hotel, index){
            return <div key={index} className="card hotel">
                <div className="row">
                    <div className="col-xs-2">
                        <span className="lnr lnr-home"></span>
                    </div>
                    <div className="col-xs-10">
                        <h3>{hotel.Name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <p>Star Rating: {hotel.StarRating}</p>
                    </div>
                    <div className="col-xs-6">
                        <p>Facilities: {hotel.Facilities}</p>
                    </div>
                </div>
            </div>
        })
        return (
            <div> 
                {hotelList}
            </div>
        )
    }
});

module.exports = ListComponent;