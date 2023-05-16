import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ClassViewRelated from './ClassViewRelated';

function ClassView(props) {
  return (
    <section id="class_view">
    <h2 className="hidden">강의 상세페이지</h2>
    <article>
      <h3>
      <span>강의명</span>
      Black Eyed Pass - ACTION 
      {/* <!-- php --> */}
      </h3>
      
      <iframe width="360" height="220" src="https://www.youtube.com/embed/dvTiIN-emBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <div className="cinfo_wrap flex">   

        <div className="cinfo_const flex">
      
          <div className="const">
          <img src={`${process.env.PUBLIC_URL}/images/class/monika.jpg`}  alt="강사 이미지" />
            <p>모니카</p>
          </div>

        </div>

        <div className="cinfo_detail">
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


        </div>
    </article>

    <article className='class_cont'>
      <h3 class="hidden">강의내용</h3>
      <div className='flex class_cond'>
        <h3>강의내용</h3>
        <div className='flex'>
        <label for="chim_kong">찜하기</label>
        <button className='zzim_btn'>
        <FontAwesomeIcon icon={faHeart} className='zzim'></FontAwesomeIcon>
        </button>
        </div>
      </div>
      <p className='class_desc'>
        {/* <!-- php--> */}
        간단한 아이솔레이션부터 파워풀한 동작까지<br />
        쉽게 따라할 수 있도록 해보았습니다. 이제 이렇게 따라해볼까요?
      </p>
        {/* <!-- php--> */}
      <div className="flex pay">
      <p><span>39,000</span>원</p>
      <button className='c_btn'>장바구니</button>
      </div>
    </article>
    <ClassViewRelated />
    </section>

  );
}

export default ClassView;