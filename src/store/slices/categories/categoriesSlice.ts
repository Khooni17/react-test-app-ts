import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categoriesStatus, TCategoriesState, TCategory } from './categoriesModel';
import axios from 'axios';
import { TStoreModel } from '../../storeModel';

const initialState: TCategoriesState = {
  data: {},
  selected: 0,
  status: categoriesStatus.NotLoaded,
  errorMessage: ''
};

export const fetchCategories = createAsyncThunk('categories/getCategories', async (_, {
  rejectWithValue,
  dispatch,
}) => {
  const categories = (await axios.get<string[]>('https://fakestoreapi.com/prosdcducts/categories')).data.map<TCategory>((el, index) => ({
    title: el,
    id: index,
  }));
  return categories.reduce<Record<number, TCategory>>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
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
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.status = categoriesStatus.Loading
      state.errorMessage = ''
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = categoriesStatus.Loaded
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.errorMessage = action.error.message
      state.status = categoriesStatus.ErrorLoad
    });
  }
});

export const selectIDsCategories = createSelector([
  (state: TStoreModel) => state.categories.data,
], (data) => Object.keys(data).map(el => parseInt(el)));

export const selectCategoriesStatus = (state:TStoreModel) => state.categories.status

export const selectErrorMessage = (state:TStoreModel) => state.categories.errorMessage

export const getCategoryByID = (state: TStoreModel, id: number) => state.categories.data[id];

export const { selectCategoryAction, setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;