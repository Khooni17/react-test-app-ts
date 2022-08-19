import { useSelector } from 'react-redux';
import { storeModel } from '../../../store/storeModel';
import { useAppSelector } from '../../../store/use-app-dispatch';

export function useProducts() {
  const products = useAppSelector((state) => state.products.products);
  const error = useSelector((state: storeModel) => state.products.error);
  const loading = useSelector((state: storeModel) => state.products.loading);
  return { products, error, loading };
}
