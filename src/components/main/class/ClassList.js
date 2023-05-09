import React from 'react';

function ClassList(props) {
  let Classnum = {
    img1:'class1.png',
    img2:'class2.png',
    img3:'class3.png'
  }
  return (
    <>
      <article className='slide_list'>
        <h2>인기 강의</h2>
        {/* slide */}
        <div className='slide_wrap flex'>
          <div className='slide'>
            <img src={process.env.PUBLIC_URL + '/images/class/'+ Classnum.img1 } alt="" />
          </div>
          <div className='slide'>
            <img src={process.env.PUBLIC_URL + '/images/class/'+ Classnum.img2 } alt="" />
          </div>
          <div className='slide'>
            <img src={process.env.PUBLIC_URL + '/images/class/'+ Classnum.img3 } alt="" />
          </div>
        </div>
      </article>
      <article>

      </article>
    </>
  );
}

export default ClassList;