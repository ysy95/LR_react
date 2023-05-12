import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../css/myclass.css';
import '../css/mypage.css';
import '../css/cart.css';
import '../css/u_qna.css';
import MypageClass from './mypage/MypageClass';
import MypageWrap from './mypage/MypageWrap';
import MypageLikes from './mypage/MypageLikes';
import MypageClassList from './mypage/MypageClassList';
import MypageReceipt from './mypage/MypageReceipt';
import MypageQnaList from './mypage/MypageQnaList';
import MypageQnaWrite from './mypage/MypageQnaWrite';

import '../css/cart.css'

function Mypage(props) {
  return (
  <div>
    <MypageClass />
    <Routes>
    <Route path='/*' element={<MypageWrap />} />
    <Route path='/mylikes' element={<MypageLikes/>} />
    <Route path='/myclasslist' element={<MypageClassList />} />
    <Route path='/receipt' element={<MypageReceipt />} />
    <Route path='/qna' element={<MypageQnaList />} />
    <Route path='/qnawrite' element={<MypageQnaWrite />} />

    </Routes>

  </div>
  );
}

export default Mypage;