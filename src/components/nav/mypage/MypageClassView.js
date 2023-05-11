import React from 'react';
import '../../css/myclass.css';
import ClassView from '../../main/class/ClassView';
import ClassViewRelated from '../../main/class/ClassViewRelated';
import QnaMove from '../../main/qna/QnaMove';

function MypageClassView(props) {
  return (
    <section id="myclass_view">
    <h2 className="hidden">내 강의 보기 페이지</h2>
    <article>
      <h3>
      Black Eyed Pass - ACTION 
      {/* <!-- php --> */}
      </h3>
      
      <iframe width="360" height="220" src="https://www.youtube.com/embed/dvTiIN-emBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <div className="mycinfo_wrap flex">
      <div className="mycinfo_detail">
            <div className="flex">
              <p>Instructor</p>
              {/* <!--php --> */}
              <p>모니카, 립제이</p>
            </div>

            <div className="flex">
              <p>level</p>
              {/* <!--php --> */}
              <p>엄마나춤춰</p>
            </div>

            <div className="flex">
              <p>genre</p>
              {/* <!--php --> */}
              <p>코레오그래피</p>
            </div>

            <div className="flex">
              <p>곡 정보</p>
              {/* <!--php --> */}
              <p>Black Eyed Peas - ACTION</p>
            </div>
          </div>   
        <div className="mycinfo_const flex">
          <div className="my_const">
          <img src={`${process.env.PUBLIC_URL}/images/class/monika.jpg`}  alt="강사 이미지" />
            <p>모니카</p>
          </div>
        </div>

        </div>
    </article>

    <article className='myclass_cont'>
      <h3 class="hidden">강의내용</h3>
      <div className='flex myclass_cond'>
        <h3>강의내용</h3>
      </div>
      <p className='myclass_desc'>
        {/* <!-- php--> */}
        간단한 아이솔레이션부터 파워풀한 동작까지<br />
        쉽게 따라할 수 있도록 해보았습니다. 이제 이렇게 따라해볼까요?
      </p>
        {/* <!-- php--> */}
    </article>
    <ClassViewRelated />
    <QnaMove />
    </section>
  );
}

export default MypageClassView;