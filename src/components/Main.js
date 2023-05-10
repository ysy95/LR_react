import React from 'react';
import './css/main.css';
import Mypage from './nav/Mypage';
import Register from './main/Register';
import MypageUpdate from './nav/mypage/MypageUpdate';


function Main(props) {
  return (
    <div>
      <MypageUpdate />
    </div>
  );
}

export default Main;