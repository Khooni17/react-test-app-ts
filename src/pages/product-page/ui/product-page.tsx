import React from 'react';
import { useProduct } from '../model/use-product';
import { ErrorMessage } from '../../../entities/common/ErrorMessage';

export const ProductPage = () => {
  const { product, setProduct, error } = useProduct();

  return (
    <>
      {error && <ErrorMessage error="'error get product'" />}
      {product.id && <div className='mt-2'>
        <h1>ID товара: {product?.id}</h1>

        <div className='flex items-start'>
          <img className='flex-auto w-2 mx-10' src={product.image} alt='product image' />
          <div className='flex-auto w-2'>
            <h2 className='text-2xl'>{product.title}</h2>
            <p className='mt-3 text-xl font-bold'>{product.price}<span className='text-base'>$</span></p>
            <p className='text-base mt-3'>{product.description}</p>
          </div>
        </div>
      </div>}

    </>
  );
};