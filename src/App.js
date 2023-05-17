import React, {useEffect, useState} from 'react';
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

      const qnaTable = JSON.parse(localStorage.getItem('myqnalist'));
      localStorage.setItem("adqnalist", JSON.stringify(response.data.adqnalist));
      const adQnaTable = JSON.parse(localStorage.getItem('adqnalist'));

      const qnaFilter = qnaTable.map(obj1 => {
      const qnaFilter2 = adQnaTable.find(obj2 => obj2.num === obj1.num);
      return qnaFilter2 ? {...obj1, ...qnaFilter2} : obj1;})
      console.log(qnaFilter);
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
  

  const [memberclasslist, setmemberClassList] = useState([]);
  const [searchInput, setsearchInput] = useState('');

  const classListPHP = 'http://jamm.dothome.co.kr/revolution_user/memberclasslist.php';

  const fetchList = async() => {
    try { // 응답 성공
      const response = await axios.get(classListPHP);
      setmemberClassList(response.data.memberclasslist);
      console.log(response);
    } catch (e) { // 응답 실패
      setError(e);
      console.log(e +error);
    }
  }

  useEffect(() => {
    fetchList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Main userInfo={userInfo} />} />
          <Route path='/class/*' element={<Class memberclasslist={memberclasslist} />} />
          <Route path='/login' element={<Login loginInfo={loginInfo} setLoginInfo={setLoginInfo} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/mypage/*' element={<Mypage loginInfo={loginInfo} setLoginInfo={setLoginInfo} />} />
          <Route path='/update' element={<MypageUpdate />} />
          <Route path='/gnb' element={<Gnb />} />
          <Route path='/search/*' element={<Search memberclasslist={memberclasslist} searchInput={searchInput} setsearchInput={setsearchInput}/>} />
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
