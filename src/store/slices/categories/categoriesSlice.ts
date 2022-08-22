import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { TCategoriesState, TCategory } from './categoriesModel';
import axios from 'axios';
import { TStoreModel } from '../../storeModel';

const initialState: TCategoriesState = {
  data: {},
  selected: 0,
};

export const fetchCategories = createAsyncThunk('categories/getCategories', async (_, {
  rejectWithValue,
  dispatch,
}) => {
  const categories = (await axios.get<string[]>('https://fakestoreapi.com/products/categories')).data.map<TCategory>((el, index) => ({
    title: el,
    id: index,
  }));
  const categoriesReduced = categories.reduce<Record<number, TCategory>>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
  dispatch(setCategories(categoriesReduced));
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategoryAction: (state, action: PayloadAction<{ categoryId: number }>) => {
      state.selected = action.payload.categoryId;
    },
    setCategories: (state, action: PayloadAction<Record<number, TCategory>>) => {
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

export const selectIDsCategories = createSelector([
  (state:TStoreModel)  => state.categories.data
], (data) => Object.keys(data).map(el => parseInt(el)))

export const getCategoryByID = (state: TStoreModel, id: number) => state.categories.data[id];
export const { selectCategoryAction, setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;


// example
// const selector = createSelector([state => state.data, state => state.selected, (state, id) => id,], (data, selected, id) => {
// })