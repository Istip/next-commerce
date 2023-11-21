"use client";

import { CartProvider as Provider } from "use-shopping-cart";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY!;

  return (
    <Provider
      mode="payment"
      cartMode="client-only"
      stripe={stripeKey}
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/error"
      currency="RON"
      billingAddressCollection={true}
      shouldPersist={false}
      language="en-US"
    >
      {children}
    </Provider>
  );
}
