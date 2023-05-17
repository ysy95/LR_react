import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/effect-cards";

import ClassConts from './ClassConts';

function ClassList({memberclasslist, select, setselect, sortByLowPrice, sortDate2, sortInst, sortLev, sortKind}) {

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
            <li>
              <input type="radio" name="tab" value="강사" checked={select === "강사"} onChange={handleChange} id='class_inst' className='hidden' />
              <label htmlFor="class_inst">
                강사
              </label>
            </li>
            <li>
              <input type="radio" name="tab" value="레벨" checked={select === "레벨"} onChange={handleChange} id='class_lev' className='hidden' />
              <label htmlFor="class_lev">
                레벨
              </label>
            </li>
            <li>
              <input type="radio" name="tab" value="장르" checked={select === "장르"} onChange={handleChange} id='class_kind' className='hidden' />
              <label htmlFor="class_kind">
                장르
              </label>
            </li>
          </ul>
        </div>
        <p className='select_wrap'>
        <select  onChange={handleChange} className='list_select'>
          <option value="recently">최신순</option>
          <option value="zim">찜 많은순</option>
          <option value="lowPrice">낮은 가격순</option>
        </select>
        </p>
        <ClassConts memberclasslist={memberclasslist} select={select} sortDate2={sortDate2} sortByLowPrice={sortByLowPrice} sortInst={sortInst} sortLev={sortLev} sortKind={sortKind} />
      </article>
    </>
  );
}

export default ClassList;