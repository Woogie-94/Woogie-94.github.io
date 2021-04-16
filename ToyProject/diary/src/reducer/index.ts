import { combineReducers } from "redux";
import { noteOpenKey, daleNoteReducer } from "./todo";

export const TodoReducers = combineReducers({ daleNoteReducer, noteOpenKey });
