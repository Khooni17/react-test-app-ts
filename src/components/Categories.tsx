import React, {useState} from "react";

interface Category {
    title: string
}

const categoriesList: Category[] = [
    {title: 'Обувь'},
    {title: 'Одежда'},
    {title: 'Сумки'}
]

export function Categories() {
    const [select, setSelect] = useState(1);

    return (
        <ul className="fixed top-15 left-5">
            {categoriesList.map(
                (cat, index) =>
                    <li
                        key={index}
                        onClick={() => setSelect(index)}
                        className={["text-lg hover:text-amber-600 hover:cursor-pointer",
                            select === index ? 'text-amber-600' : ''].join(' ')}>
                        {cat.title}
                    </li>
            )}
        </ul>
    )
}