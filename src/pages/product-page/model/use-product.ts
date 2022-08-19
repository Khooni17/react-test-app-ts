import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProduct } from '../api';


type ProductParams = {
  id: string;
};

export const useProduct = () => {
  // const { id } = useParams<ProductParams>();
  // const [error, setError] = useState(false);
  // const [product, setProduct] = useState<TProduct>(
  //   {
  //     id: 0,
  //     title: '',
  //     price: 0,
  //     description: '',
  //     category: '',
  //     image: '',
  //     rating: { rate: 0, count: 0 },
  //   },
  // );
  //
  // useEffect(() => {
  //   setError(false);
  //   fetchProduct(id)
  //     .then(
  //       (productResult: TProduct) => {
  //         setProduct(productResult);
  //       }
  //     )
  //     .catch(() => {
  //       setError(true);
  //     });
  // }, []);


  // return { product, setProduct, error};

};
