export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  href: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "001: Magazine Tee",
    price: "R329.99",
    image: "/products/magazine-tee.png",
    href: "/shop/001-magazine-tee",
  },
  {
    id: 2,
    name: "Black/Pink Logo Tee",
    price: "R380.00",
    image: "/products/black-pink-logo-tee.png",
    href: "/shop/black-pink-logo-tee",
  },
  {
    id: 3,
    name: "White Logo Tee",
    price: "R380.00",
    image: "/products/white-logo-tee.png",
    href: "/shop/white-logo-tee",
  },
];