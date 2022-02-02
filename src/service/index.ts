import { createStore, applyMiddleware, compose } from "redux";
import AppReducer from "./redux/reducer";
import logger from 'redux-logger'
let store = createStore(
    AppReducer,
    applyMiddleware(logger)
)

export { store };