import {TProduct, TProductsStateModel} from "./TProductsStateModel";

const defaultState: TProductsStateModel = {
    products: []
}

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

export const productsReducer = (state: TProductsStateModel = defaultState, action: any) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.payload}
        case ADD_PRODUCT:
            return {state, products: [...state.products, action.payload]}
        default:
            return state;
    }
}

export const setProductsAction = ((payload: TProduct[]) => ({type: SET_PRODUCTS, payload}))
export const addProductAction = ((payload: TProduct) => ({type: ADD_PRODUCT, payload}))