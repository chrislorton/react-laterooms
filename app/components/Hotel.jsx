var React = require('react');

var Hotel = React.createClass({
    render: function() {

        var {Name, StarRating, Facilities} = this.props;

        return (
            <div className="card">
                <div className="row">
                    <div className="col-xs-2">
                        <span className="lnr lnr-home"></span>
                    </div>
                    <div className="col-xs-10">
                        <h3 className="hotelName">{Name}</h3>
                    </div>
                </div>
                <div className="row hotelDetails">
                    <div className="col-xs-6">
                        <p>Star Rating: {StarRating}</p>
                    </div>
                    <div className="col-xs-6">
                        <p>Facilities: {Facilities}</p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Hotel;