import { createStore } from "redux";
import { personsReducer } from "./reducer";

export const store = createStore(personsReducer);
