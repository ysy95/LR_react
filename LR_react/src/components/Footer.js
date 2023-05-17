import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


function Footer(props) {
  return (
    <footer>
    <div className="chat_top">
    <Link to='/chat' title="챗봇">
    <FontAwesomeIcon icon={faRobot} className='chatbot'></FontAwesomeIcon>
    </Link>

    <a href="#none"  title="최상단으로 이동" className="top_btn">
    <FontAwesomeIcon icon={faPlay} className='top_btn'></FontAwesomeIcon>
    </a>
    </div>

    <nav className="f_lnb">
    <ul className="flex">
      <li><a href="#none" title="이용약관">이용약관</a></li>
      <li><a href="#none" title="개인정보처리방침">개인정보처리방침</a></li>
      <li><a href="#none" title="환불규정">환불규정</a></li>
    </ul>
    </nav>

    <section>
      <h2 className="hidden">푸터</h2>
      <article className="flex">
        <h2>
          <Link to='/' title="메인으로 이동">
          <img src={`${process.env.PUBLIC_URL}/images/u_common/logo.png`}  alt="로고 이미지" />
          </Link>
        </h2>
        <div className="ft_sns">
          <a href="#none" title="인스타로 이동">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>

          </a>
          <a href="#none" title="유투브로 이동">
        <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </article>
      <article>
        <h2 className="hidden">오에프디 스튜디오 정보</h2>
        <p>오에프디 스튜디오(주)</p>
        <p>대표자 : 강재민</p>
        <p>사업자번호 : 02-123</p>
        <p>통신판매업신고번호 : 제2023-종로그린-B호</p>
      </article>

      
    </section>
    <address>
      2023 &copy; OFD STUDIO All rigts Reserved.
    </address>
  </footer>
  );
}

export default Footer;