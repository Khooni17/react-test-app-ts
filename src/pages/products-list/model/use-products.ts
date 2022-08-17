import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setProductsAction} from "../../../store/productsReducer/productsReducer";
import {TProduct} from "../../../store/productsReducer/TProductsStateModel";
import axios, {AxiosError} from "axios";
import {storeModel} from "../../../store/storeModel";
import {addProductAction} from "../../../store/productsReducer/productsReducer";

export function useProducts() {
    // const [products, setProducts] = useState<TProduct[]>([]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const products = useSelector((state: storeModel) => state.products.products)

    function addProduct(product: TProduct) {
        dispatch(addProductAction(product));
    }

    const fetchProducts = async () => {
        try {
            setError('');
            setLoading(true)
            const products = (await axios.get('https://fakestoreapi.com/products?limit=5')).data
            dispatch(setProductsAction(products));
            // setProducts(products);
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts().then(() =>
            setLoading(false)
        ).catch(e => console.log(e))
    }, [])

    return {products, error, loading, addProduct}
}