import React from 'react';
import SelectClassList from './SelectClassList';
import PaymentPrice from '../cart/PaymentPrice';
import '../../css/cart.css';

function Cart() {
  return (
    <>
      
      <SelectClassList/>
      <PaymentPrice/>
    </>
  );
}

export default Cart;