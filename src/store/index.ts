import {createStore, combineReducers} from 'redux';
import {categoriesReducer} from "./categoriesReducer/categoriesReducer";
import {storeModel} from "./storeModel";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    categories: categoriesReducer
});

export const store = createStore(rootReducer, composeWithDevTools())