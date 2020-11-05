import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import listReducer from "../PhoneBookList/reducer";

// const store = createStore(listReducer, applyMiddleware(logger));
const store = createStore(listReducer);
// store.subscribe(() => console.log(store.getState()));

export default store;
