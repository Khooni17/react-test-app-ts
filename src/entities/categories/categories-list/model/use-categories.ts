import {useEffect} from "react";
import {
    fetchCategories,
    selectCategoriesStatus,
    selectErrorMessage,
} from '../../../../store/slices/categories/categoriesSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { selectIDsCategories } from '../../../../store/slices/categories/categoriesSlice';

export const useCategories = () => {
    const categoriesIDs = useAppSelector(selectIDsCategories);
    const statusCategories = useAppSelector(selectCategoriesStatus);
    const errorMessage = useAppSelector(selectErrorMessage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return {categoriesIDs, statusCategories, errorMessage}
}

