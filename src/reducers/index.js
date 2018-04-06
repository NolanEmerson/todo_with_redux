import {combineReducers} from 'redux';
import listReducer from './reducer_list';

export default combineReducers({
    list: listReducer
});