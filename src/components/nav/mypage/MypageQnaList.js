import React from 'react';
import MypageQnaView from './MypageQnaView';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function MypageQnaList(props) {
  return (
    <div>
      <section id='qna_list'>
        <h2 className='hidden'>Qna</h2>
        <article>
        <h3>Q&A</h3>
        <div className='flex qna_title'>
        <p>나의 문의글 내역 보기</p>
        <a href="#none" title='문의 하러 가기'>문의 하러 가기 
        <FontAwesomeIcon icon={faAngleRight} />
        </a>
        </div>
        <MypageQnaView />
        </article>
      </section>
    </div>
  );
}

export default MypageQnaList;