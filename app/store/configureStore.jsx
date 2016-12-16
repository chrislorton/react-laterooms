var redux = require('redux');
var {carParkReducer} = require('reducers');

export var configure = () => {
    var reducer = redux.combineReducers({
        carPark: carParkReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};