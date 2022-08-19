import { TProduct, TProductsStateModel } from './TProductsStateModel';
import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { storeModel } from '../storeModel';

const defaultState: TProductsStateModel = {
  products: [],
  loading: false,
  error: '',
};

const ADD_MANY_PRODUCTS = 'ADD_MANY_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';
const RESET_FETCH_STATE = 'RESET_FETCH_STATE';

type TAction =
  | {
      type: 'ADD_MANY_PRODUCTS';
      payload: TProduct[];
    }
  | {
      type: 'ADD_PRODUCT';
      payload: TProduct;
    }
  | {
      type: 'SET_LOADING';
      payload: boolean;
    }
  | {
      type: 'SET_ERROR';
      payload: string;
    }
  | {
      // todo: добавить
      type: 'RESET_FETCH_STATE';
    };

export const productsReducer = (state: TProductsStateModel = defaultState, action: TAction) => {
  switch (action.type) {
    case ADD_MANY_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const setLoadingAction = () => ({ type: SET_LOADING, payload: true });
export const setLoadedAction = () => ({ type: SET_LOADING, payload: false });
export const setErrorAction = (payload: string) => ({ type: SET_LOADING, payload });
const resetFetchState = () => ({ type: RESET_FETCH_STATE });
export const setProductsAction = (): ThunkAction<void, storeModel, unknown, any> => {
  return (dispatch, getState) => {
    console.log(getState());
  };
};
// try {
//   setError('');
//   setLoading(true);
//   dispatch(setProductsAction(products));
//   // setProducts(products);
//   setLoading(false);
// } catch (e: unknown) {
//   const error = e as AxiosError;
//   setLoading(false);
//   setError(error.message);
// }
// ({ type: ADD_MANY_PRODUCTS, payload });

export const addProductAction = (payload: TProduct) => ({ type: ADD_PRODUCT, payload });
