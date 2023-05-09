import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <header>
    <div className="hd_top flex">
      <h1>
        <a href="#none" title="메인페이지 이동">
        <img src={`${process.env.PUBLIC_URL}/images/u_common/logo.png`}  alt="로고 이미지" />
        </a>
      </h1>
      <div>
        <a href="#none" className="e_alert">
        <FontAwesomeIcon icon={faBell} className='alert'></FontAwesomeIcon>
        </a>
      </div>
    </div>

    {/* <!-- 스크롤 시 사라지는 하단 헤더 --> */}
    <div className="hd_bottom">
      <nav className="hd_lnb">
      <ul className="flex f_center">
        <li><a href="#none">About Us</a></li>
        <li><a href="classlist.php">Class</a></li>
        <li><a href="#none">Contact us</a></li>
      </ul>
      </nav>
    </div>
    </header>
  );
}

export default Header;