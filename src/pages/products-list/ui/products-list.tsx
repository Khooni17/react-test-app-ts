import { useProducts } from '../model';
import React, { useContext, useEffect } from 'react';
import { ModalContext } from '../../../context/ModalContext';
// import { TProduct } from '../../../store/productsReducer/TProductsStateModel';
import { Loader } from '../../../entities/common/Loader';
import { ErrorMessage } from '../../../entities/common/ErrorMessage';
import { Product } from '../../../entities/Product';
import { Modal } from '../../../entities/common/Modal';
import { CreateProduct } from '../../../entities/CreateProduct';
import { CategoriesList } from '../../../entities/categories';
import { Cart } from '../../../entities/common/cart';
import { useDispatch } from 'react-redux';

// import {
//   addProductAction,
//   setProductsAction,
// } from '../../../store/productsReducer/productsReducer';

export function ProductsList() {
  const { modal, open, close } = useContext(ModalContext);
  // const { products, error, loading } = useProducts();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setProductsAction());
  // }, []);

  // const createHandler = (product: TProduct) => {
  //   close();
  //   dispatch(addProductAction(product));
  // };

  console.log('sss');
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {/*{loading && <Loader />}*/}
      {/*{error && <ErrorMessage error={error} />}*/}
      <CategoriesList />
{/*      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}*/}
      {modal && (
        <Modal closeModal={close} title="Create new product">
{/*          <CreateProduct onCreate={createHandler} />*/}
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-amber-500 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        +
      </button>
      <Cart></Cart>
    </div>
  );
}
