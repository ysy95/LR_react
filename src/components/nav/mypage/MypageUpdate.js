import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function MypageUpdate({userInfo}) {
  const users = localStorage.getItem('loginInfo');
  const user = JSON.parse(users);
  const navigate = useNavigate();
  console.log(user);
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const id = user.id;
  console.log(user.email);
  const UpdateData = new FormData();
  UpdateData.append('id', id)
  UpdateData.append('pw', pw)
  UpdateData.append('pw2', pw2)
  UpdateData.append('name', name)
  UpdateData.append('email', email)
  UpdateData.append('phone', phone);
  
  const InputUpdate = (e) => {
    e.preventDefault();
    if(pw != pw2) {
      return ;
    }
    const phpLink = 'http://jamm.dothome.co.kr/revolution_user/member_update_confirm.php';
    axios.post(phpLink, UpdateData)
    .then((response) => {
        console.log(response.data)
        if(response.data.success == true) {
          alert('업데이트에 성공했습니다!')
          navigate('/mypage')
        } else {
          alert('실패');
        }
      }
    )
  }

  return (
    <section class="register">
    <h2>회원 정보 수정</h2>
    <article>
    <h3 className='hidden'>회원 정보 수정</h3>
    {/* php */}
    <p><span>{user.name}</span>님 <br/>
    함께 흔들 준비 되셨나요?
    </p>
    <form action="" name="register_update">

    <div className='register_wrap'>

    <div className='img_update'>
    <label htmlFor="memebr_img">
    <img src={`${process.env.PUBLIC_URL}/images/myclass/monika.jpg`}  alt="프로필 이미지" className='member_img' />
    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
    </label>
    <input type="file" alt="프로필 이미지" id='memebr_img'/>
    </div>

    <input type="text" name="name" title='이름' placeholder={user.name} onChange={(e) => setName(e.target.value)}/>
  <input type="password" name="pw" title='비밀번호'  placeholder='비밀번호 수정' onChange={(e) => setPw(e.target.value)}/>
  <input type="password" name="pw2" title='비밀번호 수정 확인' 
  placeholder='비밀번호 확인' onChange={(e) => setPw2(e.target.value)}/>
  <input type="tel" name="phone" title='전화번호' placeholder={user.phone}  onChange={(e) => setPhone(e.target.value)} />
  <input type="email" name="email" placeholder={user.email} title='이메일' onChange={(e) => setEmail(e.target.value)}/>
  <input type="button" onClick={InputUpdate} value="정보 수정 완료" className='r_btn' />
  </div>
  
    </form>
    </article>
  </section>
  );
}

export default MypageUpdate;