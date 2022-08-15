import {useEffect} from "react";
import {fetchCategories} from "../api/fetch-categories";
import {setCategoriesAction} from "../../../store/categoriesReducer/categoriesReducer";
import {useDispatch, useSelector} from "react-redux";
import {storeModel} from "../../../store/storeModel";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export const useCategories = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            fetchCategories()
                .then(categories => {
                    dispatch(setCategoriesAction(categories.map(
                        (el: string) => ({title: el, id: generateUniqueID()})))
                    )
                })
                .catch(error => dispatch(setCategoriesAction([])))
        } catch (e) {

        }
    }, [])

    const selectedCategory = useSelector((state: storeModel) => state.categories.selectedCategory);
    const categories = useSelector((state: storeModel) => state.categories.categories);
    return {selectedCategory, categories, dispatch}
}