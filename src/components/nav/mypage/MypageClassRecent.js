import React from 'react';
import MypageButton from './MypageButton';

function MypageClassRecent(props) {
  return (
    <div>
    <div className='myclass_recc t_center'>
      {/* php */}
      <a href="#none" title="강의 보러 가기">
      <iframe width="250" height="150" src="https://www.youtube.com/embed/U0lmx8xnfhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>모닉하의 엄나춤인데</p>
      <p>03:12</p>
      </a>
      </div>
      <MypageButton />
    </div>
    
  );
}

export default MypageClassRecent;