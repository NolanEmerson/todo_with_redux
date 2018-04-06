import types from '../actions/types';

const DEFAULT_STATE = {
    todo_items: []
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        default:
            return state;
    }
}