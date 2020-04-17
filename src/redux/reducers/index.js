import { combineReducers } from 'redux';
import authReducer from './authReducer';
import plantaoReducer from './plantaoReducer';

export default combineReducers({
    authData: authReducer,
    plantaoData: plantaoReducer
});
