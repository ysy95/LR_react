import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import './components/css/u_common.css';
import './components/css/u_member.css';
import './components/css/mypage.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

import Main from './components/Main';
import Class from './components/main/Class';
import Login from './components/main/Login';
import Register from './components/main/Register';
import Mypage from './components/nav/Mypage';
import MypageUpdate from './components/nav/mypage/MypageUpdate';
import Gnb from './components/nav/Gnb';
import Search from './components/nav/Search';
import Cart from './components/nav/Cart';

import Chatbot from './components/Chatbot';
import ErrorPage from './components/ErrorPage';

function App() {
  /* 유저 로그인, 정보 */
  const [userInfo, setUserInfo] = useState('');
  const [loginInfo, setLoginInfo] = useState(false);
  const [qnalist, setQnalist] = useState([]);
  const [error, setError] = useState(null);
  const productListPHP = 'http://jamm.dothome.co.kr/revolution_user/answer.php';

  const getData = () => {
    const userId = localStorage.getItem('loginInfo')
    if(userId) {
      setUserInfo(userId);
    } else {
      setUserInfo('');
    }
  }

  const fetchQnaList = async() => {
    try { // 응답 성공
      const response = await axios.get(productListPHP);
      console.log(response.data.qnalist, response.data.adqnalist);

      localStorage.setItem("myqnalist", JSON.stringify(response.data.qnalist));
      console.log()
      const qnaTable = JSON.parse(localStorage.getItem('myqnalist'));
      localStorage.setItem("adqnalist", JSON.stringify(response.data.adqnalist));
      const adQnaTable = JSON.parse(localStorage.getItem('adqnalist'));

      // 전체 qna와 ad_qna매칭, 일치하는 num이 존재하는 경우 배열 합쳐 반환, 아닐 경우 그냥 qna만 반환
      const qnaFilter = qnaTable.map(item1 => {
        const matchingItems = adQnaTable.filter(item2 => item1.num === item2.num);
        if (matchingItems.length > 0) {
          return { ...item1, ...matchingItems[0] };
        }
        return item1;
      });

      const QnaUser = JSON.parse(userInfo);
      console.log(QnaUser);
      const QnaUserId = QnaUser.id;
      const MyQnaFilter = qnaFilter.filter(item=> item.id === QnaUserId);    
      // qnaList 값 저장
      setQnalist(MyQnaFilter);
      console.log(qnalist);
    } catch (e) { // 응답 실패
      setError(e);
      console.log(e +error);
    }
  }

  useEffect(() => {
    fetchQnaList();
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Main userInfo={userInfo} />} />
          <Route path='/class/*' element={<Class />} />
          <Route path='/login' element={<Login loginInfo={loginInfo} setLoginInfo={setLoginInfo} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/mypage/*' element={<Mypage loginInfo={loginInfo} setLoginInfo={setLoginInfo} qnalist={qnalist} setQnalist={setQnalist} />} />
          <Route path='/update' element={<MypageUpdate />} />
          <Route path='/gnb' element={<Gnb />} />
          <Route path='/search/*' element={<Search />} />
          <Route path='/cart' element={<Cart />} />


          <Route path='/chat' element={<Chatbot />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Nav />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
