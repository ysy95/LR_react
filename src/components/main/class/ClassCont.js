import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function ClassCont(props) {
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
      <span className='c_desc'>이거시한그릐로렘입ㅍ섬이다이자시가두두다다어때쩔지못막겟지김치김치</span>
      <span className='list_btn flex'>
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        <button>장바구니</button>
      </span>
  </div>
  );
}

export default ClassCont;