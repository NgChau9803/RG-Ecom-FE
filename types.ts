
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export enum UserRole {
  Buyer = 'buyer',
  Seller = 'seller',
}

export interface CartItem {
  product: Product;
  quantity: number;
}
