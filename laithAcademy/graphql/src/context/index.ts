export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  onSale: boolean;
  categoryId?: string;
}

export interface Review {
  id: string;
  date: string;
  title: string;
  comment: string;
  rating: number;
  productId?: string;
}

export interface Context {
  db: {
    products: Product[];
    categories: Category[];
    reviews: Review[];
  };
}
