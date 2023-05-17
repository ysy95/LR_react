import React from 'react';
import ClassViewRelatedView from './ClassViewRelatedView';

function ClassViewRelated({memberclasslist, level, kind}) {

  const related = memberclasslist.filter(key => key.MC_level === level && key.MC_kind === kind);

  return (
    <>
      
      <section id="class_rel">
      <h3 className='class_rel_t t_center'>관련 강의</h3>
      <p className='t_center class_rel_p'>이 강의를 본 수강생들은 이 강의도 수강했어요!</p>
        <article className='flex'>
          <h3 className='hidden'>관련 강의</h3>
          {
            related.length > 2 ?
            related.slice(0, 2).map((items, index) =>
              <ClassViewRelatedView key={index} title={items.MC_title} />
            ) :
            memberclasslist.slice(0, 2).map((items, index) =>
              <ClassViewRelatedView key={index} title={items.MC_title} />
            )
          }
        </article>
      </section>
    </>
  );
}

export default ClassViewRelated;