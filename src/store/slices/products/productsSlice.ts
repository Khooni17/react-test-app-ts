import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TProductsState } from './productsModel';

const initialState: TProductsState = {
  data: []
};


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: () => {
      console.log('set products')
    }
  }
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;