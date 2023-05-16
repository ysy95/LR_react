import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


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
    <Link to='/mypage/myclasslist'className='my_btn'>나의 강의 보러가기
    <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon>
    </Link>
    <Link to='/mypage/mylikes'className='my_btn'>찜한 강의 보러가기
    <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon>
    </Link>
    <Link to='/mypage/receipt'className='my_btn'>구매 내역
    <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon>
    </Link>
    <Link to='/mypage/qna'className='my_btn'>1:1문의
    <FontAwesomeIcon icon={faPlus} className='plus_icon'></FontAwesomeIcon>
    </Link>
    </>
  );
}

export default MypageButton;