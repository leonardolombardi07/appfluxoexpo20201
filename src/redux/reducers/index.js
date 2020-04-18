import { combineReducers } from 'redux';
import authReducer from './authReducer';
import plantaoReducer from './plantaoReducer';
import reunioesReducer from './reunioesReducer';

export default combineReducers({
    authData: authReducer,
    plantaoData: plantaoReducer,
    reunioesData: reunioesReducer
});
