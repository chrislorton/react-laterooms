var React = require('react');

var FilterComponent = React.createClass({

    handleFilter: function() {
        var filterCarPark = this.refs.filterCarPark.checked;
        this.props.onFilter(filterCarPark);
    },

    render: function(){
        return (
            <div className="filterComponent">
                <label className="form-check-inline">
                    <input className="form-check-input" type="checkbox" ref="filterCarPark" defaultChecked="true" id="filterComponent__option--car-park" value="carpark" onChange={this.handleFilter}></input> Car Park
                </label>
            </div>
        )
    }
});

module.exports = FilterComponent;