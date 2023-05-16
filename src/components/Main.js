import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './css/main.css';

function Main(props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSmallImageIndex, setSelectedSmallImageIndex] = useState(0);
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showButton3, setShowButton3] = useState(false);
  const [showHip1, setShowHip1] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleSmallImageClick = (index) => {
    setSelectedImageIndex(index);
    setSelectedSmallImageIndex(index);

    setShowButton1(index === 0);
    setShowButton2(index === 1);
    setShowButton3(index === 2);
  };

  useEffect(() => {
    setShowButton1(selectedImageIndex === 0);
    setShowButton2(selectedImageIndex === 1);
    setShowButton3(selectedImageIndex === 2);
  }, [selectedImageIndex]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClick1 = () => {
    if (isChecked) {
      setShowHip1(true);
    } else {
      setShowHip1(false);
    }
  };

  const handleClick2 = () => {
    if (isChecked) {
      setShowHip1(false);
    }
  };



  return (

    <>
      <section className='videos'>
        {/* 영상 */}
          <ReactPlayer
          url={process.env.PUBLIC_URL + '/videos/main/monika.mp4'}
          playing={true}
          muted={true}
          loop={true}
          controls={false}
          />
      </section>
        {/* instructor */}

          <article className='ins_wrap'>
          <h2>instructor</h2>
          <p>OFD studio의 인기강의를 만나 보세요!</p>
          </article>


     {/* 이미지 */}
    <article>
      <ul className='img_wrap'>
    <li className="small-image-container">
  <img
    className={selectedSmallImageIndex === 0 ? 'active' : ''}
    src={process.env.PUBLIC_URL + `/images/main/img1.jpg`}
    onClick={() => handleSmallImageClick(0)}
    alt={'메인이미지1'}
  />
  
  {selectedSmallImageIndex === 0 && (
    <div className="image-description">K-DAY</div>
  )}
  </li>  

<li className="small-image-container">
  <img
    className={selectedSmallImageIndex === 1 ? 'active' : ''}
    src={process.env.PUBLIC_URL + `/images/main/img2.jpg`}
    onClick={() => handleSmallImageClick(1)}
    alt={'작은이미지'}
  />
  
  {selectedSmallImageIndex === 1 && (
    <div className="image-description">Lip-J</div>
  )}
  </li>


<li className="small-image-container">
  <img
    className={selectedSmallImageIndex === 2 ? 'active' : ''}
    src={process.env.PUBLIC_URL + `/images/main/img3.jpg`} alt={'작은 이미지'}
    onClick={() => handleSmallImageClick(2)}
  />
  
  {selectedSmallImageIndex === 2 && (
    <div className="image-description">Monika</div>
  )}
  </li>
</ul>

{/* 큰이미지 */}
<div className="big-image">
  <img src={process.env.PUBLIC_URL + `/images/main/bimg${selectedImageIndex + 1}.jpg`} alt={`큰이미지${selectedImageIndex + 1}`} />

  <div className='btn_wrap1'>
  {showButton1 && <Link to='/class' title='K-DAY에 대해서' className="button1">About K-day</Link>}
  {showButton1 && <Link to='/class' title='K-DAY 수업'className="button1">K-day Class</Link>}
  </div>

  <div className='btn_wrap2'>
  {showButton2 && <Link to='/class' title='Lip-J에 대해서'className="button2">About Lip-J</Link>}
  {showButton2 && <Link to='/class' title='Lip-J 수업'className="button2">Lip-J Class</Link>}
  </div>

  <div className='btn_wrap3'>
  {showButton3 && <Link to='/class' title='Monika에 대해서'className="button3">About Monika</Link>}
  {showButton3 && <Link to='/class' title='Monika 수업'className="button3">Monika Class</Link>}
  </div>

</div>

    <div className='more_class'>
      <Link to='/class' title='더 많은 강의 보러가기'>
        더 많은 강의 보러가기
      <img src={process.env.PUBLIC_URL+`/images/main/Group.png`} alt={'화살표'}/>
      </Link>
    </div>
          </article>


        {/* 이벤트 챌린지 */}
        
      <div className='event_tit'>
        <h2><Link to ='/Mypage/challenge'>Event & Challenge</Link></h2>
        <p>당신의 댄스 재능을 뽐내 보세요</p>
      </div>

      <label htmlfor='move'>
      <section>
        {/* 인트로 화면 챌린지 */}
        <article className='event_back'>
        <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} id='move' />
          <div className='white_hi'>
            <h3>DANCE BATTLE</h3>
            <img src={process.env.PUBLIC_URL+`/images/main/Hi_white.gif`} alt={'하얀안녕'}/>
          </div>
            
          <div className='white_hi2'>
            <h3>CHALLENGE</h3>
            <img src={process.env.PUBLIC_URL+`/images/main/Hi_white.gif`} alt={'하얀안녕2'}/>
          </div>
          
          <div className='vs_po'>
            <span>V</span>
            <span>S</span>
            </div>

          
          {/* 토글 엉덩이 */}
          
          <div className={`hip_wrap ${isChecked ? 'left50' : 'right50'}`}>

            {/* 엉덩이1번 */}
            <div className={`black_hip1 ${showHip1 ? 'active' : ''}`}onClick={handleClick1}>
              <h3 className={`${isChecked ? 'hidden' : ''}`}>CHALLENGE</h3>
                <img src={process.env.PUBLIC_URL+`/images/main/Hip_black.gif`} alt={'검은엉덩이'}/>
                <span className={`move_txt1 ${isChecked ? 'hidden' : ''}`}>S</span>
                <span className={`move_txt2 ${isChecked ? '' : 'hidden'}`}>V</span>
            </div>

          {/* 엉덩이2번 */}
          <div className={`black_hip2 ${showHip1 ? 'active' : ''}`}onClick={handleClick2}>
            <h3 className={`${isChecked ? '' : 'hidden'}`}>DANCEBATTLE</h3>

            <img src={process.env.PUBLIC_URL+`/images/main/Hip_black.gif`} alt={'검은엉덩이2'}/>

          </div>

        </div>
        
      </article>
        </section>
          </label>

          {/* Contact Us */}
          <section className='con_wrap'>
            <h2>Contact Us</h2>
            <article>

              <div className='con con_moon'>
                <Link to='/Mypage/qna' title='1:1문의하기'>1:1문의하기
                </Link>
                <img src={process.env.PUBLIC_URL+`/images/main/Group 928.png`} alt={'1:1문의'}/>
                </div>

                <div className='con con_pado'>
                <a href='https://www.padoent.com/about' title='파도엔터' target='_blank' rel='noopener noreferrer'>Pado ENT.</a>
                <img src={process.env.PUBLIC_URL+`/images/main/Group 929.png`} alt={'파도엔터'}/>
                </div>

                <div className='con con_osi'>
                <Link to='/' title='오시는길'>오시는 길</Link>
                <img src={process.env.PUBLIC_URL+`/images/main/Group 930.png`} alt={'오시는길'}/>
                </div>
            </article>
          </section>
    </>
  );
}

export default Main;