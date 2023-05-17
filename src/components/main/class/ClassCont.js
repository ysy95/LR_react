import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function ClassCont(props) {

  return (
    <div className='r_card flex' key={props.key}>
      <span className='lev_tag'>{props.level}</span>
      <Link to={`/class/view/${props.id}`}>
        {/* php 멤버클래스 강사썸네일 */}
        <img src={`${process.env.PUBLIC_URL}/images/class/Monika.jpg`} alt="php타이틀" width='145' height='145' />
      </Link>
      {/* php 멤버클래스 강의명지애 */}
      <strong>{props.title}</strong>
      {/* php 멤버클래스 가격 */}
      <span className='class_price orange'>{props.price} won</span>
      <span className='c_desc'>{props.desc}</span>
      <span className='list_btn flex'>
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        <button>장바구니</button>
      </span>
    </div>
  );
}

export default ClassCont;