import './App.css';

import Header from './components/Header';
// import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';

// import SearchResult from './components/nav/SearchResult';
// import Search from './components/nav/Search';
// import Gnb from './components/nav/Gnb';
// import Class from './components/main/Class';
// import Mypage from './components/nav/Mypage.js';
// import Login from './components/main/Login';
import Chatbot from './components/Chatbot';


import './components/css/u_common.css';
import './components/css/u_member.css';

// import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <Header />
      {/* routes */}

      {/* <Main /> */}
      {/* <ErrorPage /> */}
      {/* <Class /> */}
      {/* <Gnb /> */}
      {/* <Search /> */}
      {/* <SearchResult /> */}
      {/* <Mypage /> */}
      {/* <Login /> */}
      <Chatbot />


      {/* routes */}
      <Nav />
      <Footer />
    </>
  );
}

export default App;
