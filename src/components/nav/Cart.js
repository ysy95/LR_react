import React from 'react';
import SelectClassList from './SelectClassList';
import PaymentPrice from './PaymentPrice';
import '../css/cart.css';

function Cart() {
  return (
    <>
      <h2>장바구니</h2>
      <SelectClassList/>
      <PaymentPrice/>
    </>
  );
}

export default Cart;