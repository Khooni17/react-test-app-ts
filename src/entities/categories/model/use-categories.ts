import {useEffect} from "react";
import {fetchCategories} from "../api/fetch-categories";
import {useDispatch, useSelector} from "react-redux";
import { TStoreModel } from '../../../store/storeModel';

export const useCategories = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchCategories()
            .then(categories => {
                // dispatch(setCategoriesAction(categories.map(
                //     (el: string) => ({title: el, id: generateUniqueID()})))
                // )
            })
            .catch(
                // error => dispatch(setCategoriesAction([]))
            )

    }, [])

    const selectedCategory = useSelector((state:TStoreModel) => state.categories.selected);
    const categories = useSelector((state:TStoreModel) => state.categories.data);
    return {selectedCategory, categories, dispatch}
}