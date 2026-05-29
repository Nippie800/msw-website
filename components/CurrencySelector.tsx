"use client";

import {
  useCurrency,
} from "@/context/CurrencyContext";

export default function CurrencySelector() {
  const {
    currency,
    setCurrency,
  } = useCurrency();

  return (
    <select
      aria-label="Currency"
      value={currency}
      onChange={(e) =>
        setCurrency(
          e.target.value as any
        )
      }
      className="
        border
        border-white/10
        bg-black
        px-3
        py-2
        text-xs
        uppercase
        text-white
      "
    >
      <option value="ZAR">
        ZAR
      </option>

      <option value="USD">
        USD
      </option>

      <option value="GBP">
        GBP
      </option>

      <option value="EUR">
        EUR
      </option>

    </select>
  );
}