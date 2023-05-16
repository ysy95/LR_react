import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/effect-cards";

import ClassConts from './ClassConts';

function ClassList({memberclasslist, select, setselect, sortByLowPrice, sortDate2}) {

  let Classnum = {
    img1:'class1.png',
    img2:'class2.png',
    img3:'class3.png'
  }

  function handleChange(event){
    setselect(event.target.value);
  }


  return (
    <>
      <article className='slide_list'>
        <h2>인기 강의</h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><Link to='/class/view/2'><img src={process.env.PUBLIC_URL + '/images/class/'+ Classnum.img1 } alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to='/class/view/3'><img src={process.env.PUBLIC_URL + '/images/class/'+ Classnum.img2 } alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to='/class/view/4'><img src={process.env.PUBLIC_URL + '/images/class/'+ Classnum.img3 } alt="" /></Link></SwiperSlide>
      </Swiper>
      </article>
      <article className='list_cont'>
        <div className='list_tab flex'>
          <strong>CLASS</strong>
          <ul className='list_op flex'>
            <li>강사</li>
            <li>레벨</li>
            <li>장르</li>
          </ul>
        </div>
        <p className='select_wrap'>
        <select  onChange={handleChange} className='list_select'>
          <option value="recently">최신순</option>
          <option value="zim">찜 많은순</option>
          <option value="lowPrice">낮은 가격순</option>
        </select>
        </p>
        <ClassConts memberclasslist={memberclasslist} select={select} sortDate2={sortDate2} sortByLowPrice={sortByLowPrice} />
      </article>
    </>
  );
}

export default ClassList;