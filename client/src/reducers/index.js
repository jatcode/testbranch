import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import  currUser from '../containers/users/currUser_reducer'
import  formLoader  from '../containers/users/formLoader_reducer';
import  userReducer from '../containers/users/reducer'
const rootReducer = combineReducers({
 currUser,
 users: userReducer,
 form: formReducer, 
 formLoader,
 routing: routerReducer
}) ;


export default rootReducer;