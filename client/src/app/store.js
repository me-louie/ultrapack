import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import  reducers  from "./reducers/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, composeEnhancer(middleware));

export { store };
