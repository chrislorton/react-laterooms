var React = require('react');

var FilterComponent = React.createClass({
    handleFilter: function() {
        var filterCarPark = this.refs.filterCarPark.checked;
        var filterGym = this.refs.filterGym.checked;
        var filterPool = this.refs.filterPool.checked;

        this.props.onFilter(filterCarPark, filterGym, filterPool);

    },
    render: function(){
        return (
            <div className="filterComponent">
                <label className="form-check-inline">
                    <input className="form-check-input" type="checkbox" ref="filterCarPark" id="filterComponent__option--car-park" value="carpark" onChange={this.handleFilter}></input> Car Park
                </label>
                <label className="form-check-inline">
                    <input className="form-check-input" type="checkbox" ref="filterGym" id="filterComponent__option--gym" value="gym" onChange={this.handleFilter}></input> Gym
                </label>
                <label className="form-check-inline">
                    <input className="form-check-input" type="checkbox" ref="filterPool" id="filterComponent__option--pool" value="pool" onChange={this.handleFilter}></input> Pool
                </label>
            </div>
        )
    }
});

module.exports = FilterComponent;