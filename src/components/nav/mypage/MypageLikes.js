import React from 'react';

function MypageLikes(props) {
  return (
    <section>
      <h2>찜한 강의 목록</h2>
      <article>
      <ul>
        <li>모니카</li>
        <li>전문반</li>
        <li>코레오그레피</li>
      </ul>
      </article>

      <article>
      <img src={`${process.env.PUBLIC_URL}/images/class/monika.jpg`}  alt="강의 썸네일" />
        <p>런런 전문반 10.step</p>
        <p>990,910원</p>
        
      </article>
    </section>
  );
}

export default MypageLikes; 