import React from 'react';
import SelectClassList from './SelectClassList';
import Payment from './Payment';
import '../css/cart.css';

function Cart() {
  return (
    <>

      <h2 className='c_title'>장바구니</h2>
      <SelectClassList/>
      <Payment/>
    </>
  );
}

export default Cart;