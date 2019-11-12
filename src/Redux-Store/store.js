// external libraries
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
// internal libraries (ones we wrote)
import * as reducers from "./Vendors/reducer-exporter"
// declare variables
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers(reducers);
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

export default store