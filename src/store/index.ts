import {createStore, combineReducers} from 'redux';
import {categoriesReducer} from "./categoriesReducer/categoriesReducer";
import {productsReducer} from "./productsReducer/productsReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer

});

export const store = createStore(rootReducer, composeWithDevTools())