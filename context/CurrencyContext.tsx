"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type Currency =
  | "ZAR"
  | "USD"
  | "GBP"
  | "EUR";

const exchangeRates = {
  ZAR: 1,
  USD: 18.2,
  GBP: 24.5,
  EUR: 20.8,
};

const shippingRates = {

  ZAR: 100,

  USD: 450,

  GBP: 915,

  EUR: 700,

};
type CurrencyContextType = {
  currency: Currency;
  setCurrency: (
    currency: Currency
  ) => void;
  convertPrice: (
    price: number
  ) => string;
};

const CurrencyContext =
  createContext<
    CurrencyContextType | undefined
  >(undefined);

export function CurrencyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currency, setCurrency] =
    useState<Currency>("ZAR");

  const convertPrice = (
    price: number
  ) => {
    if (currency === "ZAR") {
      return `R${price.toFixed(2)}`;
    }

    const converted =
      price /
      exchangeRates[
        currency
      ];

      const shipping =

shippingRates[currency];

    switch (currency) {
      case "USD":
        return `$${converted.toFixed(2)}`;

      case "GBP":
        return `£${converted.toFixed(2)}`;

      case "EUR":
        return `€${converted.toFixed(2)}`;

      default:
        return `R${price.toFixed(2)}`;
    }
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => {
  const context =
    useContext(CurrencyContext);

  if (!context) {
    throw new Error(
      "useCurrency must be used inside CurrencyProvider"
    );
  }

  return context;
};