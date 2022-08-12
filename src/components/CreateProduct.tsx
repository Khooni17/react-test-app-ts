import React, {useState} from "react";
import {IProduct} from "../models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";


const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 2,
        count: 22
    }
}

interface CreateProductProps {
    onCreate: (product:IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {

    let [title, setTitle] = useState('')
    let [error, setError] = useState('')

    const submitHandler = async (e: React.FormEvent) => {
        setError('');
        e.preventDefault();

        if (title.trim().length === 0) {
            setError('Please enter valid title.');
            return
        }

        productData.title = title;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
        onCreate(response.data);
    }

    const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    return <form>
        <input type="text"
               className="border py-2 px-4 mb-2 w-full"
               placeholder="Enter product title..."
               value={title}
               onChange={changeTitleHandler}
        />

        {error && <ErrorMessage error={error}/>}

        <button type="submit"
                onClick={submitHandler}
                className="py-2 px-4 border bg-amber-500">Create
        </button>
    </form>
}