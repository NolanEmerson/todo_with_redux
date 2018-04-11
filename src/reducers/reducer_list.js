import types from '../actions/types';

const DEFAULT_STATE = {
    items: [],
    singleItem: {}
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_LIST_DATA:
            return {...state, items: action.payload.data.todos};
        case types.GET_SINGLE_ITEM:
            console.log('Get single item result: ', action);
            return {...state, singleItem: action.payload.data.todo};
        case types.DELETE_ITEM:
            console.log('Delete item result: ', action);
            return {...state, singleItem: action.payload.data.todo};
        case types.TOGGLE_COMPLETE:
            console.log('Toggle complete result: ', action);
            return {...state, singleItem: action.payload.data.todo};
        default:
            return state;
    }
}