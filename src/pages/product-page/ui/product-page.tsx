import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Loader} from "../../../entities/common/Loader";
import {storeModel} from "../../../store/storeModel";

export const ProductPage = () => {
    const {id} = useParams();
    const products = useSelector((state: storeModel) => state.products.products);
    const product = products.find(el => el.id == id);
    console.log(products)
    console.log(id)
    console.log(product)

    return product ?
        (<div className="mt-2">
            <h1>ID товара: {product?.id}</h1>

            <div className="flex items-start">
                <img className="flex-auto w-2 mx-10" src={product.image} alt="product image"/>
                <div className="flex-auto w-2">
                    <h2 className="text-2xl">{product.title}</h2>
                    <p className="mt-3 text-xl font-bold">{product.price}<span className="text-base">$</span></p>
                    <p className="text-base mt-3">{product.description}</p>
                </div>
            </div>
        </div>) :
        <Loader></Loader>
}