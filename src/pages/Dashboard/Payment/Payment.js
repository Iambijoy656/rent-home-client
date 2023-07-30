import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const homeData = useLoaderData();
  const { rent } = homeData;
  return (
    <>
      <div className="my-5 ml-5">
        <h2 className="text-3xl text-orange-500">
          Payment for <span className="text-xl font-semibold">Home Rent</span>
        </h2>
        <p className="text-xl my-5 text-orange-500">
          Please pay <strong>{rent} Tk</strong>
        </p>
        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <CheckoutForm homeData={homeData}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
