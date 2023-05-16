import React from 'react';
import {Link} from 'react-router-dom';

function ResultCard(props) {
  let sIndex = props.id;
  return (
    <div className='r_card flex'>
      <span className='lev_tag'>{props.level}</span>
      <Link to={`/class/view/${sIndex}`}>
        {/* php 멤버클래스 강사썸네일 */}
        <img src={`${process.env.PUBLIC_URL}/images/class/Monika.jpg`} alt="php타이틀" width='145' height='145' />
      </Link>
      {/* php 멤버클래스 강의명지애 */}
      <strong>{props.title}</strong>
      {/* php 멤버클래스 가격 */}
      <p className='orange'>{props.price} won</p>
    </div>
  );
}

export default ResultCard;