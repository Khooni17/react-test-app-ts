import {TCategoriesStateModel} from "./TCategoriesStateModel";

const defaultState: TCategoriesStateModel = {
    categories: [],
    selectedCategory: 0
}

const SELECT_CATEGORY = 'SELECT_CATEGORY';
const SET_CATEGORIES = 'SET_CATEGORIES';

export const categoriesReducer = (state: TCategoriesStateModel = defaultState, action: any): TCategoriesStateModel => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {...state, selectedCategory: action.payload}
        case SET_CATEGORIES:
            return {...state, categories: action.payload}
        default:
            return state
    }
}

// action creator
export const selectCategoryAction = (payload: number) => ({type: SELECT_CATEGORY, payload})
export const setCategoriesAction = (payload: string[]) => ({type: SET_CATEGORIES, payload})
