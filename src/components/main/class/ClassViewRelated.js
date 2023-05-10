import React from 'react';
import '../../css/class.css';
import ClassViewRelatedView from './ClassViewRelatedView';

function ClassViewRelated(props) {
  return (
    <>
      
      <section id="class_rel">
      <h3 className='class_rel_t t_center'>관련 강의</h3>
      <p className='t_center class_rel_p'>이 강의를 본 수강생들은 이 강의도 수강했어요!</p>
        <article className='flex'>
          <h3 className='hidden'>관련 강의</h3>
          <ClassViewRelatedView />
          <ClassViewRelatedView />
        </article>
      </section>
    </>
  );
}

export default ClassViewRelated;