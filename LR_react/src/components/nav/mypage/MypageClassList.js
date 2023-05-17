import React from 'react';

import ClassIng from './ClassIng';

function mypageClassList(props) {
  return (
    <article className='myclass_list'>
      {/* 프로필 */}
      <strong>
        나의 강의목록
      </strong>
      <ul className='myclass_tab flex'>
        <li>
          전체 강의
        </li>
        <li>
          진행중
        </li>
        <li>
          종료된 강의
        </li>
      </ul>
      <ClassIng />
      <ClassIng />
      <ClassIng />
      <ClassIng />
    </article>
  );
}

export default mypageClassList;