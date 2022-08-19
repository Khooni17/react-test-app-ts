import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './slices/categories';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
});

// export const rootReducer = combineReducers({
//   categories: categoriesReducer,
//   products: productsReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
