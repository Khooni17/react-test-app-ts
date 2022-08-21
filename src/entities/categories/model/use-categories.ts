import {useEffect} from "react";
import { TStoreModel } from '../../../store/storeModel';
import { fetchCategories } from '../../../store/slices/categories/categoriesSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';

export const useCategories = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const selectedCategory = useAppSelector((state:TStoreModel) => state.categories.selected);
    const categories = useAppSelector((state:TStoreModel) => state.categories.data);
    return {selectedCategory, categories, dispatch}
}