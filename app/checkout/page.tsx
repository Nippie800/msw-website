"use client";

import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
 const {

  currency,

  convertPrice,

} = useCurrency();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shippingRates = {

  ZAR: 100,

  USD: 450,

  GBP: 915,

  EUR: 700,

};

const shipping =

shippingRates[currency];

const finalTotal =

totalPrice +

shipping;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    joinCommunity: false,
    acceptTerms: false,
  });
const [errors, setErrors] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  province: "",
  postalCode: "",
  acceptTerms: "",
});
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };
const inputStyles = (error: string) => `
  border
  ${error ? "border-red-500" : "border-white/10"}
  bg-white/[0.02]
  px-5
  py-5
  text-sm
  tracking-wide
  text-white
  outline-none
  transition-all
  duration-300
  placeholder:text-white/25
  focus:border-white
  focus:bg-white/[0.03]
`;
  const handlePayment = async () => {
  const newErrors = {
    name: form.name.trim()
      ? ""
      : "Full name is required",

    email: form.email.trim()
      ? ""
      : "Email address is required",

    phone: form.phone.trim()
      ? ""
      : "Phone number is required",

    address: form.address.trim()
      ? ""
      : "Street address is required",

    city: form.city.trim()
      ? ""
      : "City is required",

    province: form.province.trim()
      ? ""
      : "Province is required",

    postalCode: form.postalCode.trim()
      ? ""
      : "Postal code is required",

    acceptTerms: form.acceptTerms
      ? ""
      : "You must accept the Shipping & Returns Policy before continuing.",
  };

  setErrors(newErrors);

  const hasErrors = Object.values(
    newErrors
  ).some((value) => value !== "");

  if (hasErrors) {
    return;
  }

  try {
    setLoading(true);

    const customer = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: `${form.address}, ${form.city}, ${form.province}, ${form.postalCode}`,
      joinCommunity: form.joinCommunity,
    };

    /*
      1. CREATE ORDER
    */
    const orderResponse = await fetch(
      "/api/orders",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
body: JSON.stringify({

  customer,

  items,

  subtotal: totalPrice,

  shipping,

  total: finalTotal,

  currency,

}),
      }
    );

    if (!orderResponse.ok) {
      throw new Error(
        "Failed to create order"
      );
    }

    const orderData =
      await orderResponse.json();

    /*
      2. INITIALIZE PAYFAST
    */
    const response = await fetch(
      "/api/payfast",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          name: customer.name,
          email: customer.email,
          total: totalPrice,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to initialize payment"
      );
    }

    const data =
      await response.json();

    /*
      3. SAVE ORDER LOCALLY
    */
    if (data.url) {
      localStorage.setItem(
        "msw_last_order",
        JSON.stringify({
          orderNumber:
            orderData.orderNumber,
          items,
          total: totalPrice,
        })
      );

      window.location.href =
        data.url;
    }
  } catch (error) {
    console.error(error);

    alert(
      "Something went wrong while processing your order. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-black px-4 pb-24 pt-28 text-white sm:px-6 md:px-10 md:pt-36">
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[1fr_460px] lg:gap-24">


        {/* LEFT SIDE */}
        <div className="max-w-3xl">
          <Link
  href="/shop"
  className="
    mb-8
    inline-flex
    text-[10px]
    uppercase
    tracking-[0.3em]
    text-white/50
    transition
    hover:text-white
  "
>
  ← Continue Shopping
</Link>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/35">
            Checkout
          </p>

          <h1 className="mt-5 text-4xl font-semibold uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
            Secure Checkout
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
            Complete your order securely. Built for the ones who keep moving,
            one way or another.
          </p>

          {/* FORM */}
          <div className="mt-16 space-y-14">

            {/* CONTACT */}
            <div>
              <h2 className="mb-6 text-[11px] uppercase tracking-[0.3em] text-white/55">
                Contact Details
              </h2>

              <div className="grid gap-5">
               <input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Full Name"
  className={inputStyles(errors.name)}
/>

{errors.name && (
  <p className="mt-2 text-xs tracking-wide text-red-400">
    {errors.name}
  </p>
)}

            <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Email Address"
  className={inputStyles(errors.email)}
/>

{errors.email && (
  <p className="mt-2 text-xs tracking-wide text-red-400">
    {errors.email}
  </p>
)}

               <input
  type="tel"
  name="phone"
  value={form.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  className={inputStyles(errors.phone)}
/>

{errors.phone && (
  <p className="mt-2 text-xs tracking-wide text-red-400">
    {errors.phone}
  </p>
)}
              </div>
            </div>

            {/* SHIPPING */}
            <div>
              <h2 className="mb-6 text-[11px] uppercase tracking-[0.3em] text-white/55">
                Shipping Address
              </h2>

              <div className="grid gap-5">
                <input
  type="text"
  name="address"
  value={form.address}
  onChange={handleChange}
  placeholder="Street Address"
  className={inputStyles(errors.address)}
/>

{errors.address && (
  <p className="mt-2 text-xs tracking-wide text-red-400">
    {errors.address}
  </p>
)}
               <input
  type="text"
  name="city"
  value={form.city}
  onChange={handleChange}
  placeholder="City"
  className={inputStyles(errors.city)}
/>

{errors.city && (
  <p className="mt-2 text-xs tracking-wide text-red-400">
    {errors.city}
  </p>
)}

                <div className="grid gap-5 sm:grid-cols-2">
                  <input
  type="text"
  name="province"
  value={form.province}
  onChange={handleChange}
  placeholder="Province"
  className={inputStyles(errors.province)}
/>

{errors.province && (
  <p className="mt-2 text-xs tracking-wide text-red-400">
    {errors.province}
  </p>
)}

                  <input
  type="text"
  name="postalCode"
  value={form.postalCode}
  onChange={handleChange}
  placeholder="Postal Code"
  className={inputStyles(errors.postalCode)}
/>

{errors.postalCode && (
  <p className="mt-2 text-xs tracking-wide text-red-400">
    {errors.postalCode}
  </p>
)}
                </div>
              </div>

              {/* CHECKBOXES */}
              <div className="mt-10 space-y-5 border-t border-white/10 pt-8">

                {/* COMMUNITY */}
                <label
  className="
    mt-6
    flex
    cursor-pointer
    items-start
    gap-3
    select-none
  "
>

  <button
    type="button"
    onClick={() =>
      setForm({
        ...form,
        joinCommunity: !form.joinCommunity,
      })
    }
    className="
      relative

      flex
      h-5
      w-5
      shrink-0

      items-center
      justify-center

      border
      border-white/40

      bg-black

      transition-all
      duration-300

      hover:border-white
    "
  >

    <span
      className={`
        absolute

        text-xs
        text-white

        transition-all
        duration-200

        ${
          form.joinCommunity
            ? "scale-100 opacity-100"
            : "scale-50 opacity-0"
        }
      `}
    >
      ✓
    </span>

  </button>

  <span className="text-sm leading-6 text-white/60">

    Join the MSW community for

    <span className="text-white">
      {" "}early drops
    </span>

    , exclusive updates and future releases.

  </span>

</label>

               {/* TERMS */}
<div>

  <label
  className="
    mt-6
    flex
    cursor-pointer
    items-start
    gap-3
    select-none
  "
>
  <button
    type="button"
    onClick={() =>
      setForm({
        ...form,
        acceptTerms: !form.acceptTerms,
      })
    }
    className="
      relative

      flex
      h-5
      w-5
      shrink-0
      items-center
      justify-center

      border
      border-white/40

      bg-black

      transition-all
      duration-300

      hover:border-white
    "
  >

    {/* Tick */}

    <span
      className={`
        absolute

        text-xs
        text-white

        transition-all
        duration-200

        ${
          form.acceptTerms
            ? "scale-100 opacity-100"
            : "scale-50 opacity-0"
        }
      `}
    >
      ✓
    </span>

  </button>

  <span className="text-sm leading-relaxed text-white/65">

    I agree to the{" "}

    <Link
      href="/terms"
      className="
        underline
        underline-offset-4

        transition

        hover:text-white
      "
    >
      Shipping Policy
    </Link>

    {" "}and{" "}

    <Link
      href="/returns"
      className="
        underline
        underline-offset-4

        transition

        hover:text-white
      "
    >
      Returns Policy
    </Link>

    .

  </span>
</label>

  {errors.acceptTerms && (
    <p className="mt-3 text-xs tracking-wide text-red-400">
      {errors.acceptTerms}
    </p>
  )}

</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="h-fit border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl md:p-8 lg:sticky lg:top-28">

          <h2 className="text-[11px] uppercase tracking-[0.35em] text-white/45">
            Order Summary
          </h2>

          <div className="mt-8 space-y-7">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-start gap-5"
              >
                <div className="relative h-28 w-24 overflow-hidden bg-black md:h-32 md:w-28">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-[11px] uppercase tracking-[0.22em] text-white">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm text-white/45">
                    Size: {item.size}
                  </p>

                  <p className="mt-1 text-sm text-white/45">
                    Qty: {item.quantity}
                  </p>
                  <p className="mt-1 text-sm text-white/45">
  Each: {convertPrice(item.price)}
</p>
                </div>

                <p className="text-sm font-medium text-white">
  {convertPrice(
    item.price * item.quantity
  )}
</p>
              </div>
            ))}
          </div>

          {/* ORDER TOTALS */}

<div className="mt-10 border-t border-white/10 pt-7">

  {/* SUBTOTAL */}

  <div className="flex items-center justify-between">

    <p className="text-[11px] uppercase tracking-[0.25em] text-white/45">

      Subtotal

    </p>

    <p className="text-lg">

      {convertPrice(totalPrice)}

    </p>

  </div>


  {/* SHIPPING */}

  <div className="mt-5 flex items-center justify-between">

    <p className="text-[11px] uppercase tracking-[0.25em] text-white/45">

      Shipping

      {

        currency === "ZAR"

        &&

        " (South Africa)"

      }

      {

        currency === "GBP"

        &&

        " (United Kingdom)"

      }

    </p>

    <p className="text-lg">

      {convertPrice(shipping)}

    </p>

  </div>


  <div className="my-7 border-t border-white/10" />


  {/* FINAL TOTAL */}

  <div className="flex items-center justify-between">

    <p className="text-[11px] uppercase tracking-[0.25em] text-white">

      Total

    </p>

    <p className="text-3xl font-semibold tracking-tight">

      {convertPrice(finalTotal)}

    </p>

  </div>


  <button

    onClick={handlePayment}

    disabled={

      loading ||

      items.length === 0

    }

    className="

      mt-8

      flex

      w-full

      items-center

      justify-center

      border

      border-white

      bg-white

      px-6

      py-5

      text-xs

      font-medium

      uppercase

      tracking-[0.35em]

      text-black

      transition-all

      duration-300

      hover:scale-[1.01]

      hover:bg-transparent

      hover:text-white

      active:scale-[0.99]

      disabled:cursor-not-allowed

      disabled:border-white/10

      disabled:bg-white/5

      disabled:text-white/30

    "

  >

    {

      loading

        ?

        "Redirecting..."

        :

        "Continue To Payment"

    }

  </button>


  <p

    className="
      mt-5

      text-center

      text-xs

      text-white/30
    "

  >

    Secure payment powered by PayFast

  </p>

</div>
        </div>
      </div>
    </main>
  );
}