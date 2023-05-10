import React from 'react';
import '../css/myclass.css';
import '../css/mypage.css';
import MypageClass from './mypage/MypageClass';
import MypageTab from './mypage/MypageTab';
import MypageButton from './mypage/MypageButton';


function Mypage(props) {
  return (
    <div>
    <MypageClass />
    <MypageTab />
    <MypageButton />
    <MypageButton />
    <MypageButton />
    <MypageButton />
  </div>
  );
}

export default Mypage;