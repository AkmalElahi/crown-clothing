import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_qdioH5Rw5NHtmmZd6tr2K7HD00m6LPiiv8';

    const onToken = (token) => {
        console.log(token)
        alert("Payment Succesful")
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing"
            shippingAddress
            billingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;