import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Nav(props) {
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
          <Link to='/mypage' title='마이페이지' className='flex f_center'>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <p>마이페이지</p>
          </Link>
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