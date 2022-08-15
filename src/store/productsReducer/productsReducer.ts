import {TProduct, TProductsStateModel} from "./TProductsStateModel";

const defaultState: TProductsStateModel = {
    products: []
}

export const productsReducer = (state: TProductsStateModel = defaultState, action: any) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {...state, products: action.payload}
        default:
            return state;
    }
}