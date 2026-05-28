"use client";

import { useEffect, useState } from "react";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

type Order = {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
  };
  total: number;
  status: string;
  createdAt?: {
    seconds: number;
  };
};
type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
};
export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] =
  useState<string | null>(null);

const [editValues, setEditValues] = useState({
  price: "",
  stock: "",
});
const [showAddModal, setShowAddModal] =
  useState(false);

const [newProduct, setNewProduct] =
  useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const q = query(
          collection(db, "orders"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const formattedOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Order[];

        setOrders(formattedOrders);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    const fetchProducts = async () => {
  try {
    const snapshot = await getDocs(
      collection(db, "products")
    );

    const formattedProducts =
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];

    setProducts(formattedProducts);
  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  if (showAddModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [showAddModal]);

fetchProducts();

    fetchOrders();
  }, []);

 const totalRevenue = orders.reduce(
  (total, order) => total + order.total,
  0
);

const handleSaveProduct = async (
  productId: string
) => {
  try {
    await updateDoc(
      doc(db, "products", productId),
      {
        price: Number(editValues.price),
        stock: Number(editValues.stock),
      }
    );

    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? {
              ...product,
              price: Number(editValues.price),
              stock: Number(editValues.stock),
            }
          : product
      )
    );

    setEditingProduct(null);

  } catch (error) {
    console.error(error);
  }
};

const handleCreateProduct = async () => {
    
  try {
    if (
  !newProduct.name ||
  !newProduct.price ||
  !newProduct.stock
) {
  return;
}
    const docRef = await addDoc(
      collection(db, "products"),
      {
        name: newProduct.name,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
        image: newProduct.image,
      }
    );

    const createdProduct = {
      id: docRef.id,
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
      image: newProduct.image,
    };

    setProducts((prev) => [
      createdProduct,
      ...prev,
    ]);

    setShowAddModal(false);

    setNewProduct({
      name: "",
      price: "",
      stock: "",
      image: "",
    });

  } catch (error) {
    console.error(error);
  }
};
  return (
    
    <main className="min-h-screen bg-black px-5 py-10 text-white md:px-10">

      {/* HEADER */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/35">
            MSW Operations
          </p>

          <h1 className="mt-3 text-4xl font-semibold uppercase tracking-tight md:text-6xl">
            Admin Dashboard
          </h1>
        </div>
<button
  onClick={() => setShowAddModal(true)}
  className="
    border
    border-white
    bg-white
    px-6
    py-4
    text-[10px]
    uppercase
    tracking-[0.3em]
    text-black
    transition
    hover:bg-transparent
    hover:text-white
  "
>
  Add Product
</button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="border border-white/10 bg-white/[0.03] p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Total Orders
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            {orders.length}
          </h2>
        </div>

        <div className="border border-white/10 bg-white/[0.03] p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Revenue
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            R{totalRevenue.toFixed(2)}
          </h2>
        </div>

        <div className="border border-white/10 bg-white/[0.03] p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Products
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            {products.length}
          </h2>
        </div>

      </div>

      {/* ORDERS */}
      <div className="mt-14">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold uppercase tracking-[0.15em]">
            Recent Orders
          </h2>
        </div>

        {loading ? (
          <p className="text-white/40">
            Loading orders...
          </p>
        ) : orders.length === 0 ? (
          <div className="border border-white/10 bg-white/[0.03] p-6 text-white/40">
            No orders yet.
          </div>
        ) : (
          <div className="space-y-4">

            {orders.map((order) => (
              <div
                key={order.id}
                className="
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  transition
                  duration-300
                  hover:border-white/20
                "
              >

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">


                  {/* LEFT */}
                  <div>

                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                      Order Number
                    </p>

                    <h3 className="mt-2 text-lg font-semibold tracking-wide">
                      {order.orderNumber}
                    </h3>

                    <div className="mt-5 space-y-2 text-sm text-white/60">
                      <p>{order.customer?.name}</p>
                      <p>{order.customer?.email}</p>
                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col items-start gap-3 md:items-end">

                    <div className="border border-green-500/20 bg-green-500/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-green-400">
                      {order.status}
                    </div>

                    <p className="text-2xl font-semibold">
                      R{order.total.toFixed(2)}
                    </p>

                  </div>

                </div>

              </div>
            ))}
            

          </div>
        )}
        

      </div>
      {/* PRODUCTS */}
<div className="mt-20">

  <div className="mb-6 flex items-center justify-between">
    <h2 className="text-xl font-semibold uppercase tracking-[0.15em]">
      Products
    </h2>
  </div>

  <div className="space-y-4">

{products.length === 0 && (
  <div className="border border-white/10 bg-white/[0.03] p-6 text-white/40">
    No products yet.
  </div>
)}
    {products.map((product) => (
      <div
        key={product.id}
        className="
          border
          border-white/10
          bg-white/[0.03]
          p-5
        "
      >

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* INFO */}
          <div>
            <h3 className="text-lg font-semibold">
              {product.name}
            </h3>

            <p className="mt-2 text-sm text-white/45">
              Stock: {product.stock}
            </p>
          </div>

          {/* RIGHT */}
<div className="flex flex-col gap-4 md:items-end">

  {editingProduct === product.id ? (
    <div className="flex flex-col gap-3">

      <input
        type="number"
        placeholder="Price"
        value={editValues.price}
        onChange={(e) =>
          setEditValues((prev) => ({
            ...prev,
            price: e.target.value,
          }))
        }
        className="
          border
          border-white/10
          bg-black
          px-4
          py-3
          text-sm
          text-white
          outline-none
        "
      />

      <input
        type="number"
        placeholder="Stock"
        value={editValues.stock}
        onChange={(e) =>
          setEditValues((prev) => ({
            ...prev,
            stock: e.target.value,
          }))
        }
        className="
          border
          border-white/10
          bg-black
          px-4
          py-3
          text-sm
          text-white
          outline-none
        "
      />

      <button
        onClick={() =>
          handleSaveProduct(product.id)
        }
        className="
          border
          border-white
          bg-white
          px-5
          py-3
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-black
          transition
          hover:bg-transparent
          hover:text-white
        "
      >
        Save
      </button>

    </div>
  ) : (
    <>
      <p className="text-2xl font-semibold">
        R{product.price}
      </p>

      <button
        onClick={() => {
          setEditingProduct(product.id);

          setEditValues({
            price: String(product.price),
            stock: String(product.stock),
          });
        }}
        className="
          border
          border-white/10
          px-5
          py-3
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-white/70
          transition
          hover:border-white
          hover:text-white
        "
      >
        Edit Product
      </button>
    </>
  )}

</div>

        </div>

      </div>
    ))}

  </div>

</div>
{showAddModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5">

    <div className="w-full max-w-xl border border-white/10 bg-black p-6 md:p-8">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
            MSW Admin
          </p>

          <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight">
            Add Product
          </h2>
        </div>

        <button
          onClick={() => setShowAddModal(false)}
          className="text-white/40 transition hover:text-white"
        >
          ✕
        </button>

      </div>

      {/* FORM */}
      <div className="mt-10 space-y-5">

        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          className="
            w-full
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-4
            text-sm
            text-white
            outline-none
          "
        />

        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct((prev) => ({
              ...prev,
              price: e.target.value,
            }))
          }
          className="
            w-full
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-4
            text-sm
            text-white
            outline-none
          "
        />

        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) =>
            setNewProduct((prev) => ({
              ...prev,
              stock: e.target.value,
            }))
          }
          className="
            w-full
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-4
            text-sm
            text-white
            outline-none
          "
        />

        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct((prev) => ({
              ...prev,
              image: e.target.value,
            }))
          }
          className="
            w-full
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-4
            text-sm
            text-white
            outline-none
          "
        />

      </div>

      {/* ACTIONS */}
      <div className="mt-10 flex gap-4">

        <button
          onClick={handleCreateProduct}
          className="
            flex-1
            border
            border-white
            bg-white
            px-6
            py-4
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-black
            transition
            hover:bg-transparent
            hover:text-white
          "
        >
          Create Product
        </button>

        <button
          onClick={() => setShowAddModal(false)}
          className="
            border
            border-white/10
            px-6
            py-4
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/60
            transition
            hover:border-white
            hover:text-white
          "
        >
          Cancel
        </button>

      </div>

    </div>

  </div>
)}
    </main>
  );
  
}