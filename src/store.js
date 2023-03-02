import { applyMiddleware, combineReducers,legacy_createStore as createStore } from "@reduxjs/toolkit";
import { userReducer } from './redux/reducers/userReducers';
import  thunk  from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
    usersList: userReducer
})
const initialstate={}
const middleware = [thunk]

const store = createStore(rootReducer,initialstate,composeWithDevTools(applyMiddleware(...middleware)))

export default store;