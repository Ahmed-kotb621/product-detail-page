export interface RelatedProducts {
  id: number;
  name: string;
  price: number;
  description: string;
  rate: number;
  sold: number;
  image: string;
}

export interface Product {
  name: string;
  price: number;
  sale_price: number;
  description: string;
  rate: number;
  color: string;
  size: number;
  sold: number;
  image: string;
}

export interface ProductVariant {
  name: string;
  price: number;
  sale_price: number;
  description: string;
  color: string;
  size: number;
  image: string;
}
