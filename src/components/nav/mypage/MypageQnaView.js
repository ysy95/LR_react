import React from 'react';
import '../../css/mypage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function MypageQnaView(props) {
  return (
    // php
    <div className='qnaview_wrap'>
      <form name='qna'>
      <label htmlFor="qna_view">
      <p>Q. 남병규는 앞으로 몇번의 제모를?
      <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon></p>
      </label>
      <input type="checkbox" name="qna" id="qna_view" className='hidden'/>
      <div className='qnaview_box'>
      <div className='flex qna_top'>
        <div className='qna_col'>분류</div>
        {/* php */}
        <div>기타사항</div>
        <div className='qna_col'>작성일</div>
        {/* php */}
        <div >2023.04.28</div>
        <div className='qna_col'>답변여부</div>
        {/* php */}
        <div>Y</div>
      </div>

        <div className='qna_cont'>
        {/* php */}
        <p>모르겠네요. 어찌됐건 쉽게 빠지진 않을 것 같습니다.</p>
        </div>


        <div className='reply_view flex'>
          <div>Re : 답변입니다.</div>
          <div>작성일</div>
          {/* php */}
          <div>2023.04.28</div>
        </div>
        <div className='reply_cont'>
        <p>졸립니다.</p> 
        </div>

    {/* qna_wrap 끝 */}
    </div>
    </form>
    </div>
  );
}

export default MypageQnaView;