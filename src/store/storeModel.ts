import {TCategoriesStateModel} from "./categoriesReducer/TCategoriesStateModel";
import {TProductsStateModel} from "./productsReducer/TProductsStateModel";

export type storeModel = {
    categories: TCategoriesStateModel;
    products: TProductsStateModel;
}