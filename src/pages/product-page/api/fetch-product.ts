import axios from "axios";

export const fetchProduct = async (id: string | undefined) => {
  return (await axios('https://fakestoreapi.com/products/'+id)).data
}