import {IProduct} from "../models";
import {useState} from "react";

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [showDescription, setShowDescription] = useState(false);
    const btnBgClass = showDescription ? 'bg-blue-500' : 'bg-yellow-500';
    const btnClasses = ['py-2 px-4 border', btnBgClass];

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img className="w-1/6" src={product.image} alt="product image"/>
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button className={btnClasses.join(' ')}
                    onClick={() => setShowDescription((prevState) => !prevState)}
            >
                {showDescription ? 'Hide Details' : 'Show Details'}
            </button>
            {showDescription && <div>
                <p>{product.description}</p>
            </div>}
        </div>
    )
}