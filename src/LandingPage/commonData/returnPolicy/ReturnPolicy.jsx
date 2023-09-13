import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="max-w-[2520px] md:text-lg mx-auto lg:px-16 xl:px-28 md:px-10 px-4">
      <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-[#42a6ad]">
        Plan Picker Return Policy
      </h2>
      <p className="my-2">
        At Plan Picker, we want you to be completely satisfied with your
        purchase. Please read our return policy to understand how returns work:
      </p>
      <ol className="list-decimal list-inside">
        <li className="mb-2">
          <strong> Eligibility:</strong> To be eligible for a return, your item
          must be in the same condition as when you received it, and it must be
          returned within 30 days from the date of purchase.
        </li>

        <li className="mb-2">
          <strong> Return Process:</strong> To initiate a return, please contact
          our customer support team through our website or email. We will
          provide you with instructions on how to return the item.
        </li>
        <li className="mb-2">
          <strong> Refund Process:</strong> Once we receive your returned item
          and inspect it, we will notify you of the approval or rejection of
          your refund. If approved, your refund will be processed, and a credit
          will be automatically applied to your original payment method within a
          reasonable timeframe.
        </li>
        <li className="mb-2">
          <strong> Partial Refunds:</strong> In some cases, partial refunds may
          be granted .
        </li>
        <li className="mb-2">
          <strong> Exceptional Circumstances:</strong> In certain exceptional
          circumstances, such as technical issues or other unforeseen events, we
          may consider returns beyond the 30-day period.
        </li>
      </ol>
      <p className="mt-8">
        Our aim is to provide you with a hassle-free shopping experience. If you
        have any questions or need assistance with a return, please don't
        hesitate to reach out to our support team. We're here to ensure your
        satisfaction with Plan Picker.
      </p>
    </div>
  );
};

export default ReturnPolicy;
