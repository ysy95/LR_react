import React from 'react';
import '../css/myclass.css';
import '../css/mypage.css';
import '../css/cart.css'
import MypageClass from './mypage/MypageClass';
import MypageReceipt from './mypage/MypageReceipt';


function Mypage(props) {
  return (
  <div>
    <MypageClass />
    <MypageReceipt />
  </div>
  );
}

export default Mypage;