import React from 'react';
import '../css/myclass.css';
import '../css/mypage.css';
import MypageClass from './mypage/MypageClass';
// import MypageTab from './mypage/MypageTab';
// import MypageButton from './mypage/MypageButton';
// import MypageChallenge from './mypage/MypageChallenge';
// import MypageTab from './mypage/MypageTab';
// import Hotkey from './Hotkey';
import MypageQnaWrite from './mypage/MypageQnaWrite';


function Mypage(props) {
  return (
    <div>
    <MypageClass />
    <MypageQnaWrite />
  </div>
  );
}

export default Mypage;