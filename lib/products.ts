import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export type StoreProduct = {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  images: string[];
  sizes: string[];
  description: string;
};

export async function getProducts(): Promise<
  StoreProduct[]
> {
  const snapshot = await getDocs(
    collection(db, "products")
  );

  return snapshot.docs.map((docItem) => {
    const data = docItem.data();

    return {
      id: docItem.id,
      name: data.name ?? "",
      price: data.price ?? 0,
      stock: data.stock ?? 0,

      image: data.image ?? "",

      images: data.image
        ? [data.image]
        : [],

      sizes: data.sizes ?? [],

      description:
        data.description ??
        "Premium Made Somehow apparel.",
    };
  });
}

export async function getProduct(
  id: string
): Promise<StoreProduct | null> {
  const productRef = doc(
    db,
    "products",
    id
  );

  const snapshot =
    await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.data();

  return {
    id: snapshot.id,
    name: data.name ?? "",
    price: data.price ?? 0,
    stock: data.stock ?? 0,

    image: data.image ?? "",

    images: data.image
      ? [data.image]
      : [],

    sizes: data.sizes ?? [],

    description:
      data.description ??
      "Premium Made Somehow apparel.",
  };
}