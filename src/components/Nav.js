import React, { useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();
  const loginCheck = () => {
    const loginYorN = localStorage.getItem('loginInfo');
    if (loginYorN) {
      // 로그인 상태일 경우 마이페이지로 이동
      navigate('/mypage');
    } else {
      // 로그인 상태가 아닐 경우 로그인 페이지로 이동
      navigate('/login');
    }
  };

  useEffect(() => {
    loginCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <nav id='u_nav'>
      <ul className='nav_lnb flex'>
        <li>
          <Link to='/gnb' title='메뉴' className='flex f_center'>
            <div id='burger'>
              <span className="burger1">&nbsp;</span>
              <span className="burger2">&nbsp;</span>
              <span className="burger3">&nbsp;</span>
            </div>
            <p>메뉴</p>
          </Link>
        </li>
        <li>
          <a href='#none' title='마이페이지 혹은 로그인 'className='flex f_center' onClick={loginCheck}>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <p>마이페이지</p>
          </a>
        </li>
        <li>
          <Link to='/Search' title='검색' className='flex f_center'>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            <p>검색</p>
          </Link>
        </li>
        <li>
          <Link to='/cart' title='장바구니' className='flex f_center'>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            <p>장바구니</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;