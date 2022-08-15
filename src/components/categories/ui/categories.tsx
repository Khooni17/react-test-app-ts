import React from "react";
import {selectCategoryAction} from "../../../store/categoriesReducer/categoriesReducer";
import {useCategories} from "../model";

export const Categories = () => {
    const {selectedCategory, categories, dispatch} = useCategories()

    return (
        <ul className="fixed top-15 left-5">
            {categories.map(
                (cat, index) =>
                    <li
                        key={index}
                        onClick={() => dispatch(selectCategoryAction(index))}
                        className={["text-lg hover:text-amber-600 hover:cursor-pointer",
                            selectedCategory === index ? 'text-amber-600' : ''].join(' ')}>
                        {cat.title}
                    </li>
            )}
        </ul>
    )
}