import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MypageLikes(props) {
  return (
    <div className='mylikes'>
      <div className='flex'>
      <ul className='flex'>
        <li>모니카</li>
        <li>전문반</li>
        <li>코레오그레피</li>
      </ul>
      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
      </div>
      <div className='class_info flex'>
      <img src={`${process.env.PUBLIC_URL}/images/class/monika.jpg`}  alt="강의 썸네일" />
      <div className='class_infod'>
        <p>런런 전문반 10.step</p>
        <p>990,910원</p>
        <p className='flex'>
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        <span>999k+</span>
        </p>
      </div>
      </div>
    </div>
  );
}

export default MypageLikes; 