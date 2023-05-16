import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <section>
      <article className='login_wrap'>
        <form action="" method='' name='login'>
          <fieldset className='l_form flex f_center'>
            <legend>로그인</legend>
            <input type="text" placeholder='아이디' title='id' />
            <input type="password" placeholder='비밀번호' title='pw' />
            <div className='log_check flex'>
              <span className='flex'>
              <input type="checkbox" id='id_check' />
              <label htmlFor="id_check">아이디 저장</label>
              </span>
              <p className='flex'>
                <span>아이디 찾기</span>
                |
                <span>비밀번호 찾기</span>
              </p>
            </div>
            <strong><Link to='/register'>아직 회원이 아니신가요?</Link></strong>
            <button className='log_btn'>로그인</button>
            <span className='log_kakao'>
              <img src={process.env.PUBLIC_URL + '/images/u_member/log_kakao.png'} alt="로그인" width='300' height='45' />
            </span>
          </fieldset>
        </form>
      </article>
    </section>
  );
}

export default Login;