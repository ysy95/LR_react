import React from 'react';
import ReactPlayer from 'react-player'; // ReactPlayer import 추가
import './css/main.css';

function Main(props) {
  <script>
    
  </script>
  return (

    <>
      <section className='videos'>
        {/* 영상 */}
          <ReactPlayer
          url={process.env.PUBLIC_URL + '/videos/monika.mp4'}
          playing={true}
          muted={true}
          loop={true}
          controls={false}
          />
      </section>
        {/* instructor */}
        <section>
          <article>
          <h2>instructor</h2>
          <p>OFD studio의 인기강의를 만나 보세요!</p>
          </article>

          {/* 이미지 */}
          <article className=''>
          <span className='img_wrap'>
            <div><img src={process.env.PUBLIC_URL + '/images/img1.jpg'} alt='이미지1' /></div>
            <div className='img_center'><img src={process.env.PUBLIC_URL + '/images/img2.jpg'} alt='이미지2'  /></div>
            <div><img src={process.env.PUBLIC_URL + '/images/img3.jpg'} alt='이미지3' 
            />
            <div className='img_dup'>
              &nbsp;
            </div>

        
            </div>
              {/* 큰 이미지 */}
              <span className='big_img'><img src={process.env.PUBLIC_URL + '/images/bimg1.jpg'} alt='큰이미지1'/></span>

          </span>
          </article>
        </section> 
    </>
  );
}

export default Main;