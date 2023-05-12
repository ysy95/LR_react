import React from 'react';

function MypageLikes(props) {
  return (
    <article>
      <ul className='flex'>
        <li>모니카</li>
        <li>전문반</li>
        <li>코레오그레피</li>
      </ul>
  
      <div className='class_info flex'>
      <img src={`${process.env.PUBLIC_URL}/images/class/monika.jpg`}  alt="강의 썸네일" />
      <div>
        <p>런런 전문반 10.step</p>
        <p>990,910원</p>
      </div>
      </div>
    </article>
  );
}

export default MypageLikes; 