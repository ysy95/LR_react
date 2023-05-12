
import {React,useState,useEffect} from 'react';
import ReactPlayer from 'react-player'; // ReactPlayer import 추가
import React from 'react';
import './css/main.css';
import './css/mypage.css';
import Mypage from './nav/Mypage';


function Main(props) {

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSmallImageIndex, setSelectedSmallImageIndex] = useState(0);
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showButton3, setShowButton3] = useState(false);
  const [selectedImageDescription, setSelectedImageDescription] = useState('');

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowButton1(false);
    setShowButton2(false);
    setShowButton3(false);

    if (index === 0) {
      setShowButton1(true);
    } else if (index === 1) {
      setShowButton2(true);
    } else if (index === 2) {
      setShowButton3(true);
    }
    
  };

  const handleSmallImageClick = (index) => {
    setSelectedSmallImageIndex(index);
    setSelectedImageIndex(index);
    setSelectedImageDescription(`이미지${index + 1}에 대한 설명`);
  };
  
  useEffect(() => {
    setShowButton1(false);
    setShowButton2(false);
    setShowButton3(false);

    if (selectedImageIndex === 0) {
      setShowButton1(true);
    } else if (selectedImageIndex === 1) {
      setShowButton2(true);
    } else if (selectedImageIndex === 2) {
      setShowButton3(true);
    }
  }, [selectedImageIndex]);


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

          <article>
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
  />
  
  {selectedSmallImageIndex === 0 && (
    <div className="image-description">이미지1에 대한 설명</div>
  )}
  </li>  

<li className="small-image-container">
  <img
    className={selectedSmallImageIndex === 1 ? 'active' : ''}
    src={process.env.PUBLIC_URL + `/images/main/img2.jpg`}
    onClick={() => handleSmallImageClick(1)}
  />
  
  {selectedSmallImageIndex === 1 && (
    <div className="image-description">이미지2에 대한 설명</div>
  )}
  </li>


<li className="small-image-container">
  <img
    className={selectedSmallImageIndex === 2 ? 'active' : ''}
    src={process.env.PUBLIC_URL + `/images/main/img3.jpg`}
    onClick={() => handleSmallImageClick(2)}
  />
  
  {selectedSmallImageIndex === 2 && (
    <div className="image-description">이미지3에 대한 설명</div>
  )}
  </li>
</ul>

{/* 큰이미지 */}
<div className="big-image">
  <img src={process.env.PUBLIC_URL + `/images/main/bimg${selectedImageIndex + 1}.jpg`} alt={`큰이미지${selectedImageIndex + 1}`} />

  <div className='btn_wrap1'>
  {showButton1 && <span className="button1">버튼1</span>}
  {showButton1 && <span className="button1">버튼2</span>}
  </div>

  <div className='btn_wrap2'>
  {showButton2 && <span className="button2">버튼3</span>}
  {showButton2 && <span className="button2">버튼4</span>}
  </div>

  <div className='btn_wrap3'>
  {showButton3 && <span className="button3">버튼5</span>}
  {showButton3 && <span className="button3">버튼6</span>}
  </div>

</div>

    <div className='more_class'>
      <a href='#' title='더 많은 강의 보러가기'>
        더 많은 강의 보러가기
      <img src='./images/main/Group.png' alt='화살표'/>
      </a>
    </div>
          </article>


        {/* 이벤트 챌린지 */}
        
      <div>
        <h2>Event & Challenge</h2>
        <p>당신의 댄스 재능을 뽐내 보세요</p>
      </div>

      <section>
        {/* 인트로 화면 챌린지 */}
        <article className='event_back'>
          <h3>DANCE BATTLE</h3>

          <div className='white_hi'>
            <a href='#' title='챌린지바로가기'>
            <img src='./images/main/Hi_white.gif' alt='하얀안녕'/>
          </a>
          </div>

          <div>V</div>

            <div className='move_back'>
              <h3>CHALLENGE</h3>
              
              <div className='black_hip'>
                <a href='#' title='챌린지 바로가기'>
                <img src='./images/main/Hip_black.gif' alt='검정엉덩이'/>
                </a>
              </div>

              <div>S</div>
            </div>
          </article>
            {/* 들어오는 엉덩이 */}
            
          <article className='in_back'>
            <h3>DANCE BATTLE</h3>
            <a href='#' title='챌린지 바로가기'>
              <img src='./images/main/Hip_black.gif' alt='검은엉덩이'/>
            </a>
            <div>V</div>

            <div className='move_back2'>
              <h3>CHALLENGE</h3>
              <a href='#' title='챌린지 바로가기'>
                <img src='./images/main/Hi_white.gif' alt='하얀엉덩이'/>
              </a>
              <div>S</div>
            </div>
          </article>
        </section>
    </>

  return (
    <div>
    <Mypage />
    </div>

  );
}

export default Main;