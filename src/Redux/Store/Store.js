import {combineReducers} from "redux"
import { configureStore } from "@reduxjs/toolkit";
import compReducers from "../Reducers/CompReducer";

const rootReducer = combineReducers( {
    comp : compReducers
});

let store = configureStore({
    reducer: rootReducer
});

export default store;