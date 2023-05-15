import React ,{useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/effect-cards";

import ClassConts from './ClassConts';

function ClassList(props) {

  let Classnum = {
    img1:'class1.png',
    img2:'class2.png',
    img3:'class3.png'
  }

  const selectList = ["인기순", "찜많은순", "최신순"];
  const [Selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

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
        <SwiperSlide><Link to='/class/view'><img src={process.env.PUBLIC_URL + '/images/class/'+ Classnum.img1 } alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to='/class/view'><img src={process.env.PUBLIC_URL + '/images/class/'+ Classnum.img2 } alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to='/class/view'><img src={process.env.PUBLIC_URL + '/images/class/'+ Classnum.img3 } alt="" /></Link></SwiperSlide>
      </Swiper>
      </article>
      <article className='list_cont'>
        <p className='list_tab flex'>
          <strong>CLASS</strong>
          <ul className='list_op flex'>
            <li>강사</li>
            <li>레벨</li>
            <li>장르</li>
          </ul>
        </p>
        <p className='select_wrap'>
        <select onChange={handleSelect} value={Selected} className='list_select'>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        </p>
        <ClassConts />
      </article>
    </>
  );
}

export default ClassList;