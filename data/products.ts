import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "white-logo-tee",
    name: "White Logo Tee",
    price: 380,
    images: [
      "/products/white-logo-tee.png",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 10,
    description:
      "Minimal white MSW tee built for everyday movement.",
    category: "Tees",
    featured: true,
  },

  {
    id: "black-pink-logo-tee",
    name: "Black/Pink Logo Tee",
    price: 380,
    images: [
      "/products/black-pink-logo-tee.png",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 6,
    description:
      "Signature Made Somehow graphic tee in black and pink.",
    category: "Tees",
    featured: true,
  },

  {
    id: "magazine-tee",
    name: "001: Magazine Tee",
    price: 330,
    images: [
      "/products/magazine-tee.png",
    ],
    sizes: ["S", "M", "L"],
    stock: 3,
    description:
      "Vintage-inspired MSW magazine graphic tee.",
    category: "Tees",
    featured: true,
  },
];