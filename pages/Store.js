import { createClient } from "contentful";
import Link from "next/link";
import ProductBanner from "../components/ProductBanner";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import { createCheckoutSession } from "next-stripe/client";
//const createCheckoutSession = require('next-stripe');

export async function getStaticProps() {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  const prices = await stripe.prices.list({
    active: true,
    limit: 3,
    expand: ["data.product"],
  });

  return {
    props: {
      prices: prices.data,
    },
  };
}

export default function Store({ prices }) {

const onClick = async(priceId) => {
    const session = await createCheckoutSession({
            success_url: window.location.href,
            cancel_url: window.location.href,
            line_items: [{ price: priceId, quantity: 1 }],
            payment_method_types: ["card"],
            mode: "payment",            
    });

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    if (stripe) {
        stripe.redirectToCheckout({ sessionId: session.id });
    }
}

  return (
    <>
      <ProductBanner />
      {/* <pre>{JSON.stringify(prices, null, 2)}</pre> */}
      <div className="container my-12 mx-auto px-3 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {prices.map((price) => (
            <div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
              key={price.id}
            >
              <article className="overflow-hidden rounded-lg shadow-lg  hover:shadow-xl transition duration-200 max-w-sm border-b-8 border-transparent">
                <div className="border-b-4 m-0 p-0 border-transparent hover:border-sbtOrange">
                  <img
                    src={price.product.images[0]}
                    width="100%"
                    height="200"
                    alt=""
                  />
                </div>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg tracking-tight hover:border-sbtOrange hover:text-sbtOrange ">
                    {price.product.name}{" "}
                  </h1>
                </header>
                <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <p className="text-sm py-11 align-text-middle">
                    {" "}
                    {price.product.description}{" "}
                  </p>
                </div>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={() => onClick(price.id)}
                  > 
                    Click to buy{" "}
                  </button>{" "}
                  <p className="text-sm py-11 align-text-bottom">
                    {" "}
                    Cost: ${(price.unit_amount / 100).toFixed(2)}
                  </p>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
