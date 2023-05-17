import React from 'react';

import Progressbar from './Progressbar';

function ClassIng(props) {
  return (
    <div className='class_ing'>
      <strong>
        {/* php 타이틀 */}
        모니카의 몰루몰루 함냐 함냐
      </strong>
      <p>
        {/* 강사명 레벨 장르 */}
        모니카 | 엄나춤 | 코레오그래피
      </p>
      <p className='flex'>
        {/* 진도율 상태관리 진행시간 */}
        <p><span>진도율</span><span className='margin'>90%</span></p>
        <span>00:00</span>
      </p>
      <Progressbar per='90'/>
      <p className='flex'>
        <span>만료일<span className='margin'>2023.05.04</span></span><button>강의 이어보기</button>
      </p>
    </div>
  );
}

export default ClassIng;