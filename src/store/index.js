import servicesReducer from "../redusers/servicesReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { serviceDetailsEpic, servicesEpic } from "../epics/servicesEpics";

const reducer = combineReducers({ services: servicesReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const epic = combineEpics(serviceDetailsEpic, servicesEpic);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(epic);

export default store;
