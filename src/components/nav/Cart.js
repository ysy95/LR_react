import React from 'react';
import SelectClassList from './SelectClassList';
import PaymentPrice from './PaymentPrice';
import '../css/cart.css';
import Header from '../Header';
import Footer from '../Footer';

function Cart() {
  return (
    <>
      <Header/>
      <h2 className='c_title'>장바구니</h2>
      <SelectClassList/>
      <PaymentPrice/>
      <Footer/>
    </>
  );
}

export default Cart;