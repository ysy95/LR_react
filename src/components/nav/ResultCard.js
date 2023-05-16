import React from 'react';
import {Link} from 'react-router-dom';

function ResultCard(props) {
  return (
    <div className='r_card flex'>
      <span className='lev_tag'>엄나춤</span>
      <Link to='/class/view'>
        {/* php 멤버클래스 강사썸네일 */}
        <img src={`${process.env.PUBLIC_URL}/images/class/Monika.jpg`} alt="php타이틀" width='145' height='145' />
      </Link>
      {/* php 멤버클래스 강의명지애 */}
      <strong>모니카의 강재민 뿌시기</strong>
      {/* php 멤버클래스 가격 */}
      <p className='orange'>39,000 won</p>
    </div>
  );
}

export default ResultCard;