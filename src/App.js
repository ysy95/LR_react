import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import axios from 'axios';

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

  const [memberclasslist, setmemberClassList] = useState([]);
  const [error, setError] = useState(null);
  const [searchInput, setsearchInput] = useState('');

  const productListPHP = 'http://jamm.dothome.co.kr/revolution_user/memberclasslist.php';

  const fetchList = async() => {
    try { // 응답 성공
      const response = await axios.get(productListPHP);
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

          <Route path='/' element={<Main />} />
          <Route path='/class/*' element={<Class memberclasslist={memberclasslist} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/mypage/*' element={<Mypage />} />
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
