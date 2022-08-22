import React from 'react';
import { useCategories } from './model';
import { CategoryItem } from '../category-item';
import { categoriesStatus } from '../../../store/slices/categories/categoriesModel';

export const CategoriesList = () => {
  const { categoriesIDs, statusCategories, errorMessage} = useCategories();
  return (
    <>
      {statusCategories === categoriesStatus.Loaded &&
        <ul className='fixed top-15 left-5'>
          {categoriesIDs.map((catID) => <CategoryItem key={catID} id={catID} />)}
        </ul>
      }
      {statusCategories === categoriesStatus.Loading && <p>Loading</p>}
      {statusCategories === categoriesStatus.ErrorLoad && <p>{errorMessage}</p>}
    </>
  )
}