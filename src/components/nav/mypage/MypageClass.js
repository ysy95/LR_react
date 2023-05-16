import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";


function MypageClass(props) {
  return (
    <div>
    <section id="my_class">
    <h2 className="hidden">프로필</h2>
    <article className="myclass_top flex">
    <h3 className="hidden">프로필</h3>
    <img src={`${process.env.PUBLIC_URL}/images/myclass/kayday.jpg`}  alt="프로필 이미지" className='profile_img' />
      {/* <!-- 이미지 src 추후 데이터 변경 예정 --> */}

    <div className="profile_info">
      
      <div className="info_top flex">
        <p><span>ARRON</span>님</p>
        <Link to='/update'>
        <FontAwesomeIcon icon={faGear} className='setting'></FontAwesomeIcon>
        </Link>
      </div>

      <div className="info_bottom t_center flex">
        <div>
          <p>6</p>
          <p><a href="mychallenge.php">챌린지</a></p>
        </div>

        <div>
          <p>3</p>
          <p>팔로잉</p>
        </div>

        <div>
          <p>2</p>
          <p>팔로워</p>
        </div>
      </div>

    </div>
  </article>
  </section>
    </div>
  );
}

export default MypageClass;