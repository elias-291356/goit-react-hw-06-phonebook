
import { combineReducers } from "redux";
import { phoneBookReducer } from "./phoneBookReducer";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

//=============== After ========================

export const store = configureStore({
  reducer: rootReducer,
});