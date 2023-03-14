import React from 'react';
import './payment.css';

const Payment = () => {
  return (
    <div id='paymentDiv'>
      <h1 id="header">Payment Information</h1>
      <form id="form" action="/checkout">
        <div id="custInfo">
          <label htmlFor="full name">Full Name</label>
          <input className="inputs" type="text" name="full name" required/>
          <label htmlFor="street address">Street Address</label>
          <input className="inputs" type="text" name="street address" required/>
          <label htmlFor="city">City</label>
          <input className="inputs" type="text" name="city" required/>
          <label htmlFor="state">State</label>
          <input className="inputs" type="text" name="state" required/>
          <label htmlFor="zipcode">Zipcode</label>
          <input className="inputs" type="text" name="zipcode" required/>
        </div>
        <div id="custCardInfo">
          <label htmlFor="full name">Full Name</label>
          <input className="inputs" type="text" name="full name" required/>
          <label htmlFor="card number">Card Number</label>
          <input className="inputs" type="text" name="card number" required/>
          <label htmlFor="expiration">Expiration</label>
          <input className="inputs" type="text" name="expiration" required/>
          <label htmlFor="security code">Security Code</label>
          <input className="inputs" type="text" name="security code" required/>
        </div>
        <input id="submit" type="submit" value="Checkout" />
      </form>
    </div>
  );
};

export default Payment;
