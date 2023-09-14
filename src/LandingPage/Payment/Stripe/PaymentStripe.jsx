import { Helmet } from "react-helmet-async";
import StripeCheckoutForm from "./StripeCheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";

const PaymentStripe = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_STRIPE_PK);
  const loader = useLoaderData();
  // console.log(loader)
  return (
    <>
      <Helmet>
        <title>Payment Test</title>
      </Helmet>
      <div className="mt-20 mx-6 md:mx-0">
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm loader={loader} key={loader._id} />
        </Elements>
      </div>
    </>
  );
};

export default PaymentStripe;
