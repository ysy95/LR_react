import React from 'react';
import {Link} from 'react-router-dom';
// import '../css/cart.css';

function SelectClassList() {
  return (
    <>
      <article className='classlist'>
        <div>
          <label for='cart_chk1'>
            <input type='checkbox' id='cart_chk1'/>
            <Link to='/class/view'>
              <img src={`${process.env.PUBLIC_URL}/images/main/teacher.png`}  alt="강사사진" />
            </Link>
          </label>
        </div>

        <div className='c_txt'>
          <p>모니카</p>
          <h3 className='c_title2'>모닉하쌤의 런런 전문반 10.step Class</h3>
          <p className='class_level'>전문반</p>
          <p className='c_price'>990,910원</p>
        </div>
      </article>
    </>
  );
}

export default SelectClassList;