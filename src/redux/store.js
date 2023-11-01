import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import appReducer from './appReducer.js';
import programReducer from './programReducer.js';
import courseReducer from './courseReducer.js';
import reviewsPrimaryReducer from './reviewsPrimaryReducer.js';
import reviewsSecondaryReducer from './reviewsSecondaryReducer.js';
import certificateReducer  from "./certificateReducer.js"; 
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    appReducer,
    programReducer,
    courseReducer,
    reviewsPrimaryReducer,
    reviewsSecondaryReducer,
    certificateReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;