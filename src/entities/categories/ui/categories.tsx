import React from "react";
import {useCategories} from "../model";
import { selectCategoryAction } from '../../../store/slices/categories/categoriesSlice';

export const Categories = () => {
    const {selectedCategory, categories, dispatch} = useCategories()

    return (
        <ul className="fixed top-15 left-5">
            {categories.map((cat, index) =>
                    <li
                        key={cat.id}
                        onClick={() => dispatch(selectCategoryAction(cat.id))}
                        className={["text-lg hover:text-amber-600 hover:cursor-pointer",
                            selectedCategory === cat.id ? 'text-amber-600' : ''].join(' ')}>
                        {cat.title}
                    </li>
            )}
        </ul>
    )
}