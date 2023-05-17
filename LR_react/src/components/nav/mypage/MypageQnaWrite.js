import React from 'react';

function MypageQnaWrite(props) {
  return (
    <section id='qna_write'>
      <h2 className='hidden'>Qna</h2>
      <article>
      <h3>Q&A</h3>
      <div className='qnawirte_wrap'>

        <form action="" name='qna_write'>
        <div className='flex f_center'>
        <input type="radio" id="etc" name='qna_write'/>
        <label htmlFor="etc">기타사항</label>
        <input type="radio" id="relc" name='qna_write' />
        <label htmlFor="relc">강의관련</label>
        <input type="radio" id="relp" name='qna_write' />
        <label htmlFor="relp">구매관련</label>
        </div>

        <input type="text" name="qna_title" title='문의글 제목' placeholder='제목을 입력해 주세요.' />
        <textarea name="qna_cont" title='문의글 내용' placeholder='내용을 입력해 주세요.'></textarea>
        
        <button>
          문의등록
        </button>

        </form>
      </div>
      </article>
    </section>
  );
}

export default MypageQnaWrite;