import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MypageTab from './MypageTab';
import MypageClassRecent from './MypageClassRecent';
import MypageChallenge from './MypageChallenge';

function MypageWrap(props) {
  return (
    <>
    <MypageTab /> 
    <Routes>
    <Route path='/' element={<MypageClassRecent />} />
    <Route path='/challenge' element={<MypageChallenge/>} />
    </Routes>
    </>
  );
}

export default MypageWrap;