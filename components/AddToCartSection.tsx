"use client";

import { useState } from "react";

import { useCartStore } from "@/store/cart-store";
import { useUIStore } from "@/store/ui-store";

type AddToCartSectionProps = {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    sizes: string[];
    stock: number;
  };
};

export default function AddToCartSection({
  product,
}: AddToCartSectionProps) {

  const [selectedSize, setSelectedSize] =
    useState("");

  const [sizeError, setSizeError] =
    useState(false);

  const [showAddedModal, setShowAddedModal] =
    useState(false);

  const addItem =
    useCartStore(
      (state) => state.addItem
    );

  const openCart =
    useUIStore(
      (state) => state.openCart
    );

  const soldOut =
    product.stock <= 0;

  const isAccessory =
    product.name
      .toLowerCase()
      .includes("beanie");

  const requiresSize =
    !isAccessory;

  const finalSize =

    isAccessory

      ? "One Size"

      : selectedSize;

  const cannotAdd =

    soldOut ||

    (requiresSize &&
      !selectedSize);

  const handleAddToCart = () => {

    if (

      requiresSize &&

      !selectedSize

    ) {

      setSizeError(true);

      return;

    }

    setSizeError(false);

    addItem({

      id: product.id,

      name: product.name,

      image: product.images[0],

      size: finalSize,

      price: product.price,

      quantity: 1,

    });

    setShowAddedModal(true);

  };

  return (

    <div className="mt-12">

      {/* SIZE SELECTOR */}

      {requiresSize && (

        <>

          <p
            className="
              mb-5

              text-[10px]

              uppercase

              tracking-[0.3em]

              text-white/45
            "
          >

            Select Size

          </p>

          <div className="flex flex-wrap gap-3">

            {product.sizes.map(
              (size) => (

                <button

                  key={size}

                  onClick={() => {

                    setSelectedSize(
                      size
                    );

                    setSizeError(
                      false
                    );

                  }}

                  className={`

                    border

                    px-5

                    py-3

                    text-xs

                    uppercase

                    tracking-[0.2em]

                    transition

                    duration-300

                    ${

                      selectedSize ===
                      size

                        ?

                        "border-white bg-white text-black"

                        :

                        "border-white/20 text-white hover:border-white"

                    }

                  `}
                >

                  {size}

                </button>

              )
            )}

          </div>

          {sizeError && (

            <p

              className="
                mt-4

                text-xs

                uppercase

                tracking-[0.2em]

                text-red-400
              "

            >

              Please select a size

            </p>

          )}

        </>

      )}

      <div className="mt-8 space-y-3 border-t border-white/10 pt-6">

  <div className="flex justify-between text-sm">

    <span className="uppercase tracking-[0.25em] text-white/40">
      South Africa
    </span>

    <span className="text-white">
      R100 Delivery
    </span>

  </div>

  <div className="flex justify-between text-sm">

    <span className="uppercase tracking-[0.25em] text-white/40">
      United Kingdom
    </span>

    <span className="text-white">
      R915 Delivery
    </span>

  </div>

  <p className="pt-3 text-xs uppercase tracking-[0.25em] text-white/30">

    Shipping calculated automatically at checkout.

  </p>

</div>

      {/* ACCESSORY */}

      {isAccessory && (

        <div className="mb-8">

          <p

            className="
              text-[10px]

              uppercase

              tracking-[0.3em]

              text-white/40
            "

          >

            Fit

          </p>

          <p

            className="
              mt-3

              text-sm

              uppercase

              tracking-[0.25em]

              text-white
            "

          >

            One Size Fits All

          </p>

        </div>

      )}

      {/* ADD TO CART */}

      <button

        disabled={cannotAdd}

        onClick={handleAddToCart}

        className={`

          mt-10

          w-full

          border

          px-8

          py-5

          text-xs

          uppercase

          tracking-[0.3em]

          transition

          duration-300

          md:w-auto

          ${

            cannotAdd

              ?

              `

              cursor-not-allowed

              border-white/10

              bg-white/5

              text-white/30

              `

              :

              `

              border-white

              bg-white

              text-black

              hover:bg-transparent

              hover:text-white

              `

          }

        `}

      >

        {

          soldOut

            ?

            "Sold Out"

            :

            requiresSize &&
              !selectedSize

            ?

            "Select Size"

            :

            "Add To Cart"

        }

      </button>

      {/* MODAL */}

      {showAddedModal && (

        <div

          className="

            fixed

            inset-0

            z-[100]

            flex

            items-center

            justify-center

            bg-black/70

            backdrop-blur-sm

            px-6

          "

        >

          <div

            className="

              w-full

              max-w-md

              border

              border-white/10

              bg-black

              p-8

              text-center

            "

          >

            <p

              className="
                text-sm

                uppercase

                tracking-[0.3em]

                text-green-400
              "

            >

              Added To Cart

            </p>

            <h3

              className="
                mt-4

                text-2xl

                font-semibold
              "

            >

              {product.name}

            </h3>

            <p

              className="
                mt-2

                text-white/50
              "

            >

              {finalSize}

            </p>

            <div

              className="
                mt-8

                flex

                flex-col

                gap-3
              "

            >

              <button

                onClick={() => {

                  setShowAddedModal(
                    false
                  );

                  window.location.href =
                    "/shop";

                }}

                className="

                  border

                  border-white

                  px-6

                  py-4

                  text-xs

                  uppercase

                  tracking-[0.3em]

                  text-white

                  transition

                  hover:bg-white

                  hover:text-black

                "

              >

                Continue Shopping

              </button>

              <button

                onClick={() => {

                  setShowAddedModal(
                    false
                  );

                  openCart();

                }}

                className="

                  border

                  border-white/20

                  px-6

                  py-4

                  text-xs

                  uppercase

                  tracking-[0.3em]

                  text-white/70

                  transition

                  hover:border-white

                  hover:text-white

                "

              >

                View Cart

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}