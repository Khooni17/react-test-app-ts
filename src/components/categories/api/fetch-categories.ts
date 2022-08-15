import axios from "axios";

export const fetchCategories = async () => {
    return (await axios('https://fakestoreapi.com/products/categories')).data
}