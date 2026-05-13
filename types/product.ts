export type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
  sizes: string[];
  stock: number;
  description: string;
  category?: string;
  featured?: boolean;
};