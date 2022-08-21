import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './slices/categories';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export const rootReducer = combineReducers({
//   categories: categoriesReducer,
//   products: productsReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
