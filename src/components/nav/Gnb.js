import React from 'react';
import {Link} from 'react-router-dom';

function Gnb(props) {
  return (
    <>
    <div id='gnb_wrap'>
    <strong>About Us</strong>
    <ul className='flex'>
      <li>
        <a href="#none">
          <span>Introduce</span>
          <span>소개</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <span>Instructor</span>
          <span>강사진</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <span>Performance</span>
          <span>퍼포먼스</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <span className='hi_white'><img src={process.env.PUBLIC_URL + '/images/u_common/Hi_white.gif'} alt="hi" /></span>
        </a>
      </li>
      <li>
        <a href="#none">
          <span>Interview</span>
          <span>인터뷰</span>
        </a>
      </li>
      <li>
        <Link to='/mypage/challenge' title='challenge'>
          <span>Challenge</span>
          <span>챌린지</span>
        </Link>
      </li>
    </ul>
    <strong className='orange'>Class</strong>
    <ul className='flex'>
      <li>
        <a href="#none">
          <span>Schedule</span>
          <span>일정</span>
        </a>
      </li>
      <li>
        <Link to='/class' title='class'>
          <span>Contents</span>
          <span>컨텐츠</span>
        </Link>
      </li>
      <li>
        <a href="#none">
          <span>Events</span>
          <span>이벤트</span>
        </a>
      </li>
      <li>
        <Link to='/class' title='class'>
          <span>Genre</span>
          <span>장르</span>
        </Link>
      </li>
      <li>
        <Link to='/class' title='class'>
          <span>Level</span>
          <span>레벨</span>
        </Link>
      </li>
      <li>
        <Link to='/class' title='class'>
          <span>Artist</span>
          <span>아티스트</span>
        </Link>
      </li>
    </ul>
    <strong className='n_con'>
      Contact
      <span className='hip_white'>
      <img src={process.env.PUBLIC_URL + '/images/u_common/Hip_white.gif'} alt="hip" />
      s
      </span>
    </strong>
    <ul className='n_contact flex'>
      <li>
        <Link to='/qna' title='qna'>
          1:1 문의
        </Link>
      </li>
      <li>
        <a href="#none">
          Pado ENT.
        </a>
      </li>
      <li>
        <a href="#none">
        Map
        </a>
      </li>
    </ul>
    </div>
    </>
  );
}

export default Gnb;