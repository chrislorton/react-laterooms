var redux = require('redux');

console.log('sTARTING example');

var stateDefault = {
    searchText: '',
    showCompleted: '',
    todos: []
};

var reducer = (state = stateDefault, action) => {
    console.log('New Action', action);

    switch(action.type) {
        case 'CHANGE_NAME': 
        return {
            ...state, 
            name: action.name
        };
    }

    return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', store.getState());

var action = {
    type: 'CHANGE_NAME',
    name: 'Chris'
};

store.dispatch(action);