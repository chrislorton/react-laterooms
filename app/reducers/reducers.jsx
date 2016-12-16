export var carParkReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_CARPARK':
        return !state;
        default:
        return state;
    }
 };