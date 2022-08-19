export type TProduct = {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export type TProductsStateModel = {
  products: TProduct[];
  loading: boolean;
  error: string;
};
