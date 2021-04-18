import { combineReducers } from "redux";
import { noteOpenKeyReducer, daleNoteReducer } from "./todo";

export const TodoReducers = combineReducers({ daleNoteReducer, noteOpenKeyReducer });
