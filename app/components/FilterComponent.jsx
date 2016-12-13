var React = require('react');

var FilterComponent = React.createClass({
    render: function(){
        return (
            <div className="filterComponent">
                <label className="form-check-inline">
                    <input className="form-check-input" type="checkbox" id="filterComponent__option--car-park" value="carpark"></input> Car Park
                </label>
                <label className="form-check-inline">
                    <input className="form-check-input" type="checkbox" id="filterComponent__option--gym" value="gym"></input> Gym
                </label>
                <label className="form-check-inline">
                    <input className="form-check-input" type="checkbox" id="filterComponent__option--pool" value="pool"></input> Pool
                </label>
            </div>
        )
    }
});

module.exports = FilterComponent;