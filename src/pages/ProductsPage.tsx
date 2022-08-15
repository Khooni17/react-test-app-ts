import {useProducts} from "../hooks/useProducts";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/common/ErrorMessage";
import {Product} from "../components/Product";
import {Modal} from "../components/common/Modal";
import {CreateProduct} from "../components/CreateProduct";
import {Categories} from "../components/categories";


export function ProductsPage() {
    const {products, error, loading, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext);

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            <Categories/>
            {products.map(product => <Product key={product.id} product={product}/>)}
            {modal && <Modal closeModal={close} title="Create new product">
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
            <button className="fixed bottom-5 right-5 rounded-full bg-amber-500 text-white text-2xl px-4 py-2"
                    onClick={open}>+
            </button>
        </div>
    );
}