import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


function MypageButton(props) {
  // const mybtn = [
  //   {
  //     id:1,
  //     title: '나의 강의 보러 가기',
  //     link: ''
  //   },

  //   {
  //     id:2,
  //     title: '찜한 강의 보러 가기',
  //     link: ''
  //   },

  //   {
  //     id:3,
  //     title: '구매 내역',
  //     link: ''
  //   },

  //   {
  //     id:4,
  //     title: '1:1 문의',
  //     link: ''
  //   } 
  // ]
  return (
    <>
    <a href="#none" title='페이지 이동' className='my_btn'>나의 강의 보러 가기
    <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon>
    </a>
    </>
  );
}

export default MypageButton;