import React from 'react';
import './stripe.scss';

import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { getDefaultNormalizer } from '@testing-library/react';

var style = {
    base:{
        color:"DAD"
    }
}

function StripeForm({}){
    const stripe = useStripe();
    const elements = useElements();

    const Pay = async (e) =>{
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if(error){
            console.log("error",error);
        }else {
            console.log("Payments",paymentMethod);
        }

       // var clientSecret = await fetch()
        stripe.confirmCardPayment(clientSecret, {
            payment_method:paymentMethod
        });

        if(data.success){
            //unlock feature
        }
    }

    return (
        <form onSubmit={Pay}>
            This is a form
            <CardElement options={{
                style:style
            }}/>
            <button>Pay Transaction</button>
        </form>
    )
}

const stripePromise = loadStripe('pk_test_l2fIV3ejm9dBSMAZw6qMJLXj00mfPuOeIk');

function Wrapper({}){
    return (
        <Elements stripe={stripePromise}>
            <StripeForm />
        </Elements>
    )
}

Wrapper.defaultProps = {

}

export default Wrapper;