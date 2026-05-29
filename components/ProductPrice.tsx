"use client";

import { useCurrency } from "@/context/CurrencyContext";

type ProductPriceProps = {
  price: number;
};

export default function ProductPrice({
  price,
}: ProductPriceProps) {
  const { convertPrice } = useCurrency();

  return <>{convertPrice(price)}</>;
}