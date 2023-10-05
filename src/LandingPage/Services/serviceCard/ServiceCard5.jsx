import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const ServiceCard5 = () => {
  const [card, setCard] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const isLoginButton = (pCard) => {
    if (user) {
      navigate(`/paymentStripe/${pCard}`);
    } else {
      toast("Please Login After Choose Plan!");
    }
  };

  useEffect(() => {
    fetch(
      "https://plan-picker-server-production-96ce.up.railway.app/paymentCard"
    )
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        // console.log(data);
      });
  }, []);

  return (
    <div>
      <section className="py-10 dark:text-gray-100">
        <div className="text-[#61677A]">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span color="gray" className="font-bold text-[#61677A] uppercase">
              Pricing
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#5EBEC4]">
              Choose your best plan
            </h2>
          </div>
          <div className="grid gap-6 grid-cols-1 mb-6 md:grid-cols-2 lg:grid-cols-3">
            {card.map((pCard) => (
              <div key={pCard._id} className="w-full mb-8 lg:mb-0">
                <div className="flex flex-col md:h-[520px] lg:h-[520px] hover:shadow-lg shadow-md p-6 space-y-6 rounded sm:p-8">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold"> {pCard.title}</h4>
                    <span className="text-6xl font-bold text-[#5EBEC4]">
                      ${pCard.price}
                    </span>
                  </div>
                  <p className="mt-3 dark:text-gray-400">{pCard.description}</p>
                  <ul className="flex-1 mb-6">
                    <li className="flex mb-2 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"></path>
                      </svg>
                      <span> {pCard.features[0]}</span>
                    </li>
                    <li className="flex mb-2 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"></path>
                      </svg>
                      <span>{pCard.features[1]}</span>
                    </li>
                    <li className="flex mb-2 items-start space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"></path>
                      </svg>
                      <span>{pCard.features[2]}</span>
                    </li>
                    <li className="flex mb-2 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"></path>
                      </svg>
                      <span>{pCard.features[3]}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"></path>
                      </svg>
                      <span>{pCard.features[4]}</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => isLoginButton(pCard._id)}
                    type="button"
                    className="btn inline-block cursor-pointer px-5 py-3 w-full font-semibold bg-[#5EBEC4] hover:text-[#5EBEC4] text-white text-center rounded bg-violet-400">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCard5;
