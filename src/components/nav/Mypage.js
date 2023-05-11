import React from 'react';
import '../css/myclass.css';
import '../css/mypage.css';
import MypageClass from './mypage/MypageClass';
// import MypageTab from './mypage/MypageTab';
// import MypageButton from './mypage/MypageButton';
// import MypageChallenge from './mypage/MypageChallenge';
// import MypageTab from './mypage/MypageTab';
// import Hotkey from './Hotkey';
import MypageQnaList from './mypage/MypageQnaList';


function Mypage(props) {
  return (
    <div>
    <MypageClass />
    <MypageQnaList/>
  </div>
  );
}

export default Mypage;