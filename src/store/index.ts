import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './categoriesReducer/categoriesReducer';
import { productsReducer } from './productsReducer/productsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
