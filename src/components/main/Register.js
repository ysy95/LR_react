import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Register(props) {
  <style>
    
  </style>
  return (
    <section class="register">
      <h2>회원가입</h2>
      <article>
      <h3>
      이용약관
      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      <div className='terms'>
        <p> 함냐 함냐 집에 가고 싶어영 너무 졸려영 </p>
      </div>
      </h3>
      <form action="" name="register">
      <div className='okay'>
      <p className='flex'>
      <input type="checkbox" name="marketing" id="marketing" />
      <label htmlFor="marketing">마케팅 문자 수신 동의 (선택)</label>
      </p>
      <p className='flex'>
      <input type="checkbox" name="inform" id="inform" />
      <label htmlFor="inform">개인 정보 수집 동의 (필수)</label>
      </p>
      </div>
      <p className='flex allokay'>
      <input type="checkbox" name="allokay" id='allokay'/>
      <label htmlFor="allokay">모두 동의</label>
      </p>

    <div className='register_wrap'>
    <input type="text" name="id" title='아이디' placeholder='아이디를 입력해주세요'/>
    <input type="password" name="pw" title='비밀번호'  placeholder='비밀번호'/>
    <input type="password" name="pw2" title='비밀번호 확인' 
    placeholder='비밀번호 확인'/>
    <input type="text" name="name" title='이름' placeholder='이름'/>
    <input type="tel" name="phone" title='전화번호' placeholder='전화번호' />
    <input type="email" name="email" title='이메일' placeholder='이메일' />
    <select name="gender" title='성별' placeholder='성별'>
      <option value="성별">성별</option>
      <option value="0">남</option>
      <option value="1">여</option>
    </select>
    <input type="button" value="회원가입" className='r_btn' />
    </div>
    
      </form>
      </article>
    </section>
  );
}

export default Register;