import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import listReducer from './reducer_list';

export default combineReducers({
    list: listReducer,
    form: formReducer
});