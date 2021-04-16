import { createStore } from "redux";
import { TodoReducers } from "../reducer";

export const store = createStore(TodoReducers);
