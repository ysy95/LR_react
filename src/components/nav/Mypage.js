import React from 'react';

import { Routes, Route } from 'react-router-dom';
import '../css/myclass.css';
import '../css/mypage.css';
import '../css/cart.css';
import '../css/u_qna.css';
import MypageClass from './mypage/MypageClass';
import MypageWrap from './mypage/MypageWrap';
import MypageLikeslist from './mypage/MypageLikeslist';
import MypageClassList from './mypage/MypageClassList';
import MypageReceipt from './mypage/MypageReceipt';
import MypageQnaList from './mypage/MypageQnaList';
import MypageQnaWrite from './mypage/MypageQnaWrite';

import '../css/cart.css'

function Mypage({setUserInfo, userInfo}) {
  
  return (
  <div>
    <MypageClass userInfo={userInfo} />
    <Routes>
    <Route path='/*' element={<MypageWrap userInfo={userInfo} />} />
    <Route path='/mylikes' element={<MypageLikeslist userInfo={userInfo} />} />
    <Route path='/myclasslist' element={<MypageClassList userInfo={userInfo} />} />
    <Route path='/receipt' element={<MypageReceipt userInfo={userInfo} />} />
    <Route path='/qna' element={<MypageQnaList userInfo={userInfo} />} />
    <Route path='/qnawrite' element={<MypageQnaWrite userInfo={userInfo} />} />

    </Routes>

  </div>
  );
}

export default Mypage;