var React = require('react');

var SortComponent = React.createClass({
    render: function(){
        return (
            <div className="form-group sortComponent">
                <label for="sortComponent__select">Sort by:</label>
                <select className="form-control" id="sortComponent__select">
                    <option>Rating: High to Low</option>
                    <option>Rating: Low to High</option>
                </select>
            </div>
        )
    }
});

module.exports = SortComponent;