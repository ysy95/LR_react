import React from 'react';
// import '../css/cart.css';

function SelectClassList() {
  return (
    <>
      <div className='classlist'>
        <div>
          <label for='cart_chk1'>
            <input type='checkbox' id='cart_chk1'/>
            <img src={`${process.env.PUBLIC_URL}/images/teacher.png`}  alt="강사사진" />
          </label>
        </div>

        <div className='c_txt'>
          <p>모니카</p>
          <h3>모닉하쌤의 런런 전문반 10.step Class</h3>
          <p>전문반</p>
          <p>강의가격 990,910원</p>
        </div>
      </div>
    </>
  );
}

export default SelectClassList;