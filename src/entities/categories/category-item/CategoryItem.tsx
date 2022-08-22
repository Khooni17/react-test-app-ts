import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getCategoryByID, selectCategoryAction } from '../../../store/slices/categories/categoriesSlice';
import React, { useCallback } from 'react';

export const CategoryItem = ({ id }: { id: number; }) => {
  const isSelected = useAppSelector((state) => state.categories.selected === id);
  const category = useAppSelector(state => getCategoryByID(state, id));
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(selectCategoryAction({ categoryId: id }));
  }, [id, dispatch]);

  return (
    <li
      onClick={handleClick}
  className={['text-lg hover:text-amber-600 hover:cursor-pointer',
    isSelected ? 'text-amber-600' : ''].join(' ')}>
  {category.title}
  </li>
);
};