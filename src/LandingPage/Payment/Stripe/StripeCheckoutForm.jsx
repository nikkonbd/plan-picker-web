import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";


const CheckOutForm = ({ id, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setSubmitting(true);

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (paymentMethodError) {
            setCardError(paymentMethodError.message);
            setSubmitting(false);
            return;
        }

        try {
            setCardError('');
            setProcessing(true);

            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: paymentMethod.id,
                }
            );

            if (confirmError) {
                console.error('Payment confirmation error:', confirmError);
                setCardError('Payment confirmation error');
                setProcessing(false);
                setSubmitting(false);
                return;
            }

            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                const payment = {
                    name: user.displayName,
                    email: user.email,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cardId: id,
                    price,
                    status: 'service approved',
                };
                console.log(payment)
                axiosSecure.post('/payments', payment)
                    .then((res) => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            navigate('/')
                        }
                    });


            }

            setProcessing(false);
            setSubmitting(false);
        } catch (err) {
            console.error('Payment error:', err);
            setCardError('Payment error');
            setProcessing(false);
            setSubmitting(false);
        }

    };







    return (
        <>
            <form className="w-75 mx-auto py-5" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex justify-center">
                    <button className="btn btn-success mt-4" type="submit" disabled={!stripe || !clientSecret || processing || submitting}>
                        Pay ${price}
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-400 ms-4 mt-3">{cardError}</p>}
            {/* {transactionId && <p className="text-blue-400 ms-4 mt-3">Transaction complete with transactionId: {transactionId}</p>} */}
        </>
    );
};

export default CheckOutForm;