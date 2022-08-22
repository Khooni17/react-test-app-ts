import {useEffect} from "react";
import { fetchCategories } from '../../../../store/slices/categories/categoriesSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { selectIDsCategories } from '../../../../store/slices/categories/categoriesSlice';

export const useCategories = () => {
    const categoriesIDs = useAppSelector(selectIDsCategories);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return {categoriesIDs}
}

