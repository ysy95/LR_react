import React from 'react';
import '../../css/u_qna.css';

function QnaMove(props) {
  return (

      <section id='qna_move'>
        <h4 className='hidden'>강의 관련 질문하기</h4>
        <article>
          <h4>강의에 대해 궁금하신 사항이 있으신가요?</h4>
          <a href="#none" className='q_btn' title='문의하러가기'>1:1 문의 하러 가기</a>
        </article>
      </section>
  );
}

export default QnaMove;