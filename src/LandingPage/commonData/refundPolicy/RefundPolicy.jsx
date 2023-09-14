import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-[2520px] md:text-lg mx-auto lg:px-16 xl:px-28 md:px-10 px-4">
      <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-[#42a6ad]">
        Plan Picker Refund Policy
      </h2>
      <p className="my-2">
        At Plan Picker, we value your satisfaction and trust in our service.
        Here's our refund policy to ensure you have a clear understanding of how
        refunds work:
      </p>
      <ol className="list-decimal list-inside">
        <li className="mb-2">
          <strong> Cancellation within 7 Days:</strong> If you're not satisfied
          with your purchase within the first 7 days, we offer a full refund, no
          questions asked.
        </li>

        <li className="mb-2">
          <strong> Beyond 7 Days:</strong> After 7 days, we'll consider refund
          requests on a case-by-case basis. Please reach out to our support team
          for assistance.
        </li>
        <li className="mb-2">
          <strong> Subscription Refunds:</strong> For subscription-based plans,
          if you cancel within the first 7 days of your initial purchase, you'll
          receive a full refund. For monthly and annual subscriptions, you can
          cancel at any time, and your subscription will not renew. We do not
          provide refunds for the remaining subscription period after
          cancellation.
        </li>
        <li className="mb-2">
          <strong> Refund Process:</strong> To request a refund, please contact
          our customer support team through our website or email. Refunds will
          be issued to the original payment method within a reasonable
          timeframe.
        </li>
        <li className="mb-2">
          <strong> Exceptional Circumstances:</strong> In certain exceptional
          circumstances, such as technical issues on our end, we may issue
          refunds beyond the 7-day period.
        </li>
        <li className="mb-2">
          <strong> No Refund for Abused Services:</strong> We do not provide
          refunds for users who abuse or violate our terms of service.
        </li>
      </ol>
      <p className="mt-8">
        Remember, our goal is to provide you with the best service possible. If
        you have any questions or need assistance with a refund, don't hesitate
        to contact our support team. We're here to help make your experience
        with Plan Picker a positive one.
      </p>
    </div>
  );
};

export default RefundPolicy;
