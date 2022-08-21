import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { TCategoriesState } from './categoriesModel';
import axios from 'axios';

const initialState: TCategoriesState = {
  data: [
    { title: '1', id: 1 },
    { title: '2', id: 2 },
  ],
  selected: 0,
};


export const fetchCategories = createAsyncThunk('categories/getCategories',
  async (_, { rejectWithValue, dispatch }) => {
    let categories = (await axios.get('https://fakestoreapi.com/products/categories')).data;
    categories = categories.map((el: string, index: number) => ({ title: el, id: index }));
    console.log(categories)
    dispatch(setCategories(categories));
  });

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategoryAction: (state, action) => {
      state.selected = action.payload;
    },
    setCategories: (state, action) => {
      state.data = action.payload;
    },
  },
  // extra
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      console.log('fulfilled');
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      console.log('rejected');
    });
    builder.addCase(fetchCategories.pending, (state, action) => {
      console.log('pending');
    });
  },
});

export const { selectCategoryAction, setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;