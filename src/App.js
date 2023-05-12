import React from 'react';
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
import Gnb from './components/nav/Gnb';
import Search from './components/nav/Search';
import Cart from './components/nav/Cart';

import Chatbot from './components/Chatbot';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/class/*' element={<Class />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/mypage/*' element={<Mypage />} />
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
