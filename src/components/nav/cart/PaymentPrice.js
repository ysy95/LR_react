import React from 'react';
// import '../../css/cart.css';

function PaymentPrice() {
  return (
    <>
    <form method='post' action='cart.php'>
      <article className='payment_con'>
          <h2 className='p_title'>결제할 상품 총 1개</h2>     
          <p className='p_price'>상품 금액 <span>990,910원</span></p>
          <p>결제 금액 <span>990,910원</span></p>
          <input type="submit" id='payment_btn' value="결제하기"/>
          <a href='#none' className='txt_tag'>결제 안내 유의사항 + </a>
      </article>
    </form>
    </>
  );
}

export default PaymentPrice;