import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoReducers } from "../reducer";

export const store = createStore(TodoReducers, composeWithDevTools());
