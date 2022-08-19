import axios from 'axios';

export const FetchProducts = async () => {
  return (await axios.get('https://fakestoreapi.com/products?limit=5')).data;
};
