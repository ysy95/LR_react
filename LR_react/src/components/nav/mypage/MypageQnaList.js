import React from 'react';
import MypageQnaView from './MypageQnaView';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function MypageQnaList({qnalist, setQnalist}) {
  console.log(qnalist);
  return (
    <div>
      <section id='qna_list'>
        <h2 className='hidden'>Qna</h2>
        <article>
        <h3>Q&A</h3>
        <div className='flex qna_title'>
        <p>나의 문의글 내역 보기</p>
        <Link to='/mypage/qnawrite'>문의 하러 가기 
        <FontAwesomeIcon icon={faAngleRight} />
        </Link>
        </div>
        <MypageQnaView qnalist={qnalist} setQnalist={setQnalist}/>
        </article>
      </section>
    </div>
  );
}

export default MypageQnaList;