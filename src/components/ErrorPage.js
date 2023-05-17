import React from 'react';
import './css/error.css';
// import {Link} from 'react-router-dom';
function ErrorPage(props) {
  return (
    <>
    <section className='err_wrap'>
      <article className='tit_wrap'>
        <h2>404 ERROR</h2>
        <p>Page No Found</p>
        <div className='txt_wrap'>
          <p>페이지가 없거나 오류가 발생하였습니다</p>
          <p>현재 페이지가 존재하지 않거나
            ,<p>현재 이용할 수 없는 페이지 입니다.</p>
          </p>
          </div>
          <a href='/' title='메인페이지가기'>
            홈으로 가기
          </a>
      </article>
      <article className='imgs_wrap'>
      <img src={process.env.PUBLIC_URL + `/images/u_common/error.gif`}
      alt={'에러메세지'}
      />
      </article>
    </section>
    </>
  );
}

export default ErrorPage;