import React from 'react';
import { useCategories } from './model';
import { CategoryItem } from '../category-item';

export const CategoriesList = () => {
  const { categoriesIDs } = useCategories();
  console.log(categoriesIDs);
  return (
    <ul className='fixed top-15 left-5'>
      {categoriesIDs.map((catID) => <CategoryItem key={catID} id={catID} />)}
    </ul>
  );
};

// const ActionBtn = ({id}: {id: number}) => {
//     const handle = () => {};
//     return <button onClick={handle}>Добавить</button>
// }

// type TProps = {
//   id: number,
//   Action?: FC<{ id: number }>
// }

// const Card = ({ id, Action }: TProps) => {
//   const { title } = useAppSelector(state => state.categories.data[id]);
//
//   return (
//     <div>
//       <p>{title}</p>
//       {Action && <Action id={id} />}
//     </div>
//   );
// };
//
// const Page = () => {
//
//     return <Card id={6} Action={ActionBtn}/>
// }