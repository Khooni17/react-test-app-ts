import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TCategoriesState } from './categoriesModel';
import axios from 'axios';

const initialState: TCategoriesState = {
  data: [
    {title: '1', id:1},
    {title: '2', id:2},
  ],
  selected: 0,
};

export const getCategories = createAsyncThunk('categories/getCategories', async (_, {rejectWithValue, dispatch}) => {
  const categories = (await axios.get('https://fakestoreapi.com/products/categories')).data;
  dispatch(setCategories(categories));
})

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategoryAction: (state, action) => {
      state.selected = action.payload;
    },
    setCategories: (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: {
    [getCategories.fulfilled]: () => {console.log('fulfilled')},
    [getCategories.rejected]: () => {console.log('rejected')},
    [getCategories.pending]: () => {console.log('pending')}
  }
});

export const {selectCategoryAction, setCategories} = categoriesSlice.actions
export default categoriesSlice.reducer;