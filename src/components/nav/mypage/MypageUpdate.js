import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function MypageUpdate(props) {
  return (
    <section class="register">
    <h2>회원 정보 수정</h2>
    <article>
    <h3 className='hidden'>회원 정보 수정</h3>
    {/* php */}
    <p><span>ARRON</span>님 <br/>
    함께 흔들 준비 되셨나요?
    </p>
    <form action="" name="register_update">

    <div className='register_wrap'>

    <div className='img_update'>
    <label htmlFor="memebr_img">
    <img src={`${process.env.PUBLIC_URL}/images/myclass/monika.jpg`}  alt="프로필 이미지" className='member_img' />
    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
    </label>
    <input type="file" alt="프로필 이미지" id='memebr_img'/>
    </div>

    <input type="text" name="name" title='이름' placeholder='강잼민'/>
  <input type="password" name="pw" title='비밀번호'  placeholder='비밀번호 수정'/>
  <input type="password" name="pw2" title='비밀번호 수정 확인' 
  placeholder='비밀번호 확인'/>
  <input type="tel" name="phone" title='전화번호' placeholder='010-1234-5678' />
  <input type="email" name="email" title='이메일' placeholder='arron@naver.com' />
  <input type="button" value="정보 수정 완료" className='r_btn' />
  </div>
  
    </form>
    </article>
  </section>
  );
}

export default MypageUpdate;