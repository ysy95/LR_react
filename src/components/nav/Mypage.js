import React from 'react';
import '../css/myclass.css';
import '../css/mypage.css';
import '../css/cart.css'
import MypageClass from './mypage/MypageClass';
import MypageReceipt from './mypage/MypageReceipt';


import '../css/myclass.css';

import MypageClassList from './mypage/MypageClassList';

function Mypage(props) {
  return (
  <div>
    <MypageClass />
    <MypageClassList />
    <MypageQnaList/>
  </div>
  );
}

export default Mypage;