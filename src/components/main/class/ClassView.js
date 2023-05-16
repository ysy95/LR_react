import React from 'react';
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ClassViewRelated from './ClassViewRelated';

function ClassView({memberclasslist}) {

  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ''; // Legacy method for cross browser support
    }
    return ''; // Legacy method for cross browser support
  };

  const {viewId} = useParams();

  let findId = memberclasslist.find(function(item) {
    return item.MC_num === viewId;
});
  return (
    <section id="class_view">
    <h2 className="hidden">강의 상세페이지</h2>
    <article>
      <h3>
      <span>강의명</span>
      {findId.MC_title}
      {/* <!-- php --> */}
      </h3>
      
      <iframe width="360" height="220" src="https://www.youtube.com/embed/dvTiIN-emBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

      <div className="cinfo_wrap flex">   

        <div className="cinfo_const flex">
      
          <div className="const flex f_center">
          <img src={`${process.env.PUBLIC_URL}/images/class/monika.jpg`}  alt="강사 이미지" />
            <p>{findId.MC_instructor}</p>
          </div>

        </div>

        <div className="cinfo_detail">
            <div className="flex">
              <p>Instructor</p>
              {/* <!--php --> */}
              <p>{findId.MC_instructor}</p>
            </div>

            <div className="flex">
              <p>level</p>
              {/* <!--php --> */}
              <p>{findId.MC_level}</p>
            </div>

            <div className="flex">
              <p>genre</p>
              {/* <!--php --> */}
              <p>{findId.MC_kind}</p>
            </div>

            <div className="flex">
              <p>곡 정보</p>
              {/* <!--php --> */}
              <p>{findId.MC_music}</p>
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
        {findId.MC_desc}
      </p>
        {/* <!-- php--> */}
      <div className="flex pay">
      <p><span>{findId.MC_price}</span>원</p>
      <button className='c_btn'>장바구니</button>
      </div>
    </article>
    <ClassViewRelated />
    </section>

  );
}

export default ClassView;